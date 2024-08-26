import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav className="bg-[#243010] text-[#CAD593] flex justify-between py-4 px-12">
    <div>
      <Link href="/"><span className="font-extrabold text-2xl">Tweeter</span></Link>
    </div>
    <div className="gap-4 flex">
      <div className="hover:cursor-pointer">
        <Link href="/Login"><span className="font-bold">Login</span></Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href="/Register"><span className="font-bold">Register</span></Link>
      </div>
    </div>
  </nav>
  )
}

export default Nav