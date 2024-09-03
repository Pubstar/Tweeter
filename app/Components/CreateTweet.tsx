import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import {db, auth} from '../firebase';


function CreateTweet() {

  const [tweetText, setTweetText] = useState('');

  const handleCreateTweet = async () => {
    const user = auth.currentUser?.email;
    try {
      const docRef = await addDoc(collection(db, "tweets"), {
        user,
        tweetText,
        likes: 0
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="flex justify-center py-12">
    <div className="create-tweet flex flex-col items-center">
      <textarea onChange={(event) => {setTweetText(event.target.value)}} className="border-2 border-[#243010] max-w-fit" name="tweettext" id="tweettext" cols={50} rows={6}></textarea>
      <button onClick={handleCreateTweet} className="border-2 border-[#243010] mt-2 bg-[#243010] text-[#CAD593] font-bold rounded-xl w-44 shadow">Create tweet</button>
    </div>
  </div>
  )
}

export default CreateTweet