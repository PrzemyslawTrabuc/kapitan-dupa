////FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "kapitan-dupa-48dbb.firebaseapp.com",
  databaseURL: "https://kapitan-dupa-48dbb-default-rtdb.firebaseio.com",
  projectId: "kapitan-dupa-48dbb",
  storageBucket: "kapitan-dupa-48dbb.appspot.com",
  messagingSenderId: "579719663966",
  appId: "1:579719663966:web:480df4abde1f9633d57fcf",
  measurementId: "G-42PQJGLV0D"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 