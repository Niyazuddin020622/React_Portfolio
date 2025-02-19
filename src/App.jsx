import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'
import About from './components/About'
import Projects from './components/Projects'
import Certification from './components/Certification'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Certification/>
      
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
