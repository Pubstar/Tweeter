"use client"
import mongoose from 'mongoose';
import CreateTweet from './Components/CreateTweet';
import LoadTweets from './Components/LoadTweets';
import Nav from "./Components/Nav";
import {auth} from './firebase';

export default function Home() {
  return (
      <main className="h-screen">
        <Nav />
        { auth.currentUser ? (<CreateTweet />) : ('') }
        <LoadTweets />
      </main>
  );
}
