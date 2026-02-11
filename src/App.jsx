import { useRef, useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Header 
        scrollToAbout={() => scrollToSection(aboutRef)} 
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        theme={theme}
        onThemeToggle={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      />
      <main>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
