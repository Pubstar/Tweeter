"use client"

import React, { useState } from 'react'
import Nav from '../Components/Nav'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../firebase';
import {useRouter} from 'next/navigation'

interface User {
  email: string,
  password: string
}

function Page() {

const router = useRouter();

const [errMessage, setErrMessage] = useState('');

function createUser(email: string, name: string, password: string): User {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      updateProfile(userCredential.user, {
        displayName: name
      })
      const user = userCredential.user;
      return router.push('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);

      switch(errorCode) {
        case "auth/email-already-in-use":
          setErrMessage('Email address already in use.');
        break;
        case "auth/invalid-email":
          setErrMessage('Please enter a valid email address.');
        break;
        case "auth/weak-password":
          setErrMessage('Please use a stronger password. (min. 6 characters)');
      }
    });
    return {email,password};
}

const [username, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');

  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
  
    createUser(username,name,password);
  }  

  return (
    <div className="h-screen bg-[#1c1b30]">
      <Nav />
      <div className='flex flex-col items-center'>
      <h1 className='my-16 font-bold text-5xl text-[#c7d3fc]'>Register</h1>
        <form action="" onSubmit={submitForm} className='text-[#c7d3fc] bg-[#2e3d7e] shadow-xl flex flex-col w-80 gap-4 border-2 border-[#243010] rounded-xl items-center p-16'>
          <label htmlFor="email">Email: </label>
          <input onChange={event => setEmail(event.target.value)} className='rounded-xl border-2 border-[#243010] p-2' type="email" name="email" id="email" />
          <label htmlFor="name">Username: </label>
          <input onChange={event => setName(event.target.value)} className='rounded-xl border-2 border-[#243010] p-2' type="text" name="name" id="name" />
          <label htmlFor="password">Password: </label>
          <input onChange={event => setPassword(event.target.value)} className='rounded-xl border-2 border-[#243010] p-2' type="password" name="password" id="password" />
          <button type='submit' className='shadow-xl border-2 border-[#243010] mt-2 bg-[#211964] text-[#c7d3fc] font-bold rounded-xl w-44'>Create account</button>
          <span className='pt-4 text-red-600 font-bold'>{errMessage}</span>
        </form>
      </div>
    </div>
  )
}

export default Page