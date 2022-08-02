import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";
import line from "../public/assets/line.svg";

import {useEffect, useState} from 'react';

const Main = () => {
    const [scr, setSrc] = useState(30)
    console.log("scr",scr)
    useEffect(()=>{
        const scroll = (event) => {
        setSrc(window.scrollY)
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
    },[])
    return(        
        <div id="main" className="overflow-x-hidden calc-height flex w-full flex-col bg-secondary h-screen">
            <Navbar />
            <div className="bg-secondary font-bold text-laptop flex flex-col items-start h-screen w-full justify-center">
                <div className="tracking-tight flex flex-row items-center justify-start ml-2">
                    <div className="w-30" style={{}}>
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

                    <div className="flex justify-end w-full">
                        <div className="tracking-tighter" style={{marginRight: 2*scr}}>
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
                        <div className="mt-8">
                            <div className="flex flex-col w-52 text-primary-light bg-secondary text-6xl ml-16 font-sans font-light mr-4">
                                About 
                                <span className="text-sm mt-4">
                                I`m a front-end developer building scalable, performant, and responsive websites located in Istanbul. Currently, I`m producing useful UI and webpages at Adesso Turkey.
                                </span>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="pb-4 animate-bounce bg-secondary flex items-center w-full justify-center" style={{color: `rgba(255,255,255,${scr<800? 1-scr/800: 0}`}}>
                <span>
                Scroll Down
                </span> 
            </div>
        </div>
    );
}

export default Main;