import { useEffect, useRef, useState } from 'react'

export function useIsMobile(breakpoint = 860) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [breakpoint])

  return isMobile
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}

export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)

    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.32
      let current = ''
      sections.forEach((s) => {
        if (s.offsetTop <= mid) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  return active
}

export function useNavBackground() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrolled
}

// Scroll-reactive hero: as you scroll down, the content drifts up, zooms out,
// tilts back in 3D and fades — a dynamic "receding into the page" landing.
export function useHeroParallax() {
  const ref = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const vh = window.innerHeight || 1
      const y = window.scrollY
      if (y < vh) {
        const p = y / vh // 0 at top → 1 one screen down
        el.style.transformOrigin = '50% 0%'
        el.style.transform = `perspective(1200px) translateY(${y * 0.34}px) scale(${(1 - p * 0.14).toFixed(3)}) rotateX(${(p * 7).toFixed(2)}deg)`
        el.style.opacity = String(Math.max(0, 1 - y / (vh * 0.82)))
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return ref
}

// Reveal that re-triggers: elements animate IN when they enter the viewport
// and OUT when they leave, so the page keeps moving as you scroll up or down.
// Pass { once: true } to make it a one-shot reveal instead.
export function useReveal(options = {}) {
  const { once = false, threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = options
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) io.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold, rootMargin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once, threshold, rootMargin])

  return [ref, visible]
}

// Continuous parallax drift: the element glides vertically as it travels
// through the viewport, giving a constant sense of motion while scrolling.
export function useParallax(strength = 26) {
  const ref = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const el = ref.current
    if (!el) return

    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // -1 when below the fold, 0 when centered, +1 when above
      const progress = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2)
      el.style.transform = `translate3d(0, ${(-progress * strength).toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [strength])

  return ref
}

export function useCountUp(target, visible, suffix = '') {
  const [value, setValue] = useState('0' + suffix)

  useEffect(() => {
    if (!visible) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target + suffix)
      return
    }
    const duration = 1500
    const start = performance.now()
    let frame
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased) + suffix)
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, target, suffix])

  return value
}

export function useSpotlight() {
  const cardRef = useRef(null)
  const spotRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const card = cardRef.current
    const spot = spotRef.current
    if (reduce || !card || !spot) return

    const onMove = (e) => {
      const r = card.getBoundingClientRect()
      spot.style.background = `radial-gradient(420px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(34,211,238,.12), transparent 60%)`
      spot.style.opacity = '1'
    }
    const onLeave = () => {
      spot.style.opacity = '0'
    }
    card.addEventListener('pointermove', onMove)
    card.addEventListener('pointerleave', onLeave)
    return () => {
      card.removeEventListener('pointermove', onMove)
      card.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return { cardRef, spotRef }
}
