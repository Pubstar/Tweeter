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
    // We don't want the page to refresh
    e.preventDefault()
  
    createUser(username,password);
  }  

  return (
    <div className="bg-[#A1C349] h-screen">
      <Nav />
      <div className='flex justify-center mt-24'>
        <form action="" onSubmit={submitForm} className='flex flex-col w-80 gap-4 border-2 border-[#243010] rounded-xl items-center p-8'>
          <label htmlFor="email">Email: </label>
          <input onChange={event => setEmail(event.target.value)} className='rounded-xl' type="email" name="email" id="email" />
          <label htmlFor="password">Password: </label>
          <input onChange={event => setPassword(event.target.value)} className='rounded-xl' type="password" name="password" id="password" />
          <button type='submit' className='border-2 border-[#243010] mt-2 bg-[#243010] text-[#CAD593] font-bold rounded-xl w-44'>Create account</button>
        </form>
      </div>
    </div>
  )
}

export default page