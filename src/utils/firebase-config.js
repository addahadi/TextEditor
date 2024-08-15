// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyANAD1hI8e3SE9yBUICcy7JHurvQ3y-98Q",
  authDomain: "texteditor-3eb26.firebaseapp.com",
  projectId: "texteditor-3eb26",
  storageBucket: "texteditor-3eb26.appspot.com",
  messagingSenderId: "1078422004489",
  appId: "1:1078422004489:web:686ae0696b93ca136929d8"
};

// Initialize Firebase
export const app = !firebase.apps.length  ?  firebase.initializeApp(firebaseConfig) : firebase.app();
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app)
export let  database = firebase.firestore()