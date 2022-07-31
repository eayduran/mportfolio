import Image from "next/image";
import Link from "next/link";

export default function Skills() {
    return (
      <div id="skills" className="flex items-center justify-center bg-red-200 h-screen">
      <div className="w-half">
          Skills 
      </div>
      <div className="w-half">
          <Image src="/../public/assets/main.jpeg" alt="main" width="100px" height="100px" />
      </div>
    </div>
    )
  }
  