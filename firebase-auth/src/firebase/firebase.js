// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCESjAWVLr_u9etBRqM7U0pWphuwqGeVrk",
  authDomain: "authentication-1c824.firebaseapp.com",
  projectId: "authentication-1c824",
  storageBucket: "authentication-1c824.appspot.com",
  messagingSenderId: "740943179065",
  appId: "1:740943179065:web:fe260daa84ebf8924ecce8",
  measurementId: "G-V5DB079EH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default app