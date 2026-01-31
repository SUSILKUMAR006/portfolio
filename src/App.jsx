import React from 'react'
import Navbar from './component/Navbar'
import Cursor from './component/Cursor'

import Home from './component/Home'
import WhatIDO from './component/WhatIDO'
import Skills from './component/Skills'
import About from './component/About'
import Certification from './component/certification'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'
import FloatingParticles from './component/FloatingParticles'

const App = () => {
  return (
    <div className='h-screen'>
      <FloatingParticles />
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="whatido">
        <WhatIDO />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="certifications">
        <Certification />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App