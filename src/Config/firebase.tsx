// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2PiPpcgV3xkkn8CO0iHQl68vHbumZHok",
  authDomain: "impulso-cristiano.firebaseapp.com",
  projectId: "impulso-cristiano",
  storageBucket: "impulso-cristiano.appspot.com",
  messagingSenderId: "756956324488",
  appId: "1:756956324488:web:3901fc9fc7a8791d55f53d",
  measurementId: "G-JPCNNDBBTV"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();
const analitycs = getAnalytics(app);
export {db, storage, analitycs};