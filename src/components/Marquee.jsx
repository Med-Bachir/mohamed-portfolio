import { techMarquee } from '../content'

function Track({ hidden }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} aria-hidden={hidden || undefined}>
      {techMarquee.map((tech, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 15, color: '#7d8fa1', padding: '0 26px' }}>{tech}</span>
          <span style={{ color: 'var(--accent)', fontSize: 9 }}>◆</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,.06)',
        borderBottom: '1px solid rgba(255,255,255,.06)',
        padding: '18px 0',
        background: 'rgba(255,255,255,.012)',
        WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
        maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
      }}
    >
      <div
        className="marquee-track"
        style={{ display: 'flex', width: 'max-content', animation: 'marquee 34s linear infinite' }}
      >
        <Track />
        <Track hidden />
      </div>
    </div>
  )
}
