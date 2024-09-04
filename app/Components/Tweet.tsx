import React from 'react'

function Tweet(props: any) {
  return (
    <div className='border-2 border-[#243010] rounded-2xl shadow-xl w-[80%] md:w-96'>
        <div className='p-6 border-[#243010] border-b-2 bg-[#8fbe8398]'>
            <h2 className='text-2xl font-extrabold'>{props.username}</h2>
        </div>
        <p className='p-16'>
            {props.tweetText}
        </p>
        <div className='border-t-2 border-[#243010] p-6 bg-[#8fbe8398]'>
            <span className='font-semibold'>{props.likes} Likes</span>
        </div>
    </div>
  )
}

export default Tweet