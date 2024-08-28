"use client"

import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

interface User {
  email: string,
  password: string
}

const firebaseConfig = {
  apiKey: "AIzaSyAuLrUqllkAjCX5-VMb99mdnUxkhvbDkPo",
  authDomain: "tweeter-c814e.firebaseapp.com",
  projectId: "tweeter-c814e",
  storageBucket: "tweeter-c814e.appspot.com",
  messagingSenderId: "806481311122",
  appId: "1:806481311122:web:33d22e3d688610c8eb3d4b"
};

const app = initializeApp(firebaseConfig);

function createUser(email: string, password: string): User {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user, email,password);
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