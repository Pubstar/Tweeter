import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';

function LoadTweets() {
  const [allTweets, setAllTweets] = useState([{}]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDocs(collection(db, "tweets"));
        const data: React.SetStateAction<{}[]> = [];
        result.forEach((doc) => {
          data.push(doc.data());
        })

        setAllTweets(data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className='flex justify-center mt-20 flex-col items-center gap-8'>
      {allTweets.length > 0 && allTweets.map((tweet: any = {}, i) => {
        return <Tweet key={i} username={tweet?.user} tweetText={tweet?.tweetText} likes={tweet?.likes}/>
      })}
    </div>
  )
}

export default LoadTweets