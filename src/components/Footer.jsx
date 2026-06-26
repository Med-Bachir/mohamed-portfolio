import { useLang } from '../i18n'
import { links } from '../content'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,.07)', padding: '34px 28px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              display: 'grid',
              placeItems: 'center',
              background: 'linear-gradient(135deg,var(--accent2),var(--accent))',
              color: '#04121a',
              fontFamily: "'JetBrains Mono',monospace",
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            MB
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#cdd9e5', fontSize: 14, fontWeight: 600 }}>Mohamed El Bachir Bouchaib</span>
            <span style={{ color: '#6b7d90', fontSize: 12, fontFamily: "'JetBrains Mono',monospace" }}>{t('footer.built')} · © {new Date().getFullYear()}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 9, alignItems: 'center' }}>
          <a href={links.github} target="_blank" rel="noopener" className="footer-link">
            GitHub
          </a>
          <span style={{ color: '#3a4654' }}>·</span>
          <a href={links.linkedin} target="_blank" rel="noopener" className="footer-link">
            LinkedIn
          </a>
          <span style={{ color: '#3a4654' }}>·</span>
          <a href={`mailto:${links.email}`} className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
