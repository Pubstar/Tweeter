"use client"
import CreateTweet from './Components/createTweet';
import LoadTweets from './Components/loadTweets';
import Nav from "./Components/Nav";
import {auth} from './firebase';

export default function Home() {
  return (
      <main className="bg-[#A1C349] h-screen">
        <Nav />
        { auth.currentUser ? (<CreateTweet />) : ('') }
        <LoadTweets />
      </main>
  );
}
