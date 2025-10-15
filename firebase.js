// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZZCHmyxGKp2_XuEkIH3Efk8-bzu00ALA",
  authDomain: "uninest-95fe6.firebaseapp.com",
  projectId: "uninest-95fe6",
  storageBucket: "uninest-95fe6.firebasestorage.app",
  messagingSenderId: "649331300607",
  appId: "1:649331300607:web:0ff891434986d78ab214ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
