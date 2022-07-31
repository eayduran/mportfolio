import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"

const Main = () => {

    return(        
        <div className="flex flex-col bg-blue-200 h-screen">
            <Navbar />
            <div className="flex justify-center items-center h-screen">

                <div className="w-half">
                    Hey there, my name is
                    Enes
                </div>
                <div className="w-half">
                    <Image src="/../public/assets/main.jpeg" alt="main" width="200px" height="200px" />
                </div>
            </div>
        </div>
    );
}

export default Main;