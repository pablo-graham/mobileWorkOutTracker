// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmKQr7o28nvCbYlH8ZiWgxqmYSh0NRoqc",
  authDomain: "workouttracker-ecd63.firebaseapp.com",
  projectId: "workouttracker-ecd63",
  storageBucket: "workouttracker-ecd63.appspot.com",
  messagingSenderId: "636892825645",
  appId: "1:636892825645:web:296cdc67e1f1fd5c3350a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword};