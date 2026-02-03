import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/components/About.css'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="about-title">About Me</h1>
          <div className="about-text">
            <p>
              Welcome to my portfolio! I'm a developer passionate about creating 
              beautiful and functional web experiences. I love working with modern 
              technologies and bringing ideas to life through code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or working on personal projects 
              that challenge me to grow.
            </p>
          </div>
          <div className="skills">
            <h2 className="skills-title">Skills & Technologies</h2>
            <div className="skills-list">
              {['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Git'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
