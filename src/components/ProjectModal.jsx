import { useEffect } from 'react'
import { useLang } from '../i18n'

// Full-screen case-study dialog for a single project. `project` is a content.js
// entry (key, name, image, tags, cta) or null when closed.
export default function ProjectModal({ project, onClose }) {
  const { t } = useLang()

  // Esc to close + lock body scroll while open.
  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [project, onClose])

  if (!project) return null

  const k = project.key
  const tagline = t(`projects.${k}.tagline`)
  const description = t(`projects.${k}.description`)
  const built = t(`studies.${k}.built`)
  const highlights = t(`studies.${k}.highlights`)

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} — ${t('studies.viewCase')}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'grid',
        placeItems: 'center',
        padding: 'clamp(12px,3vw,40px)',
        background: 'rgba(4,6,10,.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: 'min(880px, 100%)',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 20,
          border: '1px solid rgba(255,255,255,.1)',
          background: '#0b0f17',
          boxShadow: '0 40px 100px -30px rgba(0,0,0,.85)',
        }}
      >
        <button
          onClick={onClose}
          aria-label={t('studies.close')}
          title={t('studies.close')}
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            zIndex: 3,
            width: 38,
            height: 38,
            display: 'grid',
            placeItems: 'center',
            borderRadius: 10,
            cursor: 'pointer',
            fontSize: 20,
            lineHeight: 1,
            color: '#e6eef7',
            background: 'rgba(8,11,18,.7)',
            border: '1px solid rgba(255,255,255,.16)',
            backdropFilter: 'blur(6px)',
          }}
        >
          ×
        </button>

        {project.image && (
          <div style={{ position: 'relative', height: 'clamp(180px,34vw,300px)', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            <img src={project.image} alt={`${project.name} — ${tagline}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,#0b0f17 100%)' }} />
          </div>
        )}

        <div style={{ padding: 'clamp(24px,4vw,40px)' }}>
          <h2 style={{ margin: '0 0 6px', fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, letterSpacing: '-.02em', color: '#fff', lineHeight: 1.1 }}>{project.name}</h2>
          <p style={{ margin: '0 0 20px', fontSize: 17, color: 'var(--accent)', fontWeight: 500 }}>{tagline}</p>
          <p style={{ margin: '0 0 28px', fontSize: '15.5px', lineHeight: 1.75, color: '#aebdce' }}>{description}</p>

          {/* highlights */}
          {Array.isArray(highlights) && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginBottom: 32 }}>
              {highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px 18px',
                    borderRadius: 14,
                    background: 'rgba(255,255,255,.025)',
                    border: '1px solid rgba(255,255,255,.08)',
                  }}
                >
                  <div style={{ fontSize: 'clamp(18px,2.4vw,24px)', fontWeight: 800, color: '#fff', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '-.01em', lineHeight: 1.15 }}>{h.value}</div>
                  <div style={{ marginTop: 4, fontSize: 12.5, color: '#8597a9', letterSpacing: '.02em' }}>{h.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* what I built */}
          {Array.isArray(built) && (
            <div style={{ marginBottom: 30 }}>
              <h3 style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 600, color: '#cdd9e5', letterSpacing: '.06em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono',monospace" }}>{t('studies.builtHeading')}</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {built.map((line, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, fontSize: '15px', lineHeight: 1.6, color: '#93a5b7' }}>
                    <span aria-hidden style={{ flexShrink: 0, marginTop: 7, width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(120deg,var(--accent2),var(--accent))', boxShadow: '0 0 8px var(--glow)' }} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* tech stack */}
          <div style={{ marginBottom: 30 }}>
            <h3 style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 600, color: '#cdd9e5', letterSpacing: '.06em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono',monospace" }}>{t('studies.stackHeading')}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 11 }}>
            {project.cta.map((cta) => (
              <a key={cta.key} href={cta.href} target="_blank" rel="noopener noreferrer" className={`btn ${cta.primary ? 'btn-primary' : 'btn-ghost'}`} style={{ padding: '11px 18px', fontSize: 14 }}>
                {t(`projects.cta.${cta.key}`)} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
