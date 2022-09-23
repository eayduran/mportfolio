import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";
import line from "../public/assets/line.svg";

import {useEffect, useState} from 'react';

const Contact = () => {
  const [scr, setSrc] = useState(0)
  const [swidth, setSw] = useState(0)
  const [contactswidth, setContw] = useState(71)
  const [contactc, setContactc] = useState(0)
  const [heightofscreen, setHeight] = useState(0)

    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        setHeight(window.innerHeight)
        const scroll = (event) => {
        // console.log(window.scrollY, swidth)
        setSrc(window.scrollY)
        setSw(window.innerWidth)
        setContw(document.getElementById("contactsdiv").offsetWidth)  
        setContactc(document.getElementById("contactc").offsetWidth)  
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
    },[])
    return(        
        <div id="contact" className="overflow-x-hidden flex w-full flex-col h-screen bg-secondary">
            <div className="bg-secondary text-primary-light font-bold flex items-center justify-start w-full h-20 text-4xl font-sans">
                          <div id="contactsdiv" className="w-auto" style={{marginLeft: scr<heightofscreen*2.1 ?(-1)*(heightofscreen*2/7): (1.8*scr - heightofscreen*4)<=(swidth/2 - contactswidth/2)? 1.8*scr - heightofscreen*4: (swidth/2 - contactswidth/2)}}>
                          CONTACT
                          </div>
            </div>

            <div id="contactc" className="mt-8 w-3/4 h-3/4 bg-red-200ss text-primary-light flex flex-col justify-between items-center text-xl" style={{marginLeft: scr<heightofscreen*2.1 ?heightofscreen*4.68: (heightofscreen*6.3 - 2.25*scr)>=(swidth/2 - contactc/2)? heightofscreen*6.3 - 2.25*scr: (swidth/2 - contactc/2)}}>

                <div className="animate-pulse text-sm sm:text-xl">
                    Feel free to reach out.
                </div>

                <div className="text-white flex flex-row w-full bg-blue-200ss h-20 mt-10 justify-center items-center">
                    <a href = "mailto: ayduranenes@gmail.com">ayduranenes@gmail.com</a>
                </div>

                <div className="flex flex-col sm:flex-row w-full text-base lg:text-xl sm:h-16 justify-center items-center mt-10">
                    <a className="hover:text-white hover:bg-primary transition duration-300 border-2 p-2 sm:p-0 border-primary rounded-full sm:mr-10 w-5/6 h-full justify-center items-center flex bg-secondary" href = "https://www.linkedin.com/in/enesayduran" target="_blank" rel="noopener noreferrer">
                        <div>
                            Linkedin
                        </div>
                    </a>

                    <a className="mt-2 sm:mt-0 hover:text-white hover:bg-primary transition duration-300 border-2 p-2 sm:p-0 border-primary rounded-full sm:mr-10 bg-secondary w-5/6 h-full justify-center items-center flex" href = "https://www.github.com/eayduran" target="_blank" rel="noopener noreferrer">
                        <div>
                            Github
                        </div>
                    </a>
                    
                    <a className="my-2 sm:my-0 hover:text-white hover:bg-primary transition duration-300 border-2 p-2 sm:p-0 border-primary rounded-full sm:mr-10 bg-secondary w-5/6 h-full justify-center items-center flex" href = "https://www.twitter.com/codewithenes" target="_blank" rel="noopener noreferrer">
                        <div>
                            Twitter
                        </div>
                    </a>
                    
                    <a className="hover:text-white hover:bg-primary transition duration-300 border-2 p-2 sm:p-0 border-primary rounded-full bg-secondary w-5/6 h-full justify-center items-center flex" href = "https://www.youtube.com/channel/UCr4eRd4JX3PD-vh1TAFKSAw" target="_blank" rel="noopener noreferrer">
                        <div>
                            Youtube
                        </div>
                    </a>

                </div>
                
                <div className="text-white flex flex-row w-full h-2s0 mt-10s justify-center items-center">
                    © 2022 Enes Ayduran
                </div>

            </div>            
        </div>
    );
}

export default Contact;

