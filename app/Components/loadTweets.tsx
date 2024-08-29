import React from 'react'
import Nav from './Nav'
import Tweet from './Tweet'

function loadTweets() {
  return (
    <div className='flex justify-center mt-20'>
        <Tweet username="Pieter" text="Lorem ispum or something like that " likes={4}/>
    </div>
  )
}

export default loadTweets