import React from 'react'
import Navbar from '#components/navbar.jsx'
import Welcome from '#components/welcome'
import Dock from '#components/dock'


import { gsap } from 'gsap';
import { Draggable} from 'gsap/Draggable'
import { Contact, Finder, Image, Resume, Safari, Terminal, Text, Video } from '#windows';
gsap.registerPlugin(Draggable);


const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>


      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Video/>
      <Contact/>
    </main>
  )
}

export default App