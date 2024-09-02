import React, { useEffect } from 'react';
import Tweet from './Tweet';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';

function loadTweets() {

  let allTweets = [{}]
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDocs(collection(db, "tweets"));
        result.forEach((doc) => {
          allTweets.push(doc.data());
        });
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className='flex justify-center mt-20'>
      {allTweets.map((tweet, i) => {
        return <Tweet username={tweet?.user?.user} text={tweet?.tweet?.tweetText} likes={tweet?.likes}/>
      })} 
    </div>
  )
}

export default loadTweets