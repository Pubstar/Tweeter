import React from 'react'
import { auth, db } from '../firebase'
import { deleteDoc, doc } from "firebase/firestore"
import { useRouter } from 'next/navigation';

function Tweet(props: any) {

  const router = useRouter();

  const originalPoster = auth.currentUser?.email == props.username;

  const deleteTweet = async () => {
    await deleteDoc(doc(db, "tweets", props.id))
    .then(() => {
      router.push('/Profile');
    })
  }

  return (
    <div className='border-2 border-[#243010] rounded-2xl shadow-xl w-[80%] md:w-96'>
        <div className='p-6 border-[#243010] border-b-2 bg-[#8fbe8398]'>
            <h2 className='text-2xl font-extrabold'>{props.username}</h2>
        </div>
        <p className='p-16'>
            {props.tweetText}
        </p>
        <div className='border-t-2 border-[#243010] p-6 bg-[#8fbe8398] justify-between flex'>
            <span className='font-semibold'>{props.likes} Likes</span>
            {originalPoster ? (<span onClick={deleteTweet} className='font-semibold hover:cursor-pointer text-red-600'>Delete tweet</span>) : ''}
        </div>
    </div>
  )
}

export default Tweet