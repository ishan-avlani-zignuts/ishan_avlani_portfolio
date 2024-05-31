import React from 'react'
import AboutMe from './AboutMe'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Achievements from './Achievements'
import EmailForm from './Contact'

const Home = () => {
  return (
    <div>
      <AboutMe/>
      <Education/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <EmailForm/>
    </div>
  )
}

export default Home
