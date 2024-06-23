// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "project-476d0.firebaseapp.com",
  projectId: "project-476d0",
  storageBucket: "project-476d0.appspot.com",
  messagingSenderId: "89159316141",
  appId: "1:89159316141:web:46e6caa324124c3c388c24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);