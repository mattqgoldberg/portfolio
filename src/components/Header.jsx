import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/components/Header.css'

function Header({ scrollToAbout, scrollToProjects, scrollToContact, theme, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (scrollFn) => {
    scrollFn?.()
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <motion.nav 
        className="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <div className="logo">
            mattgoldberg.dev
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <button onClick={() => handleNavClick(scrollToAbout)} className="nav-link">About</button>
            <button onClick={() => handleNavClick(scrollToProjects)} className="nav-link">Projects</button>
            <button onClick={() => handleNavClick(scrollToContact)} className="nav-link">Contact</button>
            <button 
              onClick={onThemeToggle} 
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀' : '☽'}
            </button>
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
