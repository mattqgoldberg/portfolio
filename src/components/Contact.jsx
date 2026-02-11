import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/components/Contact.css'

function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactLinks = [
    { name: 'GitHub', url: 'https://github.com/mattqgoldberg' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/mattqgoldberg' },
    { name: 'Email', url: 'mailto:matt.q.goldberg@gmail.com' },
    { name: 'Resume', url: '/resume.pdf' },
  ]

  return (
    <section className="contact" ref={ref}>
      <div className="contact-container">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h1>
        <div className="contact-links">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
