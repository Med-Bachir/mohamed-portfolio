import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import NeuralMap from './components/NeuralMap'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ position: 'relative', background: '#07090e', minHeight: '100vh', overflowX: 'hidden' }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <NeuralMap />
      <Contact />
      <Footer />
    </div>
  )
}
