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
        description: 'I used blabla in this app.',
        tags: ['NextJS', 'tailwind'],
        website: 'https://react-age-of-empires.netlify.app/',
        source: 'https://github.com/eayduran/react-age-of-empires',
    },
    {
        img: Prj1Jpeg,
        header: 'E-commerce',
        description: 'I used ee in this app.',
        tags: ['NextJS', 'tailwind'],
        website: 'https://www.hepsiburada.com',
        source: 'https://github.com/eayduran/rl-walking-robot-gym',
    },
    {
        img: Prj1Jpeg,
        header: 'To do',
        description: 'I used blabla in this app.',
        tags: ['ReactJS', 'tailwind'],
        website: 'https://www.youtube.com/watch?v=qSQ4tCrc-OA',
        source: 'https://github.com/eayduran/react-native-linkedin-auth',
    },
    {
        img: Prj1Jpeg,
        header: 'React Auth',
        description: 'I used blabla in this app.',
        tags: ['React Native', 'tailwind'],
        website: 'https://www.youtube.com/watch?v=qSQ4tCrc-OA',
        source: 'https://github.com/eayduran/react-native-linkedin-auth',
    },
    {
        img: Prj1Jpeg,
        header: 'Weather App',
        description: 'I used blabla in this app.',
        tags: ['React Native', 'tailwind'],
        website: 'https://www.youtube.com/watch?v=qSQ4tCrc-OA',
        source: 'https://github.com/eayduran/react-native-linkedin-auth',
    },
    {
        img: Prj1Jpeg,
        header: 'Shop App',
        statement: 'I used blabla in this app.',
        tags: ['React Native', 'tailwind'],
        website: 'https://www.youtube.com/watch?v=qSQ4tCrc-OA',
        source: 'https://github.com/eayduran/react-native-linkedin-auth',
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
                                    <div id="projectsdiv" className="w-auto" style={{marginLeft: scr<150?-200: (2*scr - 500)<=(swidth/2 - projectswidth/2)? 2*scr - 500: (swidth/2 - projectswidth/2)}}>
                                        PROJECTS
                                    </div>
                    </div>

                    <div id="projectscontdiv" className="duration-700 transition flex justify-center w-full h-5/6 text-4xl font-sans" style={{marginLeft: scr<150?3000: (3000 - 5*scr)>=(swidth/2 - projectswidthcont/2)? 3000 - 5*scr: (swidth/2 - projectswidthcont/2)}}>
                        <div className="flex flex-col justify-center py-6 px-2 w-3/4 ssbg-gray-800 items-center">
                            
                            <div className="flex ssbg-blue-200">
                                <Books kitap1={0} wid={180} pad={50} border={2} color="rgb(170,170,170)"/>
                                <Books kitap1={1} wid={180} pad={20} border={2} color="rgb(170,170,170)"/>
                                <Books kitap1={2} wid={180} pad={60} border={2} color="rgb(170,170,170)"/>
                                <Books kitap1={3} wid={180} pad={33} border={2} color="rgb(170,170,170)"/>
                                <Books kitap1={4} wid={180} pad={20} border={2} color="rgb(170,170,170)"/>
                                <Books kitap1={5} wid={180} pad={40} border={0} color="rgb(170,170,170)"/>

                            </div>

                        </div>
                    </div>
                    {/* <div id="projectscontdiv" className="duration-700 transition flex justify-center ssmy-4 ssp-4 w-full h-5/6 text-4xl font-sans" style={{marginLeft: scr<150?3000: (3000 - 5*scr)>=(swidth/2 - projectswidthcont/2)? 3000 - 5*scr: (swidth/2 - projectswidthcont/2)}}>
                        <div className="flex flex-col justify-center py-6 px-2 w-3/4 bg-gray-800 items-center">
                            
                            <div className="flex ssbg-blue-200 divide-x">
                                <Books kitap1={0}/>
                                <Books kitap1={1}/>
                                <Books kitap1={2}/>
                                <Books kitap1={3}/>
                                <Books kitap1={4}/>
                                <Books kitap1={5}/>

                            </div>
                            <div className="mt-52 flex bg-red-200 justify-center items-center w-5/6">
                                <div className="mx-20ss bg-blue-200">NextJS</div>
                                <div className="mx-20ss bg-blue-200">ReactJS</div>
                                <div className="mx-20ss bg-blue-200">React Native</div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div id="projectscontdiv" className="duration-700 transition flex justify-center ssmy-4 ssp-4 w-full h-5/6 text-4xl font-sans" style={{marginLeft: scr<150?3000: (3000 - 5*scr)>=(swidth/2 - projectswidthcont/2)? 3000 - 5*scr: (swidth/2 - projectswidthcont/2)}}>
                        <div className="flex flex-col justify-end py-6 px-2 w-1/4 ssbg-gray-800 items-center">
                            <Books kitap1={1} kitap2={0} />
                            <div className="mt-52">
                                NextJS
                            </div>
                        </div>

                        <div className="flex flex-col justify-end py-6 px-2 mx-4 w-1/4 ssbg-gray-800 items-center">
                            <Books kitap1={3} kitap2={2} />
                            <div className="mt-52">
                                ReactJS
                            </div>
                        </div>

                        <div className="flex flex-col justify-end py-6 px-2 w-1/4 ssbg-gray-800 items-center">
                            <Books kitap1={5} kitap2={4} />
                            <div className="mt-52">
                                React Native
                            </div>
                        </div>
                    </div> */}
                    
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
                                <div className="flex items-center justify-center bg-red-200s">
                                    <div className="mr-20 h-80 flex items-center">
                                        <Image
                                            src={pData[choosePrj].img}
                                            alt="Picture of the author"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <div className="">
                                        <div className="text-4xl">
                                            {pData[choosePrj].header}
                                        </div>
                                        <div className="text-sm">
                                            {pData[choosePrj].description}
                                        </div>
                                        <div className="text-sm text-turk flex flex-row">
                                            {pData[choosePrj].tags.map( (name,key) => <div className="mr-2" key={key}>{name}</div>)}
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