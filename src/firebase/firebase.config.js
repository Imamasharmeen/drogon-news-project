// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwqGA7qKOZlsaG-i2VxpLK1yGEA-POQ1Q",
  authDomain: "dragon-news-c2c2a.firebaseapp.com",
  projectId: "dragon-news-c2c2a",
  storageBucket: "dragon-news-c2c2a.firebasestorage.app",
  messagingSenderId: "105726933701",
  appId: "1:105726933701:web:5da0c00e2eaeab95904eac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;