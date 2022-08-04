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
        
        setSkillC(document.getElementById("skillcontent").offsetWidth)
        setSrc(window.scrollY)
        setSw(window.innerWidth)
        setSkillw(document.getElementById("skillsdiv").offsetWidth)  
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
    },[])
    return(        
        <div id="skills" className="overflow-x-hidden flex w-full flex-col h-screen bg-secondary">
            <div className="text-primary-light flex items-center justify-start font-bold w-full h-20 text-4xl font-sans">
                    <div id="skillsdiv" className="w-auto" style={{marginLeft: scr<810?-150: (2*scr - 1770)<=(swidth/2 - skillswidth/2)? 2*scr - 1770: (swidth/2 - skillswidth/2)}}>
                    SKILLS
                    </div>
            </div>

            <div id="skillcontent" className="mt-8 w-3/4 h-3/4 bg-red-200ss text-primary-light flex flex-col justify-center items-center text-xl" style={{marginLeft: scr<810?3200: (3200 - 2.5*scr)>=(swidth/2 - skillc/2)? 3200 - 2.5*scr: (swidth/2 - skillc/2)}}>
                <div className="flex flex-row w-full h-20 justify-center">
                    <div className="border-r-2 border-primary-light mr-20 w-1/6 h-full justify-center items-center flex">
                        Frontend
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        NextJS
                    </div>
                    <div className="ssbg-green-400 w-1/6 h-full justify-center items-center flex">
                        ReactJS
                    </div>
                    <div className="ssbg-gray-400 w-1/6 h-full justify-center items-center flex">
                        Tailwind
                    </div>
                    <div className="ssbg-green-400 w-1/6 h-full justify-center items-center flex">
                        Bootstrap
                    </div>
                </div>
                
                <div className="mt-10 flex flex-row w-full h-20 justify-center">
                    <div className="border-r-2 border-primary-light mr-20 w-1/6 h-full justify-center items-center flex">
                        Backend
                    </div>
                    <div className="ssbg-gray-400 w-1/6 h-full justify-center items-center flex">
                        NodeJS
                    </div>
                    <div className="ssbg-green-400 w-1/6 h-full justify-center items-center flex">
                        ExpressJS
                    </div>
                    <div className="ssbg-gray-400 w-1/6 h-full justify-center items-center flex">
                        
                    </div>
                    <div className="ssbg-green-400 w-1/6 h-full justify-center items-center flex">
                        
                    </div>
                </div>

                <div className="mt-10 flex flex-row w-full h-20 justify-center">
                    <div className="border-r-2 border-primary-light mr-20 w-1/6 h-full justify-center items-center flex">
                        Database
                    </div>
                    <div className="ssbg-gray-400 w-1/6 h-full justify-center items-center flex">
                        MySQL
                    </div>
                    <div className="ssbg-green-400 w-1/6 h-full justify-center items-center flex">
                        MongoDB
                    </div>
                    <div className="ssbg-gray-400 w-1/6 h-full justify-center items-center flex">
                        Firestore
                    </div>
                    <div className="ssbg-green-400 w-1/6 h-full justify-center items-center flex">
                        
                    </div>
                </div>

                <div className="mt-10 flex flex-row w-full h-20 justify-center">
                    <div className="border-r-2 border-primary-light mr-20 w-1/6 h-full justify-center items-center flex">
                        Other Skills
                    </div>
                    <div className="ssbg-green-400 w-1/6 h-full justify-center items-center flex">
                        React Native
                    </div>
                    <div className="ssbg-gray-400 w-1/6 h-full justify-center items-center flex">
                        Wordpress
                    </div>
                    <div className="ssbg-gray-400 w-1/6 h-full justify-center items-center flex">
                        Python
                    </div>
                    <div className="ssbg-green-400 w-1/6 h-full justify-center items-center flex">
                        C++
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Skills;