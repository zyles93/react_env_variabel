import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_APIKEY,
  authDomain: import.meta.env.VITE_FB_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECTID,
  storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MASSAGINGSENDER_ID,
  appId: import.meta.env.VITE_FB_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export firestore
export const firebase = getFirestore("App");
