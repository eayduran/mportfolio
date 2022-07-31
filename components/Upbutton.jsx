import Link from "next/link";

export default function Upbutton({scr}) {
    return (
      <>
       { scr > 600 ? <Link href='/#main'><div className="fixed bottom-12 right-12 bg-red-400 w-20 h-20 flex items-center justify-center transition ease-in-out delay-150 bg-red-300">Go up</div></Link>: null }
      </>
    )
  }
  