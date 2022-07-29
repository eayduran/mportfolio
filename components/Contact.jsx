import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
      <div id="contact" className="flex items-center bg-gray-200 h-screen">
      <div className="w-half">
          Contact page
      </div>
      <div className="w-half">
          <Image src="/../public/assets/main.jpeg" alt="main" width="100px" height="100px" />
      </div>
    </div>
    )
  }
  