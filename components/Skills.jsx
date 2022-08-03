import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";
import line from "../public/assets/line.svg";

import {useEffect, useState} from 'react';

const Skills = () => {
  const [scr, setSrc] = useState(0)
  const [swidth, setSw] = useState(0)
  const [skillswidth, setSkillw] = useState(71)
  const [skillc, setSkillC] = useState()
    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        const scroll = (event) => {
        // console.log(window.scrollY, swidth)
        
        setSkillC(document.getElementById("skillcontent"))
        setSrc(window.scrollY)
        setSw(window.innerWidth)
        setSkillw(document.getElementById("skillsdiv").offsetWidth)  
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
    },[])
    return(        
        <div id="skills" className="overflow-x-hidden flex w-full flex-col h-screen bg-secondary">
            <div className="text-white flex items-center justify-start w-full h-20 text-4xl font-sans">
                          <div id="skillsdiv" className="w-auto" style={{marginLeft: scr<810?-150: (2*scr - 1770)<=(swidth/2 - skillswidth/2)? 2*scr - 1770: (swidth/2 - skillswidth/2)}}>
                          SKILLS
                          </div>
                          <div id="skillcontent" className="duration-700 transition flex justify-center ssmy-4 ssp-4 w-full h-5/6 text-4xl font-sans" style={{marginLeft: scr<150?3000: (3000 - 5*scr)>=(swidth/2 - skillcontent/2)? 3000 - 5*scr: (swidth/2 - skillcontent/2)}}>
                        <div className="flex flex-col justify-center py-6 px-2 w-3/4 ssbg-gray-800 items-center">
                                
                                <div className="flex ssbg-blue-200">
                                    asd

                                </div>

                            </div>
                        </div>
            </div>
        </div>
    );
}

export default Skills;