import Image from "next/image";
import CreateTweet from './Components/createTweet';
import LoadTweets from './Components/loadTweets';
import Nav from "./Components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#A1C349] h-screen">

      <Nav />
      <CreateTweet />
      <LoadTweets />
    </main>
  );
}
