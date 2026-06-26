import { useScrollProgress } from '../hooks'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2.5px',
        width: `${progress}%`,
        zIndex: 70,
        background: 'linear-gradient(90deg,var(--accent2),var(--accent))',
        boxShadow: '0 0 10px var(--glow)',
        transition: 'width .08s linear',
      }}
    />
  )
}
