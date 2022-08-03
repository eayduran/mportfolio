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
  const [funcCont, setFunc] = useState()
    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        const scroll = (event) => {
        // console.log(window.scrollY, swidth)
        setFunc(document.getElementById("projectscontdiv"))

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
            </div>
            <div id="projectscontdiv" className="bg-primary flex justify-center items-center mb-10 w-full h-5/6 text-4xl font-sans">
                            <div className="flex flex-col justify-between text-white z-[100] absolute w-3/4 h-3/4">
                                <div className="pl-4 flex">
                                    <div onClick={()=>{funcCont.classList.remove("invisible")}} className="bg-black w-auto">Go back</div>
                                </div>
                                <div className="flex items-center justify-center bg-red-200">
                                    <div className="mr-20 h-80 flex items-center">
                                        img
                                    </div>
                                    <div className="">
                                        To Do Clone
                                        <div className="text-sm">
                                            sadasdasdasdasdasdasdasd
                                        </div>
                                        <div className="flex text-sm mt-8">
                                                <div className="mr-4">
                                                    Website
                                                </div>
                                                <div>
                                                    Code
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4 flex">
                                    <div className="bg-primary text-primary w-auto">.</div>
                                </div>
                            </div>
                            <div className="z-[100] scale-67xs transition duration-500 text-sm bg-secondary w-1/2 h-full -translate-x-3/4"></div>
                            <div className="z-[100] scale-67xs transition duration-500 text-sm bg-secondary w-1/2 h-full translate-x-3/4"></div>
            </div>
            {/* <div id="projectscontdiv" className="bg-primary flex justify-center items-center mb-10 w-full h-5/6 font-sans">
                            <div className="text-xl w-1/2 h-full">
                                asd
                            </div>
            </div> */}
        </div>
    );
}

export default Skills;