import React from 'react'

function createTweet() {
  return (
    <div className="flex justify-center py-12">
    <div className="create-tweet flex flex-col">
      <textarea className="border-2 border-[#243010]" name="tweettext" id="tweettext" cols={50} rows={6}></textarea>
      <button className="border-2 border-[#243010] mt-2 bg-[#243010] text-[#CAD593] font-bold">Create tweet</button>
    </div>
  </div>
  )
}

export default createTweet