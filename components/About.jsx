import Image from "next/image";
import Link from "next/link";
import MainSVG from "../public/assets/Main.svg";


export default function About() {
    return (
      <div id="about" className="flex items-center justify-center bg-green-200 h-screen">
          <div className="hidden md:inline-block">
              <Image
                  src={MainSVG}
                  width={600}
                  height={450}
                  priority
                  alt="Main Portfolio Introducer"
              />
          </div>
                <div className="w-5/12 bg-pink-300">
                    <p className="text-md text-red-700">
                        Hey there, my name is
                    </p>
                    <h1 className="text-6 xl font-bold text-primary-300">
                        Enes Ayduran
                    </h1>
                    <p className="text-3xl italic text-primary-300">
                        A passionate Front-End Developer
                    </p>
                    <p className="my-4 text-justify text-lg font-semibold text-primary-300">
                        I'm a front-end developer and also a electronics
                        engineer building scalable, cross-browser compatible,
                        performant, and responsive websites located in Istanbul.
                        Feel free to take a look at my latest projects a little
                        bit below this page. Currently, I'm producing useful UI and webpages at{" "}
                        <a
                            href="https://www.adesso.com.tr"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="hover: text-red-700 underline-offset-2 hover:cursor-pointer hover:underline"
                        >
                            Adesso Turkey
                        </a>
                        .
                    </p>
                </div>
    </div>
    )
  }
  