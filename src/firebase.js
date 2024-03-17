// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyDBVX12EBgHjOKzgLc6GUfFrk_fNQ1XABA",
  authDomain: "thequickkfill.firebaseapp.com",
  projectId: "thequickkfill",
  storageBucket: "thequickkfill.appspot.com",
  messagingSenderId: "906579170869",
  appId: "1:906579170869:web:4f30f55789920a96d1037c",
  measurementId: "G-F1FM8XFZX1",
});
const firestore = app.firestore();

const db = {
  users: firestore.collection("users"),
  subscription: firestore.collection("subscriptions"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
};

const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export const storage = app.storage();
export { db, auth, provider };
export default app;
