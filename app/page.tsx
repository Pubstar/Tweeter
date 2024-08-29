"use client"
import mongoose from 'mongoose';
import CreateTweet from './Components/createTweet';
import LoadTweets from './Components/loadTweets';
import Nav from "./Components/Nav";
import {auth} from './firebase';

export default function Home() {
  const MONGODB_URI = process.env.MONGODB_URI

  mongoose.connect(MONGODB_URI)
  return (
      <main className="bg-[#A1C349] h-screen">
        <Nav />
        { auth.currentUser ? (<CreateTweet />) : ('') }
        <LoadTweets />
      </main>
  );
}
