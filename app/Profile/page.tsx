"use client"
import React from 'react'
import Nav from '../Components/Nav'
import { auth } from '../firebase'
import { useRouter } from 'next/navigation';

function Page() {

  const router = useRouter();

const handleSignOut = () => {
  auth.signOut();
  router.push('/');
}

  return (
    <div className="h-screen bg-[#1c1b30] text-[#c7d3fc]">
        <Nav />
        <div className='flex flex-col items-center'>
          <h1 className='my-16 font-bold text-5xl'>Profile</h1>
          <ul>
            <li className='font-bold'>Email: {auth.currentUser?.email}</li>
            <li className='font-bold'>Username: {auth.currentUser?.displayName}</li>
          </ul>
          <span onClick={handleSignOut} className='mt-20 font-bold hover:cursor-pointer bg-[#211964] text-[#c7d3fc] border-2 border-[#243010] py-2 px-8'>Logout</span>
        </div>
    </div>
  )
}

export default Page