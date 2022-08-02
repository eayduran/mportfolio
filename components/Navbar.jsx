import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {

    return(
        <div className="w-full h-20 z-[100] bg-secondary text-xl font-sans">
            <div className="flex justify-between items-center w-full h-full 2xl:px-16 px-6">
                
                <Link href='/'>
                    <a className="hidden md:flex">
                        {/* <Image src="/../public/assets/logo.jpeg" alt="logo" width={50} height={50}/> */}
                        <div className="text-lg hover:text-primary-light text-primary">
                            <div>
                                ENES
                            </div>
                            <div>
                                AYDURAN
                            </div>
                        </div>
                    </a>
                </Link>
                
                <div>
                    <ul className='text-primary flex items-center justify-between font-semibold sm:gap-8'>

                        <li className='cursor-pointer hover:text-primary-light hover:underline hover:decoration-2 hover:underline-offset-4'>
                        <Link href='/#projects'>Projects</Link>
                        </li>

                        <li className='cursor-pointer hover:text-primary-light hover:underline hover:decoration-2 hover:underline-offset-4'>
                        <Link href='/#skills'>Skills</Link>
                        </li>
                        
                        <li className='text-slate-50 cursor-pointer transition hover:duration-300 hover:text-secondary hover:bg-slate-50 border-solid border-2 rounded-lg px-1'>
                        <Link href='/#contact'>Contact</Link>
                        </li>
                    
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;