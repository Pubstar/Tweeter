"use client"
import { useState } from 'react';
import CreateTweet from './Components/CreateTweet';
import LoadTweets from './Components/LoadTweets';
import Nav from "./Components/Nav";
import {auth} from './firebase';

export default function Home() {

  const [reload, setReload] = useState(0);

  const setReloadAccess = () => {
    setReload(Math.random);
  }

  return (
      <main className="h-screen">
        <Nav />
        { auth.currentUser ? (<CreateTweet setReloadAccess={setReloadAccess}/>) : ('') }
        <LoadTweets reload={reload}/>
      </main>
  );
}
