import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const database = firebase.firestore();