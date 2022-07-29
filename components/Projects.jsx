import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
      <div id="projects" className="flex items-center bg-yellow-200 h-screen">
      <div className="w-half">
          Projects
      </div>
      <div className="w-half">
          <Image src="/../public/assets/main.jpeg" alt="main" width="100px" height="100px" />
      </div>
    </div>
    )
  }
  