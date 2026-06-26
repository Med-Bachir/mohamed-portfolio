import { useReveal } from '../hooks'
import { useLang } from '../i18n'
import { links } from '../content'

export default function Contact() {
  const { t } = useLang()
  const [ref, visible] = useReveal()

  return (
    <section id="contact" style={{ position: 'relative', padding: '110px 28px 120px', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 60%,#000 5%,transparent 70%)',
          maskImage: 'radial-gradient(ellipse 70% 80% at 50% 60%,#000 5%,transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 680,
          height: 440,
          zIndex: 0,
          background: 'radial-gradient(circle,var(--glow) 0%,transparent 62%)',
          opacity: 0.4,
          filter: 'blur(20px)',
        }}
      />

      <div
        ref={ref}
        className={`reveal${visible ? ' is-visible' : ''}`}
        style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto', textAlign: 'center' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: '.18em', color: 'var(--accent)', textTransform: 'uppercase' }}>
            07 / {t('contact.label')}
          </span>
          <span style={{ width: 30, height: 1, background: 'var(--accent)' }} />
        </div>

        <h2 style={{ margin: '0 0 18px', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, letterSpacing: '-.025em', color: '#f3f8ff', lineHeight: 1.05 }}>
          {t('contact.heading')}
        </h2>
        <p style={{ margin: '0 0 38px', fontSize: 18, lineHeight: 1.6, color: '#93a5b7' }}>
          {t('contact.textpre')}
          <strong style={{ color: '#cdd9e5', fontWeight: 600 }}>{t('contact.textstrong')}</strong>
          {t('contact.textpost')}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 13, justifyContent: 'center', marginBottom: 30 }}>
          <a href={`mailto:${links.email}`} className="btn btn-primary" style={{ padding: '14px 26px', fontSize: '15.5px' }}>
            ✉ {t('contact.emailBtn')}
          </a>
          <a href={links.resume} download className="btn btn-ghost" style={{ padding: '14px 26px', fontSize: '15.5px' }}>
            ↓ {t('contact.resumeBtn')}
          </a>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 11, justifyContent: 'center' }}>
          <a href={links.github} target="_blank" rel="noopener" className="pill-link" style={{ padding: '10px 17px' }}>
            GitHub ↗
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener" className="pill-link" style={{ padding: '10px 17px' }}>
            LinkedIn ↗
          </a>
          <a href={`mailto:${links.email}`} className="pill-link" style={{ padding: '10px 17px' }}>
            {links.email}
          </a>
        </div>
      </div>
    </section>
  )
}
