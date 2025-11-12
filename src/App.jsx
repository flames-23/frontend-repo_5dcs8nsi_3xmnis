import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParallaxBG from './components/ParallaxBG'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] relative text-white">
      <Navbar />

      {/* Global dynamic color blobs */}
      <ParallaxBG />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Experience />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
