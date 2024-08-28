"use client"
import CreateTweet from './Components/createTweet';
import LoadTweets from './Components/loadTweets';
import Nav from "./Components/Nav";
import {auth} from './firebase';

export default function Home() {
  return (
      <main className="bg-[#A1C349] h-screen">
        <Nav />
        <h1>Logged in as {auth.currentUser?.email}</h1>
        <CreateTweet />
        <LoadTweets />
      </main>
  );
}
