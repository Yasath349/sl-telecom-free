// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6byqFLhDCOOivmMwpiF0N0cnpjeNwk3k",
  authDomain: "sl-telecom-d6855.firebaseapp.com",
  projectId: "sl-telecom-d6855",
  storageBucket: "sl-telecom-d6855.firebasestorage.app",
  messagingSenderId: "292283006106",
  appId: "1:292283006106:web:faed88098e363ecf7bb323",
  measurementId: "G-E1ZRB05ZNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
