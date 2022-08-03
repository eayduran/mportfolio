import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";
import line from "../public/assets/line.svg";
import Prj1Jpeg from "../public/assets/main.jpeg";

import {useEffect, useState} from 'react';
const pData =[
    {
        img: Prj1Jpeg,
        header: 'Portfolio',
        statement: 'I used blabla in this app.',
        tags: ['nextjs', 'tailwind'],
        website: 'https://react-age-of-empires.netlify.app/',
        source: 'https://github.com/eayduran/react-age-of-empires',
    },
    {
        img: Prj1Jpeg,
        header: 'E-commerce',
        statement: 'I used ee in this app.',
        tags: ['nextjs', 'tailwind'],
        website: 'https://www.hepsiburada.com',
        source: 'https://github.com/eayduran/rl-walking-robot-gym',
    },
    {
        img: Prj1Jpeg,
        header: 'React Auth',
        statement: 'I used blabla in this app.',
        tags: ['ReactNative', 'tailwind'],
        website: 'https://www.youtube.com/watch?v=qSQ4tCrc-OA',
        source: 'https://github.com/eayduran/react-native-linkedin-auth',
    },
    {
        img: Prj1Jpeg,
        header: 'To do',
        statement: 'I used blabla in this app.',
        tags: ['nextjs', 'tailwind'],
        website: 'link',
        source: 'link',
    },
    {
        img: Prj1Jpeg,
        header: 'To do',
        statement: 'I used blabla in this app.',
        tags: ['nextjs', 'tailwind'],
        website: 'link',
        source: 'link',
    },
    {
        img: Prj1Jpeg,
        header: 'To do',
        statement: 'I used blabla in this app.',
        tags: ['nextjs', 'tailwind'],
        website: 'link',
        source: 'link',
    },

]




const Projects = () => {
  const [scr, setSrc] = useState(0)
  const [swidth, setSw] = useState(0)
  const [projectswidth, setPrjw] = useState(71)
  const [projectswidthcont, setPrjwcont] = useState(71)
  const [funcCont, setFunc] = useState()
  const [contentp, setContentp] = useState()
  const [wall1, setWall1] = useState()
  const [wall2, setWall2] = useState()
  const [choosePrj, setChooseP] = useState(0)

  function Books({kitap1, kitap2}) {
    return(
        <div className="w-280 h-400 border-solid border-b-8 border-l-8 flex flex-col justify-center">
            <div onClick={()=>{
                setChooseP(kitap2)
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
                {pData[kitap2].header}
            </div>
            <div onClick={()=>{
                setChooseP(kitap1)
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
            }} className="transition-colors hover:text-black hover:border-black hover:bg-red-200 border-solid border-4 rotate-46 mt-6 mr-2 text-4xl right-6 top-14 relative">
                {pData[kitap1].header}
            </div>
            
            </div>
        );
    }
    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        const scroll = (event) => {
        
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
                            <Books kitap1={1} kitap2={0} />
                            <div>
                                NextJS
                            </div>
                        </div>
                        <div className="flex flex-col justify-between py-6 px-2 mx-14 w-1/4 bg-gray-800 items-center">
                        <div className="w-280 h-400 border-solid border-b-8 border-l-8 flex flex-col justify-center">
                                <div onClick={()=>{
                                    funcCont.classList.add("opacity-0");
                                
                                }} className="transition-colors hover:text-black hover:border-black hover:bg-red-200 border-solid border-4 rotate-46 text-4xl left-8 top-28 -mb-3 relative">
                                    To Do
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
                                            funcCont.classList.remove("opacity-0");
                                            funcCont.classList.add("opacity-100");
                                        }, 200)

                                        }, 600)
                                        
                                    }} className="bg-black w-auto">Go back</div>
                                </div>
                                <div className="flex items-center justify-center bg-red-200">
                                    <div className="mr-20 h-80 flex items-center">
                                        <Image
                                            src={pData[choosePrj].img}
                                            alt="Picture of the author"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="">
                                        {pData[choosePrj].header}
                                        <div className="text-sm">
                                            {pData[choosePrj].statement}
                                        </div>
                                        <div className="flex text-sm mt-8">
                                                <a href={pData[choosePrj].website} target="_blank" rel="noopener noreferrer">
                                                    <div className="mr-4">
                                                        Website
                                                    </div>
                                                </a>
                                                <a href={pData[choosePrj].source} target="_blank" rel="noopener noreferrer">
                                                    <div className="">
                                                        Code
                                                    </div>
                                                </a>
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