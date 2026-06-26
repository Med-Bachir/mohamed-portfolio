import { useReveal } from '../hooks'
import { useLang } from '../i18n'
import { featuredProject as p } from '../content'

export default function FeaturedProject({ onOpen }) {
  const { t } = useLang()
  const [ref, visible] = useReveal()

  return (
    <article
      ref={ref}
      className={`reveal from-up featured-card${visible ? ' is-visible' : ''}`}
      style={{
        position: 'relative',
        borderRadius: 22,
        border: '1px solid rgba(255,255,255,.09)',
        background: 'linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.012))',
        overflow: 'hidden',
        marginBottom: 26,
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,var(--accent2),var(--accent))', zIndex: 2 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', alignItems: 'stretch' }}>
        <div style={{ padding: 'clamp(26px,4vw,44px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 11,
                letterSpacing: '.1em',
                color: '#04121a',
                background: 'linear-gradient(120deg,var(--accent2),var(--accent))',
                padding: '5px 11px',
                borderRadius: 30,
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              ★ {t('projects.flagship')}
            </span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#6b7d90' }}>{t('projects.meta')}</span>
          </div>

          <h3 style={{ margin: '0 0 6px', fontSize: 'clamp(28px,3.6vw,40px)', fontWeight: 800, letterSpacing: '-.02em', color: '#fff' }}>{p.name}</h3>
          <p style={{ margin: '0 0 18px', fontSize: 17, color: 'var(--accent)', fontWeight: 500 }}>{t('projects.siara.tagline')}</p>
          <p style={{ margin: '0 0 22px', fontSize: '15.5px', lineHeight: 1.7, color: '#93a5b7' }}>{t('projects.siara.description')}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 26 }}>
            {p.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 11 }}>
            {p.cta.map((cta) => (
              <a
                key={cta.key}
                href={cta.href}
                target="_blank"
                rel="noopener"
                className={`btn ${cta.primary ? 'btn-primary' : 'btn-ghost'}`}
                style={{ padding: '11px 18px', fontSize: 14 }}
              >
                {t(`projects.cta.${cta.key}`)} ↗
              </a>
            ))}
            <button type="button" onClick={() => onOpen(p)} className="btn btn-ghost" style={{ padding: '11px 18px', fontSize: 14 }}>
              {t('studies.viewCase')} →
            </button>
          </div>
        </div>

        <div
          className="case-trigger"
          onClick={() => onOpen(p)}
          role="button"
          tabIndex={0}
          aria-label={`${p.name} — ${t('studies.viewCase')}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onOpen(p)
            }
          }}
          style={{ position: 'relative', overflow: 'hidden', borderLeft: '1px solid rgba(255,255,255,.06)', display: 'flex' }}
        >
          {p.image ? (
            <img
              src={p.image}
              alt={`${p.name} — ${t('projects.siara.tagline')}`}
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'top center' }}
            />
          ) : (
            <span style={{ margin: 'auto', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#5b6c7e', letterSpacing: '.05em', textAlign: 'center' }}>
              siara · app screenshot
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
