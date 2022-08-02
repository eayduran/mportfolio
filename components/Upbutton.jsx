import Link from "next/link";
import tri from "../public/assets/triangle.svg"
import Image from "next/image";
export default function Upbutton({scr}) {
    return (
      <>
       { scr > 600 ? 
       <Link href='/#main'>
            {/* <Image src={tri} height={50} width={50} alt="Go up button" /> */}  
            <div className="fixed bottom-12 right-12 w-20 h-20">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="225.108" y1="45.126" x2="26.764" y2="384.775"></line>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={14} strokeLinecap="round" x1="26.476" y1="385.734" x2="55.288" y2="432.684"></line>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="57.161" y1="431.512" x2="223.795" y2="142.565"></line>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="335.751" y1="335.46" x2="224.217" y2="142.332"></line>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="252.119" y1="191.804" x2="141.375" y2="383.77"></line>
                    <polyline stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" points="55.966 432.346 236.611 433.01 256.573 433.084 449.542 433.792"></polyline>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="190.817" y1="385.598" x2="141.679" y2="384.192"></line>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="220.252" y1="385.534" x2="474.956" y2="385.005"></line>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="169.92" y1="334.883" x2="391.898" y2="335.811"></line>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="476.369" y1="385.46" x2="450.125" y2="433.242"></line>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="224.892" y1="45.483" x2="421.003" y2="384.427"></line>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="225.56" y1="44.579" x2="278.985" y2="43.394"></line>
                    <line stroke="rgb(0, 222, 222)" strokeWidth={15} strokeLinecap="round" x1="279.165" y1="43.61" x2="476.193" y2="385.117"></line>
                </svg>
            </div>
       </Link>: null }
      </>
    )
  }
  