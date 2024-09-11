import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { useRouter } from 'next/navigation';
import Image from 'next/image'

function Tweet(props: any) {

  const router = useRouter();

  const [liked,setLiked] = useState(false);

  const originalPoster = auth.currentUser?.email == props.email;

  const deleteTweet = async () => {
    await deleteDoc(doc(db, "tweets", props.id))
    .then(() => {
      props.forceReload();
    })
  }

  const likeImg = () => {
    if(liked) return '/likeActive.png'
    else if (!liked) return '/like.png'

    return '/like.png'
  }

  const handleLike = async () => {
    const docRef = doc(db, 'tweets', props.id);
    if(!liked)
    { 
      await updateDoc(docRef, {likes: [...props.likes, auth.currentUser?.email]});
      setLiked(!liked);
    } else {
      let newList = props.likes.filter((item: string) => item !== auth.currentUser?.email);
      await updateDoc(docRef, {likes: newList})
      setLiked(!liked);
    }
    props.forceReload();
  }

  return (
    <div className='border-2 border-[#243010] rounded-2xl shadow-xl w-[80%] md:w-96 text-[#c7d3fc] bg-[#2e3d7e]'>
        <div className='p-6 border-[#243010] border-b-2 bg-[#211964]'>
            <h2 className='text-2xl font-extrabold'>{props.username}</h2>
        </div>
        <p className='p-16'>
            {props.tweetText}
        </p>
        <div className='border-t-2 border-[#243010] p-6 bg-[#211964] justify-between flex'>
            <span className='font-semibold'>{props.likes} Likes</span>
            {auth.currentUser? (<Image className='hover:cursor-pointer' onClick={handleLike} src={likeImg()} width={25} height={25} alt='Like tweet' />) : ''}
            {originalPoster ? (<span onClick={deleteTweet} className='font-semibold hover:cursor-pointer text-red-600'>Delete tweet</span>) : ''}
        </div>
    </div>
  )
}

export default Tweet