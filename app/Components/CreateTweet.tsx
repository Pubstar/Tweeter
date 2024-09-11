import React, { useState } from 'react'
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; 
import {db, auth} from '../firebase';
import { useRouter } from 'next/navigation';

function CreateTweet(props: any) {
  const router = useRouter();
  const [tweetText, setTweetText] = useState('');

  const handleCreateTweet = async () => {
    if(tweetText.length < 1) return;
    const user = auth.currentUser?.email;
    const displayName = auth.currentUser?.displayName;
    try {
      const docRef = await addDoc(collection(db, "tweets"), {
        user,
        displayName,
        tweetText,
        likes: [],
        createdAt: new Date().toDateString(),
      });
      console.log("Document written with ID: ", docRef.id);
      await updateDoc(docRef, {
        id: docRef.id
      })
      .then(() => {
        props.setReloadAccess();
        router.push('/');
      })
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="flex justify-center py-12">
    <div className="create-tweet flex flex-col items-center">
      <textarea onChange={(event) => {setTweetText(event.target.value)}} className="border-2 border-[#243010] max-w-[80%]" name="tweettext" id="tweettext" cols={50} rows={6}></textarea>
      <button onClick={handleCreateTweet} className="border-2 border-[#243010] mt-2 bg-[#211964] text-[#c7d3fc] font-bold rounded-xl w-44 shadow">Create tweet</button>
    </div>
  </div>
  )
}

export default CreateTweet