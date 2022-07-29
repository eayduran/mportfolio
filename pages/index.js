import Navbar from "../components/Navbar"
import About from "../components/About"
import Main from "../components/Main"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

import Image from "next/image"

export default function Home() {
  return (
    <div className="scroll-smooth scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 h-screen overflow-y-scroll">
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
    </div>
  )
}
