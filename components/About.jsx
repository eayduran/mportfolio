import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
      <div id="about" className="flex items-center justify-center bg-green-200 h-screen">
      <div className="w-half">
          About myself
      </div>
      <div className="w-half">
          <Image src="/../public/assets/main.jpeg" alt="main" width="100px" height="100px" />
      </div>
    </div>
    )
  }
  