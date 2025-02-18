// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMZ-MP9Ln0RDMLbG-eFZsut-ZoZR9i55Y",
  authDomain: "quoteapp-3e2b9.firebaseapp.com",
  projectId: "quoteapp-3e2b9",
  storageBucket: "quoteapp-3e2b9.firebasestorage.app",
  messagingSenderId: "833289646933",
  appId: "1:833289646933:web:70fc180df48058479f75dc",
  measurementId: "G-YFCFCKBM9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
