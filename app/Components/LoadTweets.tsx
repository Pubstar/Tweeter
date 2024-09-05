import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';
import { collection, getDocs } from "firebase/firestore";
import {auth, db} from '../firebase';

function LoadTweets(props: any) {
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

  useEffect(() => {
    if(props.filter == 'self') {
      try {
        const result = getDocs(collection(db, "tweets"))
        .then((res) => {
          const data: React.SetStateAction<{}[]> = [];
          res.forEach((doc) => {
            const tweetData = doc.data();
            if (tweetData.user == auth.currentUser?.email)
            {
              data.push(doc.data());
            }
          })
          setAllTweets(data);
          console.log('from here')
        });
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
  }
  }, [])
  
  return (
    <div className='flex justify-center mt-20 flex-col items-center gap-8'>
      {allTweets.length > 0 && allTweets.map((tweet: any = {}, i) => {
        return <Tweet key={i} username={tweet?.user} tweetText={tweet?.tweetText} likes={tweet?.likes} id={tweet?.id}/>
      })}
      {allTweets.length < 1 && <div>No tweets yet</div>}
    </div>
  )
}

export default LoadTweets