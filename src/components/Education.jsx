import { useReveal } from '../hooks'
import { useLang } from '../i18n'
import { education, certifications } from '../content'

function EduItem({ entry, last, delay }) {
  const { t } = useLang()
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal from-right${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: delay, position: 'relative', display: 'flex', gap: 22, paddingBottom: last ? 0 : 34 }}
    >
      {/* timeline rail + node */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span
          style={{
            width: 46,
            height: 46,
            flexShrink: 0,
            borderRadius: 12,
            display: 'grid',
            placeItems: 'center',
            fontSize: 20,
            background: 'rgba(34,211,238,.08)',
            border: '1px solid rgba(34,211,238,.3)',
            boxShadow: '0 8px 22px -12px var(--glow)',
          }}
        >
          {entry.icon}
        </span>
        {!last && <span style={{ flex: 1, width: 2, marginTop: 8, background: 'linear-gradient(180deg,rgba(34,211,238,.4),rgba(255,255,255,.05))' }} />}
      </div>

      <div
        style={{
          flex: 1,
          padding: '20px 22px',
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,.08)',
          background: 'linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.01))',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: 'var(--accent)', letterSpacing: '.04em' }}>{entry.period}</span>
          {entry.graduated && (
            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 10.5,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: '#04121a',
                background: 'linear-gradient(120deg,var(--accent2),var(--accent))',
                padding: '3px 9px',
                borderRadius: 20,
                fontWeight: 600,
              }}
            >
              {t('education.graduated')}
            </span>
          )}
        </div>
        <h3 style={{ margin: '0 0 4px', fontSize: 17, fontWeight: 700, color: '#eef4fb', lineHeight: 1.3 }}>{t(`education.${entry.key}.degree`)}</h3>
        <p style={{ margin: '0 0 10px', fontSize: 14, color: '#aebdce', fontWeight: 500 }}>{t(`education.${entry.key}.school`)}</p>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#8597a9' }}>{t(`education.${entry.key}.desc`)}</p>
      </div>
    </div>
  )
}

function CertCard({ cert, delay }) {
  const { t } = useLang()
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal from-up skill-card${visible ? ' is-visible' : ''}`}
      style={{
        transitionDelay: delay,
        display: 'flex',
        gap: 14,
        padding: '18px 18px',
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,.08)',
        background: 'linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.01))',
      }}
    >
      <span style={{ width: 42, height: 42, flexShrink: 0, borderRadius: 11, display: 'grid', placeItems: 'center', fontSize: 20, background: 'rgba(34,211,238,.08)', border: '1px solid rgba(34,211,238,.3)' }}>
        {cert.icon}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
          <h4 style={{ margin: 0, fontSize: '14.5px', fontWeight: 700, color: '#eef4fb', lineHeight: 1.3 }}>{t(`education.certs.${cert.key}.title`)}</h4>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, color: 'var(--accent)', flexShrink: 0 }}>{cert.year}</span>
        </div>
        <p style={{ margin: '4px 0 0', fontSize: 13, color: '#8597a9', lineHeight: 1.5 }}>{t(`education.certs.${cert.key}.issuer`)}</p>
        {cert.href && (
          <a href={cert.href} target="_blank" rel="noopener noreferrer" className="cert-link" style={{ display: 'inline-block', marginTop: 11 }}>
            {t('education.certView')} ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default function Education() {
  const { t } = useLang()
  const [headRef, headVisible] = useReveal()
  const [certsRef, certsVisible] = useReveal()

  return (
    <section id="education" style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 28px 40px' }}>
      <div ref={headRef} className={`reveal from-left${headVisible ? ' is-visible' : ''}`}>
        <div className="section-label">
          <span className="line" />
          <span className="text">03 / {t('education.label')}</span>
        </div>
        <h2 style={{ margin: '0 0 46px', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, letterSpacing: '-.02em', color: '#eef4fb', lineHeight: 1.1 }}>
          {t('education.heading')}
        </h2>
      </div>

      <div style={{ maxWidth: 760 }}>
        {education.map((entry, i) => (
          <EduItem key={entry.key} entry={entry} last={i === education.length - 1} delay={`${i * 0.08}s`} />
        ))}
      </div>

      <div ref={certsRef} className={`reveal from-left${certsVisible ? ' is-visible' : ''}`} style={{ marginTop: 56 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: 'var(--accent)' }}>✦</span>
          <h3 style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#cdd9e5', letterSpacing: '.06em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono',monospace" }}>
            {t('education.certsHeading')}
          </h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
          {certifications.map((cert, i) => (
            <CertCard key={cert.key} cert={cert} delay={`${i * 0.08}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
