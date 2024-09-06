import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';

function LoadTweets(props: any) {
  const [allTweets, setAllTweets] = useState([{}]);

  const forceReload = () => {
    setAllTweets([{}]);
  }
  
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
  }, [props.reload, allTweets]);
  
  return (
    <div className='flex justify-center mt-20 flex-col items-center gap-8'>
      <span className='hidden absolute'>{props.reload}</span>
      {allTweets.length > 0 && allTweets.map((tweet: any = {}, i) => {
        return <Tweet key={i} forceReload={forceReload} username={tweet?.displayName} email={tweet?.user} tweetText={tweet?.tweetText} likes={tweet?.likes} id={tweet?.id}/>
      })}
      {allTweets.length < 1 && <div>No tweets yet</div>}
    </div>
  )
}

export default LoadTweets