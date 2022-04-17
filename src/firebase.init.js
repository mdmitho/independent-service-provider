// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALDC4Z0D5fJE2xKNV9QIFg7XhJuYuJNFw",
  authDomain: "dentist-care-c901c.firebaseapp.com",
  projectId: "dentist-care-c901c",
  storageBucket: "dentist-care-c901c.appspot.com",
  messagingSenderId: "471620973241",
  appId: "1:471620973241:web:98757551cdb429bc93a168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth