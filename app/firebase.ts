// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
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
export const auth = getAuth();
export const storage = getStorage();