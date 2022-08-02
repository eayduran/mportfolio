import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";
import line from "../public/assets/line.svg";

import {useEffect, useState} from 'react';

const Skills = () => {
  const [scr, setSrc] = useState(30)
  const [swidth, setSw] = useState(0)
  const [skillswidth, setSkillw] = useState(71)

    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        const scroll = (event) => {
        // console.log(window.scrollY, swidth)
        setSrc(window.scrollY)
        setSw(window.innerWidth)
        setSkillw(document.getElementById("skillsdiv").offsetWidth)  
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
    },[])
    return(        
        <div id="skills" className="overflow-x-hidden calc-height flex w-full flex-col h-screen bg-secondary">
            <div className="text-white flex items-center justify-start w-full h-20 text-4xl font-sans">
                          <div id="skillsdiv" className="w-auto" style={{marginLeft: scr<984?-150: (2*scr - 2118)<=(swidth/2 - skillswidth/2)? 2*scr - 2118: (swidth/2 - skillswidth/2)}}>
                          SKILLS
                          </div>
            </div>
            
        </div>
    );
}

export default Skills;