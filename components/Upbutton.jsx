import Link from "next/link";

export default function Upbutton({scr}) {
    return (
      <>
       { scr > 600 ? <Link href='/#main'><div className="fixed bottom-12 right-12 bg-primary text-secondary w-20 h-20 flex items-center justify-center z-[100] rounded-xl">Go up</div></Link>: null }
      </>
    )
  }
  