// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "xyz-estate.firebaseapp.com",
  projectId: "xyz-estate",
  storageBucket: "xyz-estate.appspot.com",
  messagingSenderId: "210106306495",
  appId: "1:210106306495:web:cae72e7d3412919037db0a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);