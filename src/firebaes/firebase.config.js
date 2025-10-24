// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB4GHv8XIvncyCFl_SjLh9uYDn0WVm6YI",
  authDomain: "game-hub-f6664.firebaseapp.com",
  projectId: "game-hub-f6664",
  storageBucket: "game-hub-f6664.firebasestorage.app",
  messagingSenderId: "561611462739",
  appId: "1:561611462739:web:e059bc1c501c08e7ae4ea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);