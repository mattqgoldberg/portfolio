import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/components/Header.css'

function Header({ scrollToAbout, scrollToProjects }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <motion.nav 
        className="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.div>
          
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <button onClick={scrollToAbout} className="nav-link">About</button>
            <button onClick={scrollToProjects} className="nav-link">Projects</button>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.nav>
    </header>
  )
}

export default Header
