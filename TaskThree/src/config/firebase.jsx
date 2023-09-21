/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8F1Zk-398beOefoJbWKkmR1GGvn1ItkY",
  authDomain: "photify-dddc7.firebaseapp.com",
  projectId: "photify-dddc7",
  storageBucket: "photify-dddc7.appspot.com",
  messagingSenderId: "2307875874",
  appId: "1:2307875874:web:2795154a0a079fdacd167b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
