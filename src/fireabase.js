// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEa88pkU7VUHSGm2JJ5wTtBBBuHhjwpsE",
  authDomain: "hobbybuy-1.firebaseapp.com",
  projectId: "hobbybuy-1",
  storageBucket: "hobbybuy-1.appspot.com",
  messagingSenderId: "127695650822",
  appId: "1:127695650822:web:1fdd50762b10d681aa4387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);