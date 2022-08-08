import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";
import line from "../public/assets/line.svg";
import Back from "../public/assets/back.svg";
import Prj1Jpeg from "../public/assets/main.jpeg";
import mordesign from "../public/assets/mordesign.jpeg";

import {useEffect, useState} from 'react';

const pData =[
    {
        img: mordesign,
        header: 'Portfolio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        tags: ['NextJS', 'tailwind'],
        website: 'https://react-age-of-empires.netlify.app/',
        source: 'https://github.com/eayduran/react-age-of-empires',
    },
    {
        img: mordesign,
        header: 'E-commerce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        tags: ['NextJS', 'tailwind'],
        website: 'https://www.hepsiburada.com',
        source: 'https://github.com/eayduran/rl-walking-robot-gym',
    },
    {
        img: mordesign,
        header: 'To do',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        tags: ['ReactJS', 'tailwind'],
        website: 'https://www.youtube.com/watch?v=qSQ4tCrc-OA',
        source: 'https://github.com/eayduran/react-native-linkedin-auth',
    },
    {
        img: mordesign,
        header: 'React Auth',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        tags: ['React Native', 'tailwind'],
        website: 'https://www.youtube.com/watch?v=qSQ4tCrc-OA',
        source: 'https://github.com/eayduran/react-native-linkedin-auth',
    },
    {
        img: mordesign,
        header: 'Weather App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        tags: ['React Native', 'tailwind'],
        website: 'https://www.youtube.com/watch?v=qSQ4tCrc-OA',
        source: 'https://github.com/eayduran/react-native-linkedin-auth',
    },
    {
        img: mordesign,
        header: 'Shop App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        tags: ['React Native', 'tailwind'],
        website: 'https://www.youtube.com/watch?v=qSQ4tCrc-OA',
        source: 'https://github.com/eayduran/react-native-linkedin-auth',
    },

]




const Projects = ({screenwidth}) => {
  const [scr, setSrc] = useState(0)
  const [swidth, setSw] = useState(0)
  const [projectswidth, setPrjw] = useState(71)
  const [projectswidthcont, setPrjwcont] = useState(71)
  const [funcCont, setFunc] = useState()
  const [contentp, setContentp] = useState()
  const [wall1, setWall1] = useState()
  const [wall2, setWall2] = useState()
  const [choosePrj, setChooseP] = useState(0)
  //test
  const [testheight, setHeight] = useState(0)

  function Books({kitap1, wid, pad, border, color}) {
    return(
        <div className="cursor-pointer border-solid w-auto flex flex-col justify-center items-center group" onClick={()=>{
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
        }}>
            <div style={{width: wid, paddingLeft: pad, border: border, borderColor: color, borderRightStyle: 'solid'}} className='transition-colors h-20 items-center flex group-hover:text-white text-primary-light hover:bg-primary border-solid text-2xl'>
                {pData[kitap1].header}
            </div>
            <div className="text-sm text-primary group-hover:text-turk transition-colors">
                {pData[kitap1].tags[0]}
            </div>
        </div>
        );
    }
    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        const scroll = (event) => {
        
        setHeight(window.innerHeight)
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
        <div id="projects" className="pb-8 justify-start overflow-x-hidden space-y-2 h-screen flex flex-col items-center min-w-screen bg-secondary text-white font-sans">
                    <div className="text-primary-light flex items-center justify-start w-full font-bold h-20 text-4xl font-sans z-[100]">
                                    {/* <div id="projectsdiv" className="w-auto" style={{marginLeft: scr<150?-200: (2*scr - 500)<=(swidth/2 - projectswidth/2)? 2*scr - 500: (swidth/2 - projectswidth/2)}}> */}
                                    <div id="projectsdiv" className="w-auto" style={{marginLeft: scr<testheight/4.4 ?-200: (2*scr - 5*(testheight)/7)<=(swidth/2 - projectswidth/2)? 2*scr - 5*(testheight)/7: (swidth/2 - projectswidth/2)}}>
                                        PROJECTS
                                    </div>
                    </div>

                    <div id="projectscontdiv" className="duration-700 transition flex justify-center w-full h-5/6 text-4xl font-sans" style={{marginLeft: scr<testheight/4.4 ?3000: (testheight*(30/7) - 5*scr)>=(swidth/2 - projectswidthcont/2)? testheight*(30/7) - 5*scr: (swidth/2 - projectswidthcont/2)}}>
                        <div className="flex flex-col justify-center py-6 px-2 w-3/4 ssbg-gray-800 items-center">
                            
                            <div className="flex flex-col lg:flex-row">
                                <div className="flex">
                                    <Books kitap1={0} wid={180} pad={50} border={2} color="rgb(170,170,170)"/>
                                    <Books kitap1={1} wid={180} pad={20} border={screenwidth<1024?0:2} color="rgb(170,170,170)"/>
                                </div>
                                <div className="flex">
                                    <Books kitap1={2} wid={180} pad={60} border={2} color="rgb(170,170,170)"/>
                                    <Books kitap1={3} wid={180} pad={33} border={screenwidth<1024?0:2} color="rgb(170,170,170)"/>
                                </div>
                                <div className="flex">
                                    <Books kitap1={4} wid={180} pad={20} border={2} color="rgb(170,170,170)"/>
                                    <Books kitap1={5} wid={180} pad={40} border={0} color="rgb(170,170,170)"/>
                                </div>

                            </div>

                        </div>
                    </div>
                 
                    {/* animasyon */}
                    <div id="contentdiv" className="hidden bg-primary flex justify-center items-center mb-10 w-full h-5/6 font-xs sm:text-4xl font-sans">
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
                                        
                                    }} className="w-auto flex hover:cursor-pointer items-center justify-center">
                                    <Image
                                            src={Back}
                                            alt="back"
                                            width={60}
                                            height={40}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center justify-center ssbg-red-200">
                                    <div className="mt-2 lg:ml-8 lg:mr-10 flex items-center sm:h-1/2 sm:w-1/2 lg:h-2/5 lg:w-2/5 h-5/6 w-5/6">
                                        <Image
                                            src={pData[choosePrj].img}
                                            alt="Picture of the author"
                                            // width={500}
                                            // height={300}
                                            // layout='fill'
                                            objectFit='contain'
                                        />
                                    </div>
                                    <div className="w-5/6 bg-red-200s sm:mt-6 lg:mt-0">
                                        <div className="text-center mt-2 sm:mt-0 sm:text-4xl text-2xl">
                                            {pData[choosePrj].header}
                                        </div>
                                        <div className="text-xs sm:text-sm mt-2 sm:mt-4">
                                            {pData[choosePrj].description}
                                        </div>
                                        <div className="text-xs sm:text-sm lg:mt-0 mt-2 text-turk flex flex-row">
                                            {pData[choosePrj].tags.map( (name,key) => <div className="mr-2" key={key}>{name}</div>)}
                                        </div>
                                        <div className="flex text-sm lg:mt-8 sm:mt-4 mt-2 justify-center sm:justify-start">
                                                <a href={pData[choosePrj].website} target="_blank" rel="noopener noreferrer">
                                                    <div className="mr-4 hover:bg-white duration-500 transition-color hover:text-primary rounded-2xl py-1 px-3 border-white border-2">
                                                        Website
                                                    </div>
                                                </a>
                                                <a href={pData[choosePrj].source} target="_blank" rel="noopener noreferrer">
                                                    <div className="hover:bg-white duration-500 transition-color hover:text-primary rounded-2xl py-1 px-3 border-white border-2">
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