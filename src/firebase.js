// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiKPP8Us6dzJW4z1qTIe8o56NPiYQ0sgE",
  authDomain: "uninest-p.firebaseapp.com",
  projectId: "uninest-p",
  storageBucket: "uninest-p.firebasestorage.app",
  messagingSenderId: "729054906511",
  appId: "1:729054906511:web:87d85d4addad8c3d3288fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
