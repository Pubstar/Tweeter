import Image from "next/image";
import CreateTweet from './Components/createTweet';
import LoadTweets from './Components/loadTweets';
import Nav from "./Components/Nav";
import {getAuth} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuLrUqllkAjCX5-VMb99mdnUxkhvbDkPo",
  authDomain: "tweeter-c814e.firebaseapp.com",
  projectId: "tweeter-c814e",
  storageBucket: "tweeter-c814e.appspot.com",
  messagingSenderId: "806481311122",
  appId: "1:806481311122:web:33d22e3d688610c8eb3d4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default function Home() {
  return (
      <main className="bg-[#A1C349] h-screen">
        <Nav />
        <CreateTweet />
        <LoadTweets />
      </main>
  );
}
