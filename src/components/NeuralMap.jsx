import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks'
import { useLang } from '../i18n'
import { neuralNodes, neuralLinks, neuralGroups, neuralHubs, neuralLegend } from '../content'

// Physics constants (world units). Tuned for ~24 nodes — cheap O(n²) repulsion.
const REPULSION = 5400
const SPRING = 0.026
const CENTERING = 0.012
const DAMPING = 0.86

// Rest length of a link depends on what it connects.
function restFor(a, b) {
  if (a === 'me' || b === 'me') return 152 // center → hub
  const aHub = neuralHubs.includes(a)
  const bHub = neuralHubs.includes(b)
  if (aHub || bHub) return 84 // hub → leaf
  return 130 // leaf ↔ leaf cross-link
}

export default function NeuralMap() {
  const { t, dir } = useLang()
  const [headRef, headVisible] = useReveal()

  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const apiRef = useRef(null) // imperative handles (recenter / zoom) exposed by the effect
  const selectedRef = useRef(null)
  const labelsRef = useRef({})
  const dirRef = useRef(dir)

  const [selected, setSelected] = useState(null)

  // Keep the render loop in sync with React state / language without re-running the effect.
  selectedRef.current = selected
  dirRef.current = dir
  labelsRef.current = Object.fromEntries(neuralNodes.map((n) => [n.id, t(`neural.nodes.${n.id}.label`)]))

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // --- build the simulation graph -------------------------------------
    const nodes = neuralNodes.map((n) => ({
      ...n,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      pinned: n.id === 'me',
      bobA: n.id === 'me' ? 0 : neuralHubs.includes(n.id) ? 2.4 : 4.2,
      bobS: 0.5 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
    }))
    const byId = new Map(nodes.map((n) => [n.id, n]))
    const links = neuralLinks.map(([a, b]) => ({ a: byId.get(a), b: byId.get(b), rest: restFor(a, b) }))
    const neighbors = new Map(nodes.map((n) => [n.id, new Set()]))
    neuralLinks.forEach(([a, b]) => {
      neighbors.get(a).add(b)
      neighbors.get(b).add(a)
    })
    const pulses = links.map((link) => ({ link, p: Math.random(), speed: 0.003 + Math.random() * 0.004 }))

    // initial radial layout: center at origin, hubs on a ring, leaves fanned out
    byId.get('me').x = byId.get('me').y = 0
    const childrenOf = Object.fromEntries(neuralHubs.map((h) => [h, []]))
    neuralLinks.forEach(([a, b]) => {
      if (neuralHubs.includes(a) && b !== 'me') childrenOf[a].push(b)
    })
    neuralHubs.forEach((h, i) => {
      const ang = -Math.PI / 2 + (i / neuralHubs.length) * Math.PI * 2
      const hub = byId.get(h)
      hub.x = Math.cos(ang) * 150
      hub.y = Math.sin(ang) * 150
      childrenOf[h].forEach((k, j) => {
        const ka = ang + (j - (childrenOf[h].length - 1) / 2) * 0.62
        const leaf = byId.get(k)
        leaf.x = hub.x + Math.cos(ka) * 92
        leaf.y = hub.y + Math.sin(ka) * 92
      })
    })

    const cam = { scale: 1, tx: 0, ty: 0, fit: 1 }
    const S = { hoverId: null, dragId: null, panning: false, last: null, moved: false, pointerId: null, raf: 0 }
    let width = 0
    let height = 0
    let dpr = 1
    let running = false

    // --- camera helpers --------------------------------------------------
    const toScreen = (x, y) => [x * cam.scale + cam.tx, y * cam.scale + cam.ty]
    const toWorld = (sx, sy) => [(sx - cam.tx) / cam.scale, (sy - cam.ty) / cam.scale]
    const recenter = () => {
      cam.scale = cam.fit
      cam.tx = width / 2
      cam.ty = height / 2
      requestDraw()
    }
    const zoomBy = (f) => {
      const ax = width / 2
      const ay = height / 2
      cam.scale = Math.max(0.35, Math.min(2.6, cam.scale * f))
      cam.tx = ax - (ax - cam.tx) * f
      cam.ty = ay - (ay - cam.ty) * f
      requestDraw()
    }
    apiRef.current = { recenter, zoomIn: () => zoomBy(1.2), zoomOut: () => zoomBy(1 / 1.2) }

    // --- physics ---------------------------------------------------------
    function step() {
      for (const n of nodes) {
        n.ax = -n.x * CENTERING
        n.ay = -n.y * CENTERING
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy || 0.01
          const d = Math.sqrt(d2)
          const f = REPULSION / d2
          const fx = (dx / d) * f
          const fy = (dy / d) * f
          a.ax += fx
          a.ay += fy
          b.ax -= fx
          b.ay -= fy
        }
      }
      for (const { a, b, rest } of links) {
        const dx = b.x - a.x
        const dy = b.y - a.y
        const d = Math.hypot(dx, dy) || 0.01
        const f = (d - rest) * SPRING
        const fx = (dx / d) * f
        const fy = (dy / d) * f
        a.ax += fx
        a.ay += fy
        b.ax -= fx
        b.ay -= fy
      }
      let energy = 0
      for (const n of nodes) {
        if (n.pinned || n.id === S.dragId) {
          n.vx = n.vy = 0
          continue
        }
        n.vx = (n.vx + n.ax) * DAMPING
        n.vy = (n.vy + n.ay) * DAMPING
        n.x += n.vx
        n.y += n.vy
        energy += n.vx * n.vx + n.vy * n.vy
      }
      return energy
    }

    // --- rendering -------------------------------------------------------
    const renderPos = (n, tms) => {
      let x = n.x
      let y = n.y
      if (!reduced && n.id !== S.dragId) {
        x += Math.sin(tms * 0.001 * n.bobS + n.phase) * n.bobA
        y += Math.cos(tms * 0.0009 * n.bobS + n.phase) * n.bobA
      }
      return toScreen(x, y)
    }

    function draw() {
      const tms = performance.now()
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      const focus = S.hoverId || selectedRef.current
      const focusSet = focus ? neighbors.get(focus) : null

      // soft glow anchored on the center node
      const [cxs, cys] = toScreen(0, 0)
      const halo = ctx.createRadialGradient(cxs, cys, 0, cxs, cys, 240 * cam.scale)
      halo.addColorStop(0, 'rgba(34,211,238,0.10)')
      halo.addColorStop(1, 'rgba(34,211,238,0)')
      ctx.fillStyle = halo
      ctx.fillRect(0, 0, width, height)

      // edges
      ctx.lineCap = 'round'
      for (const { a, b } of links) {
        const [ax, ay] = renderPos(a, tms)
        const [bx, by] = renderPos(b, tms)
        const touches = focus && (a.id === focus || b.id === focus)
        const base = neuralGroups[a.id === 'me' ? b.group : a.group].color
        const alpha = focus ? (touches ? 0.9 : 0.06) : 0.4
        ctx.strokeStyle = hexA(base, alpha)
        ctx.lineWidth = (touches ? 1.7 : 1) * Math.max(0.6, Math.min(cam.scale, 1.4))
        ctx.beginPath()
        ctx.moveTo(ax, ay)
        ctx.lineTo(bx, by)
        ctx.stroke()
      }

      // signal pulses travelling along the strands
      if (!reduced) {
        for (const pulse of pulses) {
          const { a, b } = pulse.link
          const touches = focus && (a.id === focus || b.id === focus)
          const alpha = focus ? (touches ? 0.95 : 0.05) : 0.55
          const [ax, ay] = renderPos(a, tms)
          const [bx, by] = renderPos(b, tms)
          const px = ax + (bx - ax) * pulse.p
          const py = ay + (by - ay) * pulse.p
          ctx.fillStyle = hexA('#67e8f9', alpha)
          ctx.beginPath()
          ctx.arc(px, py, 2 * Math.max(0.7, Math.min(cam.scale, 1.5)), 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // nodes + labels
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.direction = dirRef.current === 'rtl' ? 'rtl' : 'ltr'
      for (const n of nodes) {
        const [x, y] = renderPos(n, tms)
        const isFocus = n.id === focus
        const dim = focus && !isFocus && !(focusSet && focusSet.has(n.id)) ? 0.18 : 1
        const r = n.size * cam.scale * (isFocus ? 1.18 : 1)
        const color = neuralGroups[n.group].color

        ctx.globalAlpha = dim
        // glow
        const g = ctx.createRadialGradient(x, y, 0, x, y, r * 3)
        g.addColorStop(0, hexA(color, isFocus ? 0.5 : 0.32))
        g.addColorStop(1, hexA(color, 0))
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, r * 3, 0, Math.PI * 2)
        ctx.fill()

        // body
        if (n.id === 'me') {
          const grad = ctx.createLinearGradient(x - r, y - r, x + r, y + r)
          grad.addColorStop(0, '#3b82f6')
          grad.addColorStop(1, '#22d3ee')
          ctx.fillStyle = grad
        } else {
          ctx.fillStyle = '#0b1320'
        }
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
        ctx.lineWidth = n.id === 'me' ? 0 : isFocus ? 2 : 1.4
        ctx.strokeStyle = hexA(color, isFocus ? 1 : 0.75)
        if (n.id !== 'me') ctx.stroke()

        // label
        const isHub = neuralHubs.includes(n.id) || n.id === 'me'
        const fpx = (n.id === 'me' ? 14.5 : isHub ? 12.5 : 11) * Math.min(1.15, Math.max(0.82, cam.scale))
        ctx.font = `${isHub ? 600 : 500} ${fpx}px Inter, system-ui, sans-serif`
        ctx.globalAlpha = dim * (focus && !isFocus && !(focusSet && focusSet.has(n.id)) ? 0.6 : 1)
        ctx.fillStyle = isFocus ? '#ffffff' : '#cdd9e5'
        ctx.fillText(labelsRef.current[n.id] || n.id, x, y + r + fpx * 0.95)
      }
      ctx.globalAlpha = 1
    }

    // Draw on demand (hover/resize) even when the loop is idle.
    let drawQueued = false
    function requestDraw() {
      if (running || drawQueued) return
      drawQueued = true
      requestAnimationFrame(() => {
        drawQueued = false
        draw()
      })
    }
    apiRef.current.redraw = requestDraw // lets a selection change repaint when the loop is idle

    function loop() {
      const energy = step()
      draw()
      // Non-reduced: keep running for the pulses/bob. Reduced: stop once settled.
      if (reduced && energy < 0.05 && !S.dragId && !S.panning) {
        running = false
        return
      }
      S.raf = requestAnimationFrame(loop)
    }
    function kick() {
      if (running) return
      running = true
      S.raf = requestAnimationFrame(loop)
    }

    // --- pointer interaction --------------------------------------------
    const localPoint = (e) => {
      const r = canvas.getBoundingClientRect()
      return [e.clientX - r.left, e.clientY - r.top]
    }
    const pickNode = (sx, sy) => {
      const [wx, wy] = toWorld(sx, sy)
      let hit = null
      let best = Infinity
      for (const n of nodes) {
        const d = Math.hypot(n.x - wx, n.y - wy)
        const reach = n.size + 7 / cam.scale
        if (d < reach && d < best) {
          best = d
          hit = n
        }
      }
      return hit
    }

    const onDown = (e) => {
      const [sx, sy] = localPoint(e)
      const node = pickNode(sx, sy)
      S.last = [sx, sy]
      S.moved = false
      S.pointerId = e.pointerId
      try {
        canvas.setPointerCapture(e.pointerId)
      } catch {
        /* not all pointers support capture */
      }
      if (node) {
        S.dragId = node.id
      } else {
        S.panning = true
      }
      kick()
    }
    const onMove = (e) => {
      const [sx, sy] = localPoint(e)
      if (S.dragId) {
        const [wx, wy] = toWorld(sx, sy)
        const n = byId.get(S.dragId)
        n.x = wx
        n.y = wy
        n.vx = n.vy = 0
        markMoved(sx, sy)
        kick()
      } else if (S.panning) {
        cam.tx += sx - S.last[0]
        cam.ty += sy - S.last[1]
        S.last = [sx, sy]
        markMoved(sx, sy)
        requestDraw()
      } else {
        const node = pickNode(sx, sy)
        const id = node ? node.id : null
        if (id !== S.hoverId) {
          S.hoverId = id
          canvas.style.cursor = id ? 'pointer' : 'grab'
          requestDraw()
        }
      }
    }
    const markMoved = (sx, sy) => {
      if (S.last && (Math.abs(sx - S.last[0]) > 3 || Math.abs(sy - S.last[1]) > 3)) S.moved = true
    }
    const onUp = () => {
      if (S.dragId && !S.moved) toggleSelect(S.dragId)
      else if (S.panning && !S.moved) toggleSelect(null)
      if (S.pointerId != null) {
        try {
          canvas.releasePointerCapture(S.pointerId)
        } catch {
          /* ignore */
        }
      }
      S.dragId = null
      S.panning = false
      S.pointerId = null
      S.last = null
    }
    const onCancel = () => {
      S.dragId = null
      S.panning = false
      S.last = null
    }
    const toggleSelect = (id) => setSelected((cur) => (cur === id ? null : id))

    canvas.addEventListener('pointerdown', onDown)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerup', onUp)
    canvas.addEventListener('pointercancel', onCancel)
    canvas.style.cursor = 'grab'

    // --- sizing ----------------------------------------------------------
    function resize() {
      const rect = wrap.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      cam.fit = Math.max(0.45, Math.min(1.6, (Math.min(width, height) / 2 - 46) / 250))
      recenter()
    }
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    resize()
    kick()

    return () => {
      ro.disconnect()
      cancelAnimationFrame(S.raf)
      canvas.removeEventListener('pointerdown', onDown)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('pointercancel', onCancel)
      apiRef.current = null
    }
  }, [])

  // Repaint when the selected node changes (covers reduced-motion, where the loop is idle).
  useEffect(() => {
    apiRef.current?.redraw?.()
  }, [selected])

  const sel = selected
  const selGroup = sel ? neuralNodes.find((n) => n.id === sel)?.group : null

  return (
    <section id="neural" style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 28px 40px' }}>
      <div ref={headRef} className={`reveal from-left${headVisible ? ' is-visible' : ''}`}>
        <div className="section-label">
          <span className="line" />
          <span className="text">06 / {t('neural.label')}</span>
        </div>
        <h2 style={{ margin: '0 0 14px', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, letterSpacing: '-.02em', color: '#eef4fb', lineHeight: 1.1 }}>
          {t('neural.heading')}
        </h2>
        <p style={{ margin: '0 0 32px', fontSize: '16.5px', lineHeight: 1.6, color: '#93a5b7', maxWidth: 680 }}>{t('neural.subtitle')}</p>
      </div>

      <div
        ref={wrapRef}
        style={{
          position: 'relative',
          height: 'min(68vh, 600px)',
          minHeight: 430,
          borderRadius: 20,
          border: '1px solid rgba(255,255,255,.08)',
          background:
            'radial-gradient(ellipse 80% 70% at 50% 40%,rgba(34,211,238,.05),transparent 70%),linear-gradient(180deg,rgba(255,255,255,.025),rgba(255,255,255,.004))',
          overflow: 'hidden',
          boxShadow: '0 30px 70px -40px rgba(0,0,0,.8)',
        }}
      >
        <canvas ref={canvasRef} aria-label={t('neural.subtitle')} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', touchAction: 'pan-y' }} />

        {/* legend */}
        <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', flexWrap: 'wrap', gap: '8px 14px', maxWidth: 'calc(100% - 120px)', pointerEvents: 'none' }}>
          {neuralLegend.map((gKey) => (
            <span key={gKey} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8597a9', letterSpacing: '.04em' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: neuralGroups[gKey].color, boxShadow: `0 0 8px ${neuralGroups[gKey].color}` }} />
              {t(`neural.groups.${gKey}`)}
            </span>
          ))}
        </div>

        {/* toolbar */}
        <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <MapButton label={t('neural.zoomIn')} onClick={() => apiRef.current?.zoomIn()}>+</MapButton>
          <MapButton label={t('neural.zoomOut')} onClick={() => apiRef.current?.zoomOut()}>−</MapButton>
          <MapButton label={t('neural.recenter')} onClick={() => apiRef.current?.recenter()}>⊚</MapButton>
        </div>

        {/* detail / hint card */}
        <div
          style={{
            position: 'absolute',
            left: 16,
            bottom: 16,
            width: 'min(330px, calc(100% - 32px))',
            padding: '16px 18px',
            borderRadius: 14,
            background: 'rgba(8,11,18,.82)',
            border: '1px solid rgba(255,255,255,.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          {sel ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 10.5,
                    textTransform: 'uppercase',
                    letterSpacing: '.08em',
                    color: neuralGroups[selGroup]?.color,
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: neuralGroups[selGroup]?.color }} />
                  {t(`neural.groups.${selGroup}`)}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  style={{ border: 'none', background: 'transparent', color: '#8597a9', cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 0 }}
                >
                  ×
                </button>
              </div>
              <h3 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700, color: '#f3f8ff' }}>{t(`neural.nodes.${sel}.label`)}</h3>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: '#9fb0c2' }}>{t(`neural.nodes.${sel}.detail`)}</p>
            </>
          ) : (
            <>
              <h3 style={{ margin: '0 0 6px', fontSize: 14, fontWeight: 600, color: '#cdd9e5', letterSpacing: '.02em' }}>{t('neural.defaultTitle')}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#8597a9' }}>{t('neural.defaultBody')}</p>
            </>
          )}
        </div>

        {/* hint */}
        <span
          style={{
            position: 'absolute',
            right: 16,
            bottom: 18,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10.5,
            color: '#5d6f81',
            letterSpacing: '.06em',
            pointerEvents: 'none',
            textAlign: 'right',
          }}
        >
          {t('neural.hint')}
        </span>
      </div>
    </section>
  )
}

function MapButton({ children, label, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      style={{
        width: 34,
        height: 34,
        display: 'grid',
        placeItems: 'center',
        borderRadius: 9,
        cursor: 'pointer',
        fontSize: 16,
        color: '#cdd9e5',
        background: 'rgba(8,11,18,.7)',
        border: '1px solid rgba(255,255,255,.12)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'color .2s, border-color .2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#fff'
        e.currentTarget.style.borderColor = 'var(--accent)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '#cdd9e5'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'
      }}
    >
      {children}
    </button>
  )
}

// "#rrggbb" + alpha → "rgba(r,g,b,a)" for per-frame opacity without re-parsing styles.
function hexA(hex, a) {
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`
}
