import About from "../components/About"
import Main from "../components/Main"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Upbutton from "../components/Upbutton"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import {useEffect, useState} from 'react';


export default function Home() {
  const [scr, setSrc] = useState(0)
  const [scwidth, setScwidth] = useState(0)
  useEffect(()=>{
    setScwidth(window.innerWidth)
    const scroll = (event) => {
      setSrc(window.scrollY)
    }
    window.addEventListener("scroll", scroll, false);
    return  () => window.removeEventListener("scroll", scroll, false);
  },[])
  return (
    //  scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 h-screen overflow-y-scroll
    <div className="font-mono divide-y divide-primary">
      <Head>
        <title>Enes Ayduran</title>
        <meta name="description" content="Portfolio"/>
      </Head>
      <Main />
      {/* <About /> */}
      <Projects screenwidth={scwidth}/>
      <Skills />
      <Contact />
      <div className="divide-none">
        <Upbutton scr={scr} />
      </div>
    </div>
  )
}
