import React from 'react'

function Tweet(props: any) {
  return (
    <div className='border-2 border-[#243010] bg-[#709634] text-[#CAD593] rounded-2xl'>
        <div className='p-4 border-[#243010] border-b-2'>
            <h2 className='text-2xl'>{props.username}</h2>
            <h4>Time / date</h4>
        </div>
        <p className='p-12 bg-[#516b25]'>
            {props.text}
        </p>
        <div className='border-t-2 border-[#243010] p-4'>
            <span>{props.likes}</span>
            <span> Likes</span>
        </div>
    </div>
  )
}

export default Tweet