"use client"
import React from 'react'
import Nav from '../Components/Nav'
import { auth } from '../firebase'
import { useRouter } from 'next/navigation';
import LoadTweets from '../Components/LoadTweets';

function Page() {

  const router = useRouter();

const handleSignOut = () => {
  auth.signOut();
  router.push('/');
}

  return (
    <div className="h-screen">
        <Nav />
        <div className='flex flex-col items-center'>
          <h1 className='my-16 font-bold text-5xl text-[#243010]'>Profile</h1>
          <span className='font-bold text-[#243010]'>Email: {auth.currentUser?.email}</span>
          <span onClick={handleSignOut} className='mt-20 font-bold hover:cursor-pointer text-[#243010] border-2 border-[#243010] py-2 px-8'>Logout</span>
          <div className='flex flex-col items-center'>
            <h2 className='my-16 font-bold text-4xl text-[#243010]'>Tweets by you</h2>
            < LoadTweets filter='self' />
          </div>
        </div>
    </div>
  )
}

export default Page