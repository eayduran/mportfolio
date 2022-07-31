import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"

const Main = () => {

    return(        
        <div id="main" className="flex flex-col bg-blue-200 h-screen">
            <Navbar />
            <div className="flex justify-center items-center h-screen">

                <div className="w-1/2">
                Hey there, my name is 
                Enes Ayduran. A passionate Front-End Developer. I m a front-end developer and also a electronics engineer building scalable, cross-browser compatible, performant, and responsive websites located in Graz. Feel free to take a look at my latest projects a little bit below this page. Currently, I m producing useful UI and Backend server at Greenhive.
                </div>
                <div className="w-half">
                    <Image src="/../public/assets/main.jpeg" alt="main" width="200px" height="200px" />
                </div>
            </div>
        </div>
    );
}

export default Main;