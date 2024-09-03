import Link from 'next/link'
import React from 'react'
import {auth} from '../firebase';
import { useRouter } from 'next/navigation';

function Nav() {

  const router = useRouter();

  const handleSignOut = () => {
    auth.signOut();
    router.push('/');
  }

  return (
    <nav className="bg-[#243010] text-[#CAD593] flex justify-between py-4 px-12 shadow-2xl">
    <div>
      <Link href="/"><span className="font-extrabold text-2xl">Tweeter</span></Link>
    </div>
    <div className="gap-4 flex">
      {auth.currentUser ? 
      (
        <div className='flex gap-12'>
          <span className='invisible md:visible'>{auth.currentUser?.email}</span>
          <Link href="/Profile"><span className='font-bold hover:cursor-pointer'>Profile</span></Link>
          <span onClick={handleSignOut} className='font-bold hover:cursor-pointer'>Logout</span>
        </div>
        )
       :
       (
        <div className='flex gap-4 md:gap-24'>
          <div className="hover:cursor-pointer">
          <Link href="/Login"><span className="font-bold">Login</span></Link>
          </div>
          <div className="hover:cursor-pointer">
          <Link href="/Register"><span className="font-bold">Register</span></Link>
          </div>
        </div>
        )
      }
    </div>
  </nav>
  )
}

export default Nav