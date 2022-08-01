import React from "react";
import Image from "next/image";
import Navbar from "./Navbar"
import MainSVG from "../public/assets/Main.svg";

const Main = () => {

    return(        
        <div id="main" className="calc-height flex w-full flex-col bg-blue-200 h-screen">
            <Navbar />
            <div className="flex justify-evenly items-center h-screen">

                <div className="w-5/12 bg-pink-300">
                    <p className="text-md text-red-700">
                        Hey there, my name is
                    </p>
                    <h1 className="text-6xl font-bold text-primary-300">
                        Enes Ayduran
                    </h1>
                    <p className="text-3xl italic text-primary-300">
                        A passionate Front-End Developer
                    </p>
                    <p className="my-4 text-justify text-lg font-semibold text-primary-300">
                        I'm a front-end developer and also a electronics
                        engineer building scalable, cross-browser compatible,
                        performant, and responsive websites located in Graz.
                        Feel free to take a look at my latest projects a little
                        bit below this page. Currently, I'm producing useful UI and Backend server at{" "}
                        <a
                            href="https://www.greenhive.at"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="hover: text-red-700 underline-offset-2 hover:cursor-pointer hover:underline"
                        >
                            Greenhive
                        </a>
                        .
                    </p>
                </div>
                <div className="hidden md:inline-block">
                    <Image
                        src={MainSVG}
                        width={600}
                        height={450}
                        priority
                        alt="Main Portfolio Introducer"
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;