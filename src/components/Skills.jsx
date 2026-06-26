import { useReveal } from '../hooks'
import { useLang } from '../i18n'
import { skillGroups } from '../content'

function SkillCard({ group, delay, direction }) {
  const { t } = useLang()
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${direction} skill-card${visible ? ' is-visible' : ''}`}
      style={{
        transitionDelay: delay,
        padding: 26,
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,.08)',
        background: 'rgba(255,255,255,.02)',
        gridColumn: group.wide ? '1/-1' : undefined,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: 'var(--accent)' }}>{group.icon}</span>
        <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#eef4fb', letterSpacing: '.02em' }}>{t(`skills.groups.${group.key}`)}</h3>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {group.items.map((item) => (
          <span
            key={item}
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 13,
              color: '#bcc9d6',
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(255,255,255,.08)',
              padding: '6px 12px',
              borderRadius: 8,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLang()
  const [headRef, headVisible] = useReveal()

  return (
    <section id="skills" style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 28px 120px' }}>
      <div ref={headRef} className={`reveal from-left${headVisible ? ' is-visible' : ''}`}>
        <div className="section-label">
          <span className="line" />
          <span className="text">05 / {t('skills.label')}</span>
        </div>
        <h2 style={{ margin: '0 0 46px', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, letterSpacing: '-.02em', color: '#eef4fb', lineHeight: 1.1 }}>
          {t('skills.heading')}
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 22 }}>
        {skillGroups.map((group, i) => (
          <SkillCard
            key={group.key}
            group={group}
            delay={`${(i % 3) * 0.08}s`}
            direction={i % 2 === 0 ? 'from-up' : 'from-scale'}
          />
        ))}
      </div>
    </section>
  )
}
