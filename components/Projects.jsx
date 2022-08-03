import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";
import line from "../public/assets/line.svg";

import {useEffect, useState} from 'react';

const Projects = () => {
  const [scr, setSrc] = useState(0)
  const [swidth, setSw] = useState(0)
  const [projectswidth, setPrjw] = useState(71)

    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        const scroll = (event) => {
        // console.log(window.scrollY, swidth)
        setSrc(window.scrollY)
        setSw(window.innerWidth)
        setPrjw(document.getElementById("projectsdiv").offsetWidth)  
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
    },[])
    return(        
        <div id="projects" className="overflow-x-hidden calc-height flex w-full flex-col h-screen bg-secondary">
            <div className="text-white flex items-center justify-start w-full h-20 text-4xl font-sans">
                          <div id="projectsdiv" className="w-auto" style={{marginLeft: scr<175?-200: (2*scr - 550)<=(swidth/2 - projectswidth/2)? 2*scr - 550: (swidth/2 - projectswidth/2)}}>
                              PROJECTS
                          </div>
            </div>
            
        </div>
    );
}

export default Projects;