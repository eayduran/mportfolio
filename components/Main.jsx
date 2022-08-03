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
        <div id="main" className="justify-between overflow-x-hidden space-y-8 h-screen flex font-bold flex-col items-start min-w-screen bg-secondary text-white font-sans">
                    <Navbar />
                    <div className="h-1/3 w-auto tracking-tight flex flex-row items-center ml-2 lg:text-laptop">
                        <div className="" style={{}}>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">F</span>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">R</span>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">O</span>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">N</span>
                            <span className="text-primary hover:text-primary-light transition-colors">T</span>
                        </div>

                        {/* line */}
                        <div className="hover:bg-primary-light text-white bg-primary mx-4" style={{height: 28 ,width: 240 + 2*scr}}>
                        
                        </div>
            
                        <div>
                            <span className="text-primary hover:text-primary-light transition-colors">E</span>
                            <span className="text-primary hover:text-primary-light transition-colors">N</span>
                            <span className="text-primary hover:text-primary-light transition-colors">D</span>
                        </div>
                    </div>
                    <div className="h-1/3 flex justify-end items-center w-full lg:text-laptop">
                        <div className="tracking-tight" style={{marginRight: 2*scr}}>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">D</span>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">E</span>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">V</span>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">E</span>
                            <span className="mx-zero text-primary hover:text-primary-light transition-colors">L</span>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">O</span>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">P</span>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">E</span>
                            <span className="mr-zero text-primary hover:text-primary-light transition-colors">R</span>
                        </div>
                        <div className="">
                            <div className="flex flex-col w-52 text-primary-light bg-secondary text-6xl ml-16 font-sans font-light mr-4">
                                About 
                                <span className="text-sm mt-4">
                                I`m a front-end developer building scalable, performant, and responsive websites located in Istanbul. Currently, I`m producing useful UI and webpages at Adesso Turkey.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 animate-bounce bg-secondary flex items-center w-full justify-center" style={{color: `rgba(255,255,255,${scr<800? 1-scr/800: 0}`}}>
                        <span>
                        Scroll Down
                        </span> 
                    </div>
                

            
        </div>
    );
}

export default Main;