import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {

    return(
        <div className="w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full 2xl:px-16 px-5">
                
                <Link href='/'>
                    <a className="hidden md:flex">
                        <Image src="/../public/assets/logo.jpeg" alt="logo" width={50} height={50}/>
                    </a>
                </Link>
                
                <div>
                    <ul className='flex items-center justify-between font-semibold sm:gap-8'>

                        <li className='cursor-pointer hover:text-red-400 hover:underline hover:decoration-2 hover:underline-offset-4'>
                        <Link href='/#about'>About</Link>
                        </li>

                        <li className='cursor-pointer hover:text-red-400 hover:underline hover:decoration-2 hover:underline-offset-4'>
                        <Link href='/#projects'>Projects</Link>
                        </li>

                        <li className='cursor-pointer hover:text-red-400 hover:underline hover:decoration-2 hover:underline-offset-4'>
                        <Link href='/#skills'>Skills</Link>
                        </li>
                        
                        <li className='cursor-pointer hover:text-red-400 hover:underline hover:decoration-2 hover:underline-offset-4'>
                        <Link href='/#contact'>Contact</Link>
                        </li>
                    
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;