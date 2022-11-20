import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";
import line from "../public/assets/line.svg";

import {useEffect, useState} from 'react';

const Main = () => {
    const [scr, setSrc] = useState(0)
    useEffect(()=>{
        const scroll = (event) => {
        setSrc(window.scrollY)
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
    },[])
    return(        
        <div id="main" className="justify-between overflow-x-hidden space-y-8 h-screen flex font-bold flex-col items-center sm:items-start min-w-screen bg-secondary text-white font-sans">
                    <Navbar />
                    <div className="sm:1/4 sm:ml-6 sm:text-tablet lg:text-laptop text-mobile lg:h-1/3 lg:w-auto tracking-tight flex flex-row items-center">
                        <div className="" style={{}}>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">S</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">O</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">F</span>
                            <span className="text-primary hover:text-primary-light transition-colors">T</span>
                        </div>

                        {/* line */}
                        <div className="hidden lg:flex hover:bg-primary-light text-white bg-primary mx-4" style={{height: 28 ,width: 240 + 2*scr}}>
                        
                        </div>
            
                        <div>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">W</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">A</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">R</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">E</span>
                        </div>
                    </div>
                    {/* <div className="flex items-center w-full justify-center">junior</div> */}
                    <div className="h-1/3 flex justify-center sm:justify-between lg:justify-end items-center sm:items-start lg:items-center w-full sm:ml-6 flex-col sm:flex-row sm:text-tablet lg:text-laptop">
                        <div className="text-mobile lg:text-laptop tracking-tight" style={{marginRight: 2*scr}}>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">D</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">E</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">V</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">E</span>
                            <span className="lg:mx-zero text-primary hover:text-primary-light transition-colors">L</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">O</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">P</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">E</span>
                            <span className="lg:mr-zero text-primary hover:text-primary-light transition-colors">R</span>
                        </div>
                        <div className="mt-10 sm:mt-20 lg:mt-0 sm:mr-10">
                            <div className="flex flex-col text-center w-52 text-primary-light bg-secondary text-3xl sm:text-6xl sm:ml-16 font-sans font-light sm:mr-4">
                                    About 
                                <span className="text-sm mt-4">
                                I`m a front-end developer building scalable, performant, and responsive websites located in Graz, Austria. Currently, I`m producing UI and Backend systems at Greenhive Gmbh.
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="">
                        <div className="h-40 w-40 text-6xl rounded shim-red">
                            asd
                        </div>
                    </div> */}
                    <div className="pt-6 animate-bounce bg-secondary flex items-center w-full justify-center" style={{color: `rgba(255,255,255,${scr<800? 1-scr/800: 0}`}}>
                        <span>
                        Scroll Down
                        </span> 
                    </div>
                

            
        </div>
    );
}

export default Main;
