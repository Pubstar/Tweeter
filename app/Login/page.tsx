"use client"
import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import {useRouter} from 'next/navigation'
import {auth} from '../firebase';

function page() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const submitForm = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, username, password);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="h-screen">
      <Nav />
      <div className='flex items-center flex-col'>
        <h1 className='my-16 font-bold text-5xl text-[#243010]'>Login</h1>
        <form action="" onSubmit={submitForm} className='bg-[#8fbe8398] shadow-xl flex flex-col w-80 gap-4 border-2 border-[#243010] rounded-xl items-center p-16'>
          <label htmlFor="email">Email: </label>
          <input onChange={(event) => setUsername(event.target.value)} className='rounded-xl border-2 border-[#243010]' type="email" name="email" id="email" />
          <label htmlFor="password">Password: </label>
          <input onChange={(event) => setPassword(event.target.value)} className='rounded-xl border-2 border-[#243010]' type="password" name="password" id="password" />
          <button type="submit" className='shadow-xl border-2 border-[#243010] mt-2 bg-[#243010] text-[#CAD593] font-bold rounded-xl w-44'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default page