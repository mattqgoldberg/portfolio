import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/projects'
import '../styles/components/Projects.css'

function ProjectImage({ src, alt, fallbackLetter }) {
  const [failed, setFailed] = useState(false)
  const base = import.meta.env.BASE_URL
  const imageSrc =
    typeof window !== 'undefined'
      ? new URL(src, window.location.origin).href
      : base === '/'
        ? src
        : base.replace(/\/$/, '') + src

  useEffect(() => {
    setFailed(false)
  }, [src])

  if (failed) {
    return (
      <div className="project-placeholder">
        {fallbackLetter}
      </div>
    )
  }
  return (
    <img
      key={imageSrc}
      src={imageSrc}
      alt={alt}
      className="project-img"
      onLoad={() => setFailed(false)}
      onError={() => setFailed(true)}
    />
  )
}

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="projects" ref={ref}>
      <div className="projects-container">
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                {project.image ? (
                  <ProjectImage src={project.image} alt={project.title} fallbackLetter={project.title.charAt(0)} />
                ) : (
                  <div className="project-placeholder">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
