// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkAsfKqDTyTZCFLUIlAcBWHkixmzEsBT0",
  authDomain: "ema-john-kh.firebaseapp.com",
  projectId: "ema-john-kh",
  storageBucket: "ema-john-kh.appspot.com",
  messagingSenderId: "1071347343323",
  appId: "1:1071347343323:web:3d1ef953f31b0fcf9f91fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app