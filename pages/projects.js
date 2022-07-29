import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
      <div className="flex items-center bg-blue-200 h-screen">
      <div className="w-half">
          projects
      </div>
      <div className="w-half">
          <Image src="/../public/assets/main.jpeg" alt="main" width="100px" height="100px" />
      </div>
  </div>
    )
  }
  