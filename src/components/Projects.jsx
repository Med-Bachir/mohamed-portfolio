import { useState } from 'react'
import { useReveal } from '../hooks'
import { useLang } from '../i18n'
import { projects } from '../content'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const { t } = useLang()
  const [headRef, headVisible] = useReveal()
  const [active, setActive] = useState(null) // project entry whose case study is open

  return (
    <section id="projects" style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 28px 120px' }}>
      <div ref={headRef} className={`reveal from-left${headVisible ? ' is-visible' : ''}`}>
        <div className="section-label">
          <span className="line" />
          <span className="text">04 / {t('projects.label')}</span>
        </div>
        <h2 style={{ margin: '0 0 14px', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, letterSpacing: '-.02em', color: '#eef4fb', lineHeight: 1.1 }}>
          {t('projects.heading')}
        </h2>
        <p style={{ margin: '0 0 46px', fontSize: '16.5px', color: '#8597a9', maxWidth: 560, lineHeight: 1.6 }}>
          {t('projects.subtitle')}
        </p>
      </div>

      <FeaturedProject onOpen={setActive} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 24 }}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            onOpen={setActive}
            delay={`${i * 0.08}s`}
            direction={['from-left', 'from-up', 'from-right'][i % 3]}
          />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
