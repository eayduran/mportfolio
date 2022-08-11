import React from "react";
import {useEffect, useState} from 'react';

const Skills = () => {
  const [scr, setSrc] = useState(0)
  const [swidth, setSw] = useState(0)
  const [skillswidth, setSkillw] = useState(71)
  const [skillc, setSkillC] = useState()
  const [heightofscreen, setHeight] = useState(0)

    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        setHeight(window.innerHeight)
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
                    <div id="skillsdiv" className="w-auto" style={{marginLeft: scr<heightofscreen*1.2 ?-150: (2*scr - heightofscreen*2.6)<=(swidth/2 - skillswidth/2)? 2*scr - heightofscreen*2.6: (swidth/2 - skillswidth/2)}}>
                    SKILLS
                    </div>
            </div>

            <div id="skillcontent" className="text-sm sm:text-base sm:mt-8 w-3/4 h-3/4 text-primary-light flex flex-col justify-center items-center lg:text-xl" style={{marginLeft: scr<heightofscreen*1.2 ?heightofscreen*4.67: (heightofscreen*4.67 - 2.5*scr)>=(swidth/2 - skillc/2)? heightofscreen*4.67 - 2.5*scr: (swidth/2 - skillc/2)}}>
                <div className="flex flex-col items-center sm:flex-row w-full h-20 justify-center">
                    <div className="flex border-b-2 mb-2 sm:mb-0 sm:border-b-0 sm:border-r-2 border-primary-light sm:mr-8 lg:mr-20 w-1/6 h-full justify-center items-center">
                        Frontend
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        NextJS
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        ReactJS
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        Tailwind
                    </div>
                    <div className="ssbg-green-400 w-1/6 h-full justify-center items-center flex">
                        Bootstrap
                    </div>
                </div>
                
                <div className="mt-10 flex flex-col items-center sm:flex-row w-full h-20 justify-center">
                    <div className="flex border-b-2 mb-2 sm:mb-0 sm:border-b-0 sm:border-r-2 border-primary-light sm:mr-8 lg:mr-20 w-1/6 h-full justify-center items-center flex">
                        Backend
                    </div>
                    <div className="ssbg-gray-400 w-1/6 h-full justify-center items-center flex">
                        NodeJS
                    </div>
                    <div className="ssbg-green-400 w-1/6 h-full justify-center items-center flex">
                        ExpressJS
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        
                    </div>
                    <div className=" w-1/6 h-full justify-center items-center flex">
                        
                    </div>
                </div>

                <div className="mt-6 sm:mt-10 flex flex-col items-center sm:flex-row w-full h-20 justify-center">
                    <div className="border-b-2 mb-2 sm:mb-0 sm:border-b-0 sm:border-r-2 border-primary-light sm:mr-8 lg:mr-20 w-1/6 h-full justify-center items-center flex">
                        Database
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        MySQL
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        MongoDB
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        Firestore
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        
                    </div>
                </div>


                <div className="mt-16 sm:mt-10 flex flex-col items-center sm:flex-row w-full h-20 justify-center">
                    <div className="text-center mb-2 sm:mb-0 lg:text-left border-b-2 sm:border-b-0 sm:border-r-2 border-primary-light sm:mr-8 lg:mr-20 w-1/6 h-full justify-center items-center flex">
                        Other Skills
                    </div>
                    <div className="text-center lg:text-left w-1/6 h-full justify-center items-center flex">
                        React Native
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        Wordpress
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        Python
                    </div>
                    <div className="w-1/6 h-full justify-center items-center flex">
                        C++
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Skills;