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
  const [contentp, setContentp] = useState()
  const [wall1, setWall1] = useState()
  const [wall2, setWall2] = useState()

  
    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        const scroll = (event) => {
        // console.log(window.scrollY, swidth)
        
        setWall1(document.getElementById("wall-1"))
        setWall2(document.getElementById("wall-2"))
        setContentp(document.getElementById("contentdiv"))
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
                   
                    <div id="projectscontdiv" className="duration-700 transition bg-red-200s flex justify-center my-4 p-4 w-full h-5/6 text-4xl font-sans" style={{marginLeft: scr<150?3000: (3000 - 5*scr)>=(swidth/2 - projectswidthcont/2)? 3000 - 5*scr: (swidth/2 - projectswidthcont/2)}}>
                        <div className="flex flex-col justify-between py-6 px-2 w-1/4 bg-gray-800 items-center">
                            <div className="w-280 h-400 border-solid border-b-8 border-l-8 flex flex-col justify-center">
                                <div onClick={()=>{
                                    funcCont.classList.remove("opacity-100");
                                    funcCont.classList.add("opacity-0");
                                    setTimeout(() => {
                                        funcCont.classList.add("hidden");
                                        // funcCont.classList.remove("opacity-0");
                                        // buraya yeni animasyon eklenecek
                                        contentp.classList.remove("hidden")
                                        setTimeout(() => {
                                        wall1.classList.add("-translate-x-3/4")
                                        wall2.classList.add("translate-x-3/4")
                                        }, 100)
                                    }, 700)
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
                    
                    {/* animasyon */}
                    <div id="contentdiv" className="hidden bg-primary flex justify-center items-center mb-10 w-full h-5/6 text-4xl font-sans">
                        <div className="flex flex-col justify-between text-white z-20 absolute w-3/4 h-3/4">
                                <div className="pl-4 flex">
                                    <div onClick={()=>{
                                        wall1.classList.remove("-translate-x-3/4")
                                        wall2.classList.remove("translate-x-3/4")
                                        setTimeout(() => {
                                        contentp.classList.add("hidden")
                                        funcCont.classList.remove("hidden");
                                        setTimeout(() => {
                                            funcCont.classList.add("opacity-100");
                                        }, 200)

                                        }, 600)
                                        // setTimeout(() => {
                                        //     funcCont.classList.add("hidden");
                                        //     funcCont.classList.remove("opacity-0");
                                        //     // buraya yeni animasyon eklenecek
                                        //     contentp.classList.remove("hidden")
                                        //     setTimeout(() => {
                                        //     wall1.classList.add("-translate-x-3/4")
                                        //     wall2.classList.add("translate-x-3/4")
                                        //     }, 100)
                                        // }, 700)
                                    }} className="bg-black w-auto">Go back</div>
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
                            <div id="wall-1" className="z-30 scale-67xs transition duration-500 text-sm bg-secondary w-1/2 h-full"></div>
                            <div id="wall-2" className="z-30 scale-67xs transition duration-500 text-sm bg-secondary w-1/2 h-full"></div>
                    </div>
            
        </div>


    );
}

export default Projects;