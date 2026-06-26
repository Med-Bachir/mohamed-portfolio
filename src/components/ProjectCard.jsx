import { useReveal, useParallax } from '../hooks'
import { useLang } from '../i18n'

export default function ProjectCard({ project, onOpen, delay = '0s', direction = 'from-up' }) {
  const { t } = useLang()
  const [ref, visible] = useReveal()
  const imgRef = useParallax(46)

  const tagline = t(`projects.${project.key}.tagline`)
  const description = t(`projects.${project.key}.description`)

  return (
    <article
      ref={ref}
      className={`reveal ${direction} project-card${visible ? ' is-visible' : ''}`}
      style={{
        transitionDelay: delay,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 18,
        border: '1px solid rgba(255,255,255,.08)',
        background: 'linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.01))',
        overflow: 'hidden',
      }}
    >
      <div
        className="shot-frame parallax case-trigger"
        onClick={() => onOpen(project)}
        role="button"
        tabIndex={0}
        aria-label={`${project.name} — ${t('studies.viewCase')}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpen(project)
          }
        }}
        style={{
          height: 170,
          background: 'repeating-linear-gradient(135deg,rgba(255,255,255,.03) 0 13px,rgba(255,255,255,.012) 13px 26px)',
          borderBottom: '1px solid rgba(255,255,255,.06)',
        }}
      >
        {project.image ? (
          <img ref={imgRef} className="shot" src={project.image} alt={`${project.name} — ${tagline}`} loading="lazy" />
        ) : (
          <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#5b6c7e', textAlign: 'center' }}>
            {project.name}
          </span>
        )}
      </div>

      <div style={{ padding: 26, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ margin: '0 0 5px', fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: '-.01em' }}>{project.name}</h3>
        <p style={{ margin: '0 0 12px', fontSize: 14, color: 'var(--accent)', fontWeight: 500 }}>{tagline}</p>
        <p style={{ margin: '0 0 18px', fontSize: '14.5px', lineHeight: 1.6, color: '#93a5b7', flex: 1 }}>{description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag" style={{ fontSize: '11.5px', padding: '4px 9px' }}>
              {tag}
            </span>
          ))}
        </div>

        <button type="button" onClick={() => onOpen(project)} className="case-link" style={{ marginBottom: 16 }}>
          {t('studies.viewCase')} →
        </button>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignSelf: 'flex-start' }}>
          {project.cta.map((cta) =>
            cta.primary ? (
              <a key={cta.key} href={cta.href} target="_blank" rel="noopener" className="btn btn-primary" style={{ padding: '9px 15px', fontSize: '13.5px' }}>
                {t(`projects.cta.${cta.key}`)} ↗
              </a>
            ) : (
              <a key={cta.key} href={cta.href} target="_blank" rel="noopener" className="text-link">
                {t(`projects.cta.${cta.key}`)} ↗
              </a>
            )
          )}
        </div>
      </div>
    </article>
  )
}
