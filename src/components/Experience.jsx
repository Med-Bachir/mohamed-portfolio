import { useReveal } from '../hooks'
import { useLang } from '../i18n'
import { experience } from '../content'

function ExpItem({ entry, last, delay }) {
  const { t } = useLang()
  const [ref, visible] = useReveal()
  const period = entry.current ? `${entry.start} – ${t('experience.present')}` : entry.period

  return (
    <div
      ref={ref}
      className={`reveal from-left${visible ? ' is-visible' : ''}`}
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
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: 'var(--accent)', letterSpacing: '.04em' }}>{period}</span>
          {entry.current && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
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
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#04121a' }} />
              {t('experience.current')}
            </span>
          )}
        </div>
        <h3 style={{ margin: '0 0 4px', fontSize: 17, fontWeight: 700, color: '#eef4fb', lineHeight: 1.3 }}>{t(`experience.${entry.key}.role`)}</h3>
        <p style={{ margin: '0 0 10px', fontSize: 14, color: 'var(--accent)', fontWeight: 500 }}>{t(`experience.${entry.key}.org`)}</p>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: '#8597a9' }}>{t(`experience.${entry.key}.desc`)}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  const { t } = useLang()
  const [headRef, headVisible] = useReveal()

  return (
    <section id="experience" style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 28px 40px' }}>
      <div ref={headRef} className={`reveal from-left${headVisible ? ' is-visible' : ''}`}>
        <div className="section-label">
          <span className="line" />
          <span className="text">02 / {t('experience.label')}</span>
        </div>
        <h2 style={{ margin: '0 0 46px', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, letterSpacing: '-.02em', color: '#eef4fb', lineHeight: 1.1 }}>
          {t('experience.heading')}
        </h2>
      </div>

      <div style={{ maxWidth: 760 }}>
        {experience.map((entry, i) => (
          <ExpItem key={entry.key} entry={entry} last={i === experience.length - 1} delay={`${i * 0.08}s`} />
        ))}
      </div>
    </section>
  )
}
