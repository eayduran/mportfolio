import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";
import line from "../public/assets/line.svg";

import {useEffect, useState} from 'react';

const Contact = () => {
  const [scr, setSrc] = useState(30)
  const [swidth, setSw] = useState(0)
  const [contactswidth, setContw] = useState(71)

    // let swidth = window.innerWidth;
    // let projectswidth = document.getElementById("projectsdiv").offsetWidth
    useEffect(()=>{
        const scroll = (event) => {
        // console.log(window.scrollY, swidth)
        setSrc(window.scrollY)
        setSw(window.innerWidth)
        setContw(document.getElementById("contactsdiv").offsetWidth)  
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
    },[])
    return(        
        <div id="contact" className="overflow-x-hidden flex w-full flex-col h-screen bg-secondary">
            <div className="bg-secondary text-white flex items-center justify-start w-full h-20 text-4xl font-sans">
                          <div id="contactsdiv" className="w-auto" style={{marginLeft: scr<1792?-200: (2*scr - 3784)<=(swidth/2 - contactswidth/2)? 2*scr - 3784: (swidth/2 - contactswidth/2)}}>
                          CONTACT
                          </div>
            </div>
            
        </div>
    );
}

export default Contact;