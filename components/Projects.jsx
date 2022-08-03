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
  const [projectswidthcont, setPrjwcont] = useState(71)
  const [funcCont, setFunc] = useState()

  
    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        const scroll = (event) => {
        // console.log(window.scrollY, swidth)
        

        setFunc(document.getElementById("projectscontdiv"))
        setSrc(window.scrollY)
        setSw(window.innerWidth)
        setPrjw(document.getElementById("projectsdiv").offsetWidth)
        setPrjwcont(document.getElementById("projectscontdiv").offsetWidth)  
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
    },[])
    
    return(        
        <div id="projects" className="pb-8 justify-start overflow-x-hidden space-y-8 h-screen flex flex-col items-center min-w-screen bg-secondary text-white font-sans">
                    <div className="bg-blue-200s text-white flex items-center justify-start w-full font-bold h-20 text-4xl font-sans z-[100]">
                                    <div id="projectsdiv" className="w-auto" style={{marginLeft: scr<150?-200: (2*scr - 500)<=(swidth/2 - projectswidth/2)? 2*scr - 500: (swidth/2 - projectswidth/2)}}>
                                        PROJECTS
                                    </div>
                    </div>
                   
                    {/* <div className="flex text-white bg-gray-700 w-full h-screen text-4xl font-sans"> */}
                                    <div id="projectscontdiv" className="duration-700 transition bg-red-200s flex justify-center my-4 p-4 w-full h-5/6 text-4xl font-sans" style={{marginLeft: scr<150?3000: (3000 - 5*scr)>=(swidth/2 - projectswidthcont/2)? 3000 - 5*scr: (swidth/2 - projectswidthcont/2)}}>
                                        <div className="flex flex-col justify-between py-6 px-2 w-1/4 bg-gray-800 items-center">
                                            <div className="w-280 h-400 border-solid border-b-8 border-l-8 flex flex-col justify-center">
                                                <div onClick={()=>{
                                                    funcCont.classList.add("invisible");
                                                
                                                }} className="transition-colors hover:text-black hover:border-black hover:bg-red-200 border-solid border-4 rotate-46 text-4xl left-8 top-28 -mb-3 relative">
                                                    Portfolio
                                                </div>
                                                <div onClick={()=>{
                                                    funcCont.classList.remove("invisible");

                                                }} className="transition-colors hover:text-black hover:border-black hover:bg-red-200 border-solid border-4 rotate-46 mt-6 mr-2 text-4xl right-6 top-14 relative">
                                                    E-commerce
                                                </div>
                                            </div>
                                            <div>
                                                NextJS
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between py-6 px-2 mx-14 w-1/4 bg-gray-800 items-center">
                                        <div className="w-280 h-400 border-solid border-b-8 border-l-8 flex flex-col justify-center">
                                                <div onClick={()=>{
                                                    funcCont.classList.add("opacity-0");
                                                
                                                }} className="transition-colors hover:text-black hover:border-black hover:bg-red-200 border-solid border-4 rotate-46 text-4xl left-8 top-28 -mb-3 relative">
                                                    Portfolio
                                                </div>
                                                <div onClick={()=>{
                                                    funcCont.classList.add("animate-fade");

                                                }} className="transition-colors hover:text-black hover:border-black hover:bg-red-200 border-solid border-4 rotate-46 mt-6 mr-2 text-4xl right-6 top-14 relative">
                                                    E-commerce
                                                </div>
                                            </div>
                                            <div>
                                                ReactJS
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between py-6 px-2 w-1/4 bg-gray-800 items-center">
                                        <div className="w-280 h-400 border-solid border-b-8 border-l-8 flex flex-col justify-center">
                                                <div onClick={()=>{
                                                    funcCont.classList.add("opacity-0");
                                                
                                                }} className="transition-colors hover:text-black hover:border-black hover:bg-red-200 border-solid border-4 rotate-46 text-4xl left-8 top-28 -mb-3 relative">
                                                    Portfolio
                                                </div>
                                                <div onClick={()=>{
                                                    funcCont.classList.add("animate-fade");

                                                }} className="transition-colors hover:text-black hover:border-black hover:bg-red-200 border-solid border-4 rotate-46 mt-6 mr-2 text-4xl right-6 top-14 relative">
                                                    E-commerce
                                                </div>
                                            </div>
                                            <div>
                                                React Native
                                            </div>
                                        </div>
                                    </div>
                    {/* </div> */}
            
        </div>


    );
}

export default Projects;