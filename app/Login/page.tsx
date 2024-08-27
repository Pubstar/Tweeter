import React from 'react'
import Nav from '../Components/Nav'

function page() {
  return (
    <div className="bg-[#A1C349] h-screen">
      <Nav />
      <div className='flex justify-center mt-24'>
        <form action="" className='flex flex-col w-80 gap-4 border-2 border-[#243010] rounded-xl items-center p-8'>
          <label htmlFor="email">Email: </label>
          <input className='rounded-xl' type="email" name="email" id="email" />
          <label htmlFor="password">Password: </label>
          <input className='rounded-xl' type="password" name="password" id="password" />
          <button className='border-2 border-[#243010] mt-2 bg-[#243010] text-[#CAD593] font-bold rounded-xl w-44'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default page