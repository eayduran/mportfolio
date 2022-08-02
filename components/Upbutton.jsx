import Link from "next/link";
import tri from "../public/assets/triangle.svg"
import Image from "next/image";
export default function Upbutton({scr}) {
    return (
      <>
       { scr > 600 ? 
       <Link href='/#main'>
          <div className="fixed bottom-12 right-12 w-20 h-20 flex items-center justify-center z-[100] rounded-xl">
            <Image src={tri} height={50} width={50} alt="Go up button" />
          </div>
          
       </Link>: null }
      </>
    )
  }
  