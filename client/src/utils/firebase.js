
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
console.log("API KEY:", import.meta.env.VITE_FIREBASE_APIKEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-coach-603bf.firebaseapp.com",
  projectId: "ai-interview-coach-603bf",
  storageBucket: "ai-interview-coach-603bf.firebasestorage.app",
  messagingSenderId: "655548564148",
  appId: "1:655548564148:web:e545de630a18a95c4ccde1"
};


const app= initializeApp(firebaseConfig);
 const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {auth,provider}