import { useRef } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Header scrollToAbout={() => scrollToSection(aboutRef)} scrollToProjects={() => scrollToSection(projectsRef)} />
      <main>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
