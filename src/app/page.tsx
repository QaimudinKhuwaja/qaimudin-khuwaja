import React from 'react'
import HeroSec from './Components/HeroSec'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Pinpoints from './Components/Pinpoints'
import Service from './Components/Services'
import Contact from './Components/Contact'
const page = () => {
  return (
    <>
    <br />
    <HeroSec />
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Pinpoints/>
    <Service/>
    <Contact/>
    
    </>
  )
}

export default page