// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC72DDRlGcdYq24w-KCJgbV5IzPiua-Cj8",
  authDomain: "swapcars-assignment.firebaseapp.com",
  projectId: "swapcars-assignment",
  storageBucket: "swapcars-assignment.appspot.com",
  messagingSenderId: "824055878787",
  appId: "1:824055878787:web:2e4d2d0220d214f0e937b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;