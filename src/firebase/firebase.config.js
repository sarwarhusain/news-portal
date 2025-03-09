// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSa5qUO50og-3N95qWdQMmsK3HFi_emy8",
  authDomain: "news-portal-mac-52858.firebaseapp.com",
  projectId: "news-portal-mac-52858",
  storageBucket: "news-portal-mac-52858.firebasestorage.app",
  messagingSenderId: "339775200359",
  appId: "1:339775200359:web:b79325d601e250110b88c2",
  measurementId: "G-9T9CS5J9SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;