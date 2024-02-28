// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-4ba0a.firebaseapp.com",
  projectId: "mern-real-estate-4ba0a",
  storageBucket: "mern-real-estate-4ba0a.appspot.com",
  messagingSenderId: "444628801591",
  appId: "1:444628801591:web:d071b74c873388d420c7b2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
