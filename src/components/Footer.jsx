import { motion } from 'framer-motion'
import '../styles/components/Footer.css'

function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '🔗' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: '✉️' },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="footer-icon">{link.icon}</span>
              <span className="footer-text">{link.name}</span>
            </motion.a>
          ))}
        </div>
        <motion.p 
          className="footer-copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
