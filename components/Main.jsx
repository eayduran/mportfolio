import React from "react";
import Image from "next/image";

const Main = () => {

    return(
        <div className="flex items-center bg-blue-200 h-screen">
            <div className="w-half">
                Hey there, my name is
                Enes
            </div>
            <div className="w-half">
                <Image src="/../public/assets/main.jpeg" alt="main" width="200px" height="200px" />
            </div>
        </div>
    );
}

export default Main;