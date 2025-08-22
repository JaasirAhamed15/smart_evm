// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCs6RToEE3pSxMrTzgvKN1SfaZnxuqaEKo",
  authDomain: "smart-evm-6d9a5.firebaseapp.com",
  databaseURL: "https://smart-evm-6d9a5-default-rtdb.firebaseio.com",
  projectId: "smart-evm-6d9a5",
  storageBucket: "smart-evm-6d9a5.appspot.com",
  messagingSenderId: "830369551905",
  appId: "1:830369551905:web:9a2351da8fcd5f34807560"
};

// Initialize Firebase once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);

export { app, db };
