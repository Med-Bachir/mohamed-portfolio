import { useReveal, useCountUp } from '../hooks'
import { useLang } from '../i18n'
import { statsMeta, aboutFactKeys, languageBars } from '../content'
import profilePhoto from '../assets/profile.jpg'

function StatItem({ stat, parentVisible, delay }) {
  const value = useCountUp(stat.value, parentVisible, stat.suffix)
  return (
    <div
      className={`reveal${parentVisible ? ' is-visible' : ''}`}
      style={{
        transitionDelay: delay,
        padding: '20px 16px',
        borderRadius: 14,
        background: 'rgba(255,255,255,.025)',
        border: '1px solid rgba(255,255,255,.07)',
        fontSize: 'clamp(26px,4vw,38px)',
        fontWeight: 800,
        color: '#fff',
        letterSpacing: '-.02em',
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      {value}
    </div>
  )
}

export default function About() {
  const { t } = useLang()
  const [headRef, headVisible] = useReveal()
  const [photoRef, photoVisible] = useReveal()
  const [textRef, textVisible] = useReveal()

  return (
    <section id="about" style={{ maxWidth: 1180, margin: '0 auto', padding: '120px 28px' }}>
      <div ref={headRef} className={`reveal from-left${headVisible ? ' is-visible' : ''}`}>
        <div className="section-label">
          <span className="line" />
          <span className="text">01 / {t('about.label')}</span>
        </div>
        <h2 style={{ margin: '0 0 50px', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, letterSpacing: '-.02em', color: '#eef4fb', maxWidth: 740, lineHeight: 1.1 }}>
          {t('about.heading')}
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 54, alignItems: 'start' }}>
        <div
          ref={photoRef}
          className={`reveal from-left${photoVisible ? ' is-visible' : ''}`}
          style={{ transitionDelay: '.05s', display: 'flex', flexDirection: 'column', gap: 26, alignItems: 'flex-start' }}
        >
          <div style={{ position: 'relative', width: 210, height: 210, borderRadius: '50%', padding: 4, background: 'linear-gradient(135deg,var(--accent2),var(--accent))', boxShadow: '0 20px 50px -18px var(--glow)' }}>
            <img
              src={profilePhoto}
              alt="Mohamed El Bachir Bouchaib"
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block', background: '#0c0f16' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
            {aboutFactKeys.map((key, i) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 14,
                  paddingBottom: 13,
                  borderBottom: i < aboutFactKeys.length - 1 ? '1px solid rgba(255,255,255,.07)' : 'none',
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#6b7d90', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                  {t(`about.facts.${key}.label`)}
                </span>
                <span style={{ fontSize: 14, color: '#cdd9e5', fontWeight: 500 }}>{t(`about.facts.${key}.value`)}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={textRef} className={`reveal from-right${textVisible ? ' is-visible' : ''}`} style={{ transitionDelay: '.12s' }}>
          <p style={{ margin: '0 0 20px', fontSize: 18, lineHeight: 1.7, color: '#c2cedb' }}>
            {t('about.p1pre')}
            <strong style={{ color: '#fff', fontWeight: 600 }}>{t('about.p1strong')}</strong>
            {t('about.p1post')}
          </p>
          <p style={{ margin: '0 0 20px', fontSize: '16.5px', lineHeight: 1.75, color: '#93a5b7' }}>{t('about.p2')}</p>
          <p style={{ margin: 0, fontSize: '16.5px', lineHeight: 1.75, color: '#93a5b7' }}>
            {t('about.p3pre')}
            <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>{t('about.p3strong')}</strong>
            {t('about.p3post')}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 36 }}>
            {statsMeta.map((stat, i) => (
              <StatItem key={stat.key} stat={stat} parentVisible={textVisible} delay={`${0.1 + i * 0.08}s`} />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 8 }}>
            {statsMeta.map((stat) => (
              <span key={stat.key} style={{ textAlign: 'center', fontSize: 12, color: '#7d8fa1', fontFamily: "'JetBrains Mono',monospace" }}>
                {t(`about.stats.${stat.key}`)}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 38 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: 'var(--accent)' }}>{'<>'}</span>
              <h3 style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#cdd9e5', letterSpacing: '.06em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono',monospace" }}>
                {t('about.languagesHeading')}
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {languageBars.map((lang, i) => (
                <div key={lang.nameKey} className="lang-row">
                  <div className="lang-head">
                    <span className="lang-name">{t(`about.langNames.${lang.nameKey}`)}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                      {lang.cert && (
                        <a href={lang.cert} target="_blank" rel="noopener noreferrer" className="cert-link">
                          {t('about.viewCert')} ↗
                        </a>
                      )}
                      <span className="lang-level">{t(`about.langLevels.${lang.levelKey}`)}</span>
                    </span>
                  </div>
                  <div className="lang-track">
                    <span
                      className="lang-fill"
                      style={{ width: textVisible ? `${lang.fill}%` : 0, transitionDelay: `${0.15 + i * 0.12}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
