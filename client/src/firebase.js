// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-5c915.firebaseapp.com",
  projectId: "mern-stack-5c915",
  storageBucket: "mern-stack-5c915.appspot.com",
  messagingSenderId: "174816693681",
  appId: "1:174816693681:web:45cf3d838086aa00a04190"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);