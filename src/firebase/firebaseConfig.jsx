import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-LzzGy2w6AFNqfw3dIDwcZPL1HoUsibQ",
  authDomain: "journal-23b9b.firebaseapp.com",
  projectId: "journal-23b9b",
  storageBucket: "journal-23b9b.appspot.com",
  messagingSenderId: "227048246190",
  appId: "1:227048246190:web:1979f0696db851190cd63f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
