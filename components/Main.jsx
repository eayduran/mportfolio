import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";
import line from "../public/assets/line.svg";

import {useEffect, useState} from 'react';

const Main = () => {
    const [scr, setSrc] = useState(30)
    useEffect(()=>{
        const scroll = (event) => {
        console.log(window.scrollY)
        setSrc(window.scrollY)
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
    },[])
    return(        
        <div id="main" className="overflow-x-hidden calc-height flex w-full flex-col bg-blue-200 h-screen">
            <Navbar />
            <div className="font-mono tracking-tight bg-red-200 font-bold text-6xl flex flex-col items-center h-screen w-full justify-center">
                <div className="flex flex-row items-center">
                    <div className="w-30">
                        <span className="text-primary hover:text-primary-light transition-colors">F</span>
                        <span className="text-primary hover:text-primary-light transition-colors">R</span>
                        <span className="text-primary hover:text-primary-light transition-colors">O</span>
                        <span className="text-primary hover:text-primary-light transition-colors">N</span>
                        <span className="text-primary hover:text-primary-light transition-colors">T</span>
                    </div>

                    {/* line */}
                    <div className="hover:bg-primary-light text-white bg-primary mx-4" style={{height: 12 ,width: 40 + 2*scr}}>
                        
                    </div>
                   
                    <div>
                        <span className="text-primary hover:text-primary-light transition-colors">E</span>
                        <span className="text-primary hover:text-primary-light transition-colors">N</span>
                        <span className="text-primary hover:text-primary-light transition-colors">D</span>
                    </div>
                </div>

                    <div>
                        <span className="text-primary hover:text-primary-light transition-colors">D</span>
                        <span className="text-primary hover:text-primary-light transition-colors">E</span>
                        <span className="text-primary hover:text-primary-light transition-colors">V</span>
                        <span className="text-primary hover:text-primary-light transition-colors">E</span>
                        <span className="text-primary hover:text-primary-light transition-colors">L</span>
                        <span className="text-primary hover:text-primary-light transition-colors">O</span>
                        <span className="text-primary hover:text-primary-light transition-colors">P</span>
                        <span className="text-primary hover:text-primary-light transition-colors">E</span>
                        <span className="text-primary hover:text-primary-light transition-colors">R</span>
                    </div>
            </div>
        </div>
    );
}

export default Main;