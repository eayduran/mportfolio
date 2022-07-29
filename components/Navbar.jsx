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
                    <ul className='hidden md:flex'>

                        <li className='ml-10 text-sm uppercase hover:border-b hover:border-white hover:text-white hover:'>
                        <Link href='/#about'>About</Link>
                        </li>

                        <li className='ml-10 text-sm uppercase hover:border-b hover:border-white hover:text-white hover:'>
                        <Link href='/#projects'>Projects</Link>
                        </li>

                        <li className='ml-10 text-sm uppercase hover:border-b hover:border-white hover:text-white hover:'>
                        <Link href='/#skills'>Skills</Link>
                        </li>
                        
                        <li className='ml-10 text-sm uppercase hover:border-b hover:border-white hover:text-white hover:'>
                        <Link href='/#contact'>Contact</Link>
                        </li>
                    
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;