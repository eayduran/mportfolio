import Link from "next/link";

export default function Upbutton({scr}) {
    return (
      <>
       { scr > 600 ? <Link href='/#main'><div className="fixed bottom-12 right-12 bg-red-400 w-20 h-20 flex items-center justify-center">Go up</div></Link>: null }
      </>
    )
  }
  