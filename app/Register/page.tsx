"use client"

import React, { useState } from 'react'
import Nav from '../Components/Nav'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';

interface User {
  email: string,
  password: string
}

function createUser(email: string, password: string): User {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
    return {email,password};
}


function page() {

  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
  
    createUser(username,password);
  }  

  return (
    <div className="h-screen">
      <Nav />
      <div className='flex flex-col items-center'>
      <h1 className='my-16 font-bold text-5xl text-[#243010]'>Register</h1>
        <form action="" onSubmit={submitForm} className='bg-[#8fbe8398] shadow-xl flex flex-col w-80 gap-4 border-2 border-[#243010] rounded-xl items-center p-16'>
          <label htmlFor="email">Email: </label>
          <input onChange={event => setEmail(event.target.value)} className='rounded-xl border-2 border-[#243010]' type="email" name="email" id="email" />
          <label htmlFor="password">Password: </label>
          <input onChange={event => setPassword(event.target.value)} className='rounded-xl border-2 border-[#243010]' type="password" name="password" id="password" />
          <button type='submit' className='shadow-xl border-2 border-[#243010] mt-2 bg-[#243010] text-[#CAD593] font-bold rounded-xl w-44'>Create account</button>
        </form>
      </div>
    </div>
  )
}

export default page