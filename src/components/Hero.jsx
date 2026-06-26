import { useHeroParallax, useParallax } from '../hooks'
import { useLang } from '../i18n'
import { links } from '../content'

export default function Hero() {
  const heroRef = useHeroParallax()
  const gridRef = useParallax(-55)
  const glowRef = useParallax(90)
  const blobARef = useParallax(120)
  const blobBRef = useParallax(-70)
  const { t } = useLang()

  return (
    <section
      id="top"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 28px 90px', overflow: 'hidden' }}
    >
      <div
        ref={gridRef}
        style={{
          position: 'absolute',
          inset: '-10% 0',
          zIndex: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%,#000 5%,transparent 70%)',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%,#000 5%,transparent 70%)',
          animation: 'gridShift 26s linear infinite',
          willChange: 'transform',
        }}
      />
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          top: -180,
          left: '50%',
          marginLeft: -390,
          width: 780,
          height: 560,
          zIndex: 0,
          background: 'radial-gradient(circle,var(--glow) 0%,transparent 62%)',
          opacity: 0.5,
          filter: 'blur(20px)',
          willChange: 'transform',
        }}
      />
      <div ref={blobARef} style={{ position: 'absolute', top: '6%', right: '-6%', width: 420, height: 420, zIndex: 0, willChange: 'transform' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(59,130,246,.22) 0%,transparent 65%)',
            filter: 'blur(30px)',
            animation: 'floatBlob 14s ease-in-out infinite',
          }}
        />
      </div>
      <div ref={blobBRef} style={{ position: 'absolute', bottom: '-4%', left: '-6%', width: 380, height: 380, zIndex: 0, willChange: 'transform' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(34,211,238,.16) 0%,transparent 65%)',
            filter: 'blur(30px)',
            animation: 'floatBlob2 16s ease-in-out infinite',
          }}
        />
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,transparent 60%,#07090e 100%)' }} />

      <a
        href="#about"
        aria-label="Scroll to about"
        style={{
          position: 'absolute',
          bottom: 26,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 9,
          textDecoration: 'none',
          animation: 'fadeUp 1s ease both 1s',
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10.5px', letterSpacing: '.22em', color: '#6b7d90', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <span style={{ width: 24, height: 38, border: '1.5px solid rgba(255,255,255,.22)', borderRadius: 13, display: 'flex', justifyContent: 'center', paddingTop: 7 }}>
          <span style={{ width: '3.5px', height: 8, borderRadius: 3, background: 'var(--accent)', animation: 'scrollDot 1.7s ease-in-out infinite' }} />
        </span>
      </a>

      <div ref={heroRef} style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto', width: '100%', willChange: 'transform,opacity' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '7px 14px',
            borderRadius: 30,
            background: 'rgba(34,211,238,.07)',
            border: '1px solid rgba(34,211,238,.22)',
            marginBottom: 26,
            animation: 'fadeUp .8s cubic-bezier(.22,.61,.36,1) both .05s',
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)', animation: 'blink 2s ease-in-out infinite' }} />
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12.5px', letterSpacing: '.12em', color: '#bfe9f4', textTransform: 'uppercase' }}>
            {t('hero.badge')}
          </span>
        </div>

        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, letterSpacing: '.16em', color: 'var(--accent)', textTransform: 'uppercase', margin: '0 0 14px', animation: 'fadeUp .8s cubic-bezier(.22,.61,.36,1) both .15s' }}>
          {t('hero.role')}
        </p>

        <h1 style={{ margin: 0, fontSize: 'clamp(40px,7vw,80px)', lineHeight: 1.02, fontWeight: 800, letterSpacing: '-.03em', color: '#f3f8ff', animation: 'fadeUp .85s cubic-bezier(.22,.61,.36,1) both .25s' }}>
          Mohamed El Bachir
          <br />
          Bouchaib
        </h1>

        <h2 style={{ margin: '22px 0 0', fontSize: 'clamp(22px,3.4vw,38px)', lineHeight: 1.15, fontWeight: 600, letterSpacing: '-.02em', color: '#aebdce', maxWidth: 830, animation: 'fadeUp .85s cubic-bezier(.22,.61,.36,1) both .38s' }}>
          {t('hero.headlinePre')}{' '}
          <span style={{ background: 'linear-gradient(110deg,var(--accent2),var(--accent))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontWeight: 700 }}>
            {t('hero.headlineHighlight')}
          </span>{' '}
          {t('hero.headlinePost')}
        </h2>

        <p style={{ margin: '22px 0 0', fontSize: '16.5px', lineHeight: 1.6, color: '#8597a9', maxWidth: 620, animation: 'fadeUp .85s cubic-bezier(.22,.61,.36,1) both .5s' }}>
          {t('hero.subtitle')}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34, animation: 'fadeUp .85s cubic-bezier(.22,.61,.36,1) both .62s' }}>
          <a href="#projects" className="btn btn-primary" style={{ padding: '14px 24px', fontSize: '15.5px' }}>
            {t('hero.ctaWork')} →
          </a>
          <a href="#contact" className="btn btn-ghost" style={{ padding: '14px 24px', fontSize: '15.5px' }}>
            {t('hero.ctaContact')}
          </a>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 11, marginTop: 26, animation: 'fadeUp .85s cubic-bezier(.22,.61,.36,1) both .74s' }}>
          <a href={links.github} target="_blank" rel="noopener" className="pill-link">
            {t('hero.github')} <span style={{ fontSize: 12, opacity: 0.6 }}>↗</span>
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener" className="pill-link">
            {t('hero.linkedin')} <span style={{ fontSize: 12, opacity: 0.6 }}>↗</span>
          </a>
          <a href={`mailto:${links.email}`} className="pill-link">
            {t('hero.email')} <span style={{ fontSize: 12, opacity: 0.6 }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
