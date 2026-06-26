import { useState } from 'react'
import { useActiveSection, useIsMobile, useNavBackground } from '../hooks'
import { useLang, LANGS } from '../i18n'
import { links } from '../content'

const NAV_IDS = ['about', 'experience', 'education', 'projects', 'skills', 'neural', 'contact']

function LangSwitch({ compact }) {
  const { lang, setLang } = useLang()
  return (
    <div
      role="group"
      aria-label="Language"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        padding: 3,
        borderRadius: 9,
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.1)',
      }}
    >
      {LANGS.map((l) => {
        const active = l.code === lang
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            style={{
              border: 'none',
              cursor: 'pointer',
              padding: compact ? '6px 12px' : '5px 9px',
              borderRadius: 7,
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: compact ? 13 : 12,
              fontWeight: 600,
              letterSpacing: '.02em',
              color: active ? '#04121a' : '#9fb0c2',
              background: active ? 'linear-gradient(120deg,var(--accent2),var(--accent))' : 'transparent',
              transition: 'color .2s, background .2s',
            }}
          >
            {l.label}
          </button>
        )
      })}
    </div>
  )
}

export default function Navbar() {
  const isMobile = useIsMobile()
  const scrolled = useNavBackground()
  const active = useActiveSection(NAV_IDS)
  const { t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const navItems = NAV_IDS.map((id) => ({ id, label: t(`nav.${id}`) }))

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: scrolled ? 'rgba(8,10,16,.85)' : 'rgba(8,10,16,.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,0)'}`,
        transition: 'background .35s, border-color .35s',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 28px', height: 66, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <span style={{ width: 38, height: 38, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg,var(--accent2),var(--accent))', color: '#04121a', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, fontSize: 15, boxShadow: '0 8px 20px -8px var(--glow)' }}>
            MB
          </span>
          <span style={{ color: '#eef4fb', fontWeight: 600, fontSize: '15.5px', letterSpacing: '-.01em' }}>Mohamed Bouchaib</span>
        </a>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  color: active === item.id ? '#fff' : '#9fb0c2',
                  textDecoration: 'none',
                  fontSize: '14.5px',
                  fontWeight: 500,
                  transition: 'color .25s',
                  textShadow: active === item.id ? '0 0 16px var(--glow)' : 'none',
                }}
              >
                {item.label}
              </a>
            ))}
            <LangSwitch />
            <a
              href={links.resume}
              download
              className="btn"
              style={{ padding: '9px 16px', borderRadius: 9, fontSize: 14, color: 'var(--accent)', border: '1px solid rgba(34,211,238,.4)', background: 'rgba(34,211,238,.06)' }}
            >
              {t('nav.resume')} <span style={{ fontSize: 13 }}>↓</span>
            </a>
          </div>
        )}

        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LangSwitch />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              style={{ width: 42, height: 42, display: 'grid', placeItems: 'center', gap: 5, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, cursor: 'pointer' }}
            >
              <span style={{ display: 'block', width: 18, height: 2, background: '#cdd9e5', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 18, height: 2, background: '#cdd9e5', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 18, height: 2, background: '#cdd9e5', borderRadius: 2 }} />
            </button>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '8px 28px 20px', gap: 4, background: 'rgba(8,10,16,.96)', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={closeMenu}
              href={`#${item.id}`}
              style={{ color: '#cdd9e5', textDecoration: 'none', fontSize: 16, fontWeight: 500, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.05)' }}
            >
              {item.label}
            </a>
          ))}
          <a
            onClick={closeMenu}
            href={links.resume}
            download
            style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 13, borderRadius: 10, fontSize: 15, fontWeight: 600, color: '#04121a', textDecoration: 'none', background: 'linear-gradient(120deg,var(--accent2),var(--accent))' }}
          >
            {t('nav.resume')} ↓
          </a>
        </div>
      )}
    </nav>
  )
}
