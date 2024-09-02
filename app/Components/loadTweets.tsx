import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';

function loadTweets() {

  const [allTweets, setAllTweets] = useState([{}]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDocs(collection(db, "tweets"));
        const data = [];
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

  const showData = () => {
    console.log(allTweets);
  }
  
  return (
    <div className='flex justify-center mt-20 flex-col items-center gap-8'>
      {allTweets.length > 0 && allTweets.map((tweet, i) => {
        return <Tweet username={tweet?.user} tweetText={tweet?.tweetText} likes={tweet?.likes}/>
      })}

      <span onClick={showData} className='hover:cursor-pointer'>Show data</span> 
    </div>
  )
}

export default loadTweets