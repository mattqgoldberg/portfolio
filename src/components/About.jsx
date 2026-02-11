import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/components/About.css'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    'Python', 'C++', 'Git', 'JavaScript', 'Jenkins',
    'Confluence', 'Jira', 'Bash', 'GitHub Actions'
  ]

  return (
    <section className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-main">
            <div className="about-text-col">
              <h1 className="about-title">About Me</h1>
              <div className="about-text">
            <p>
              Hi, I'm Matt, a 4th year computer engineering student at UC San Diego. I like building things with code and learning new technologies!
            </p>
              </div>

              <div className="education">
            <h2 className="subsection-title">Education</h2>
            <p className="education-line">UC San Diego — B.S. Computer Engineering, expected June 2026 · 3.7 GPA</p>
          </div>

          <div className="experience">
            <h2 className="subsection-title">Experience</h2>
            <div className="experience-item">
              <p className="experience-role">Release Engineer Intern, Cubic Transportation Systems</p>
              <p className="experience-dates">June 2024 – October 2025</p>
              <ul className="experience-bullets">
                <li>Jenkins pipelines, SonarQube integration, Python automation, and Confluence documentation.</li>
              </ul>
            </div>
            <div className="experience-item">
              <p className="experience-role">Computer Support Technician, UC San Diego ITS</p>
              <p className="experience-dates">February 2024 – June 2024</p>
              <ul className="experience-bullets">
                <li>Maintained 3000+ computers; hardware and software support, imaging, and security patches.</li>
              </ul>
            </div>
              </div>

              <div className="skills">
            <h2 className="skills-title">Skills & Technologies</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
              </div>
            </div>
            <div className="about-photo-col">
              <img
                src="/profile.png"
                alt="Matt Goldberg"
                className="about-photo"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
