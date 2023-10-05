// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGj7xZ1Y3GdBPmzfNic9Xtk5JMIbW3258",
  authDomain: "auth-moha-milon-ee24f.firebaseapp.com",
  projectId: "auth-moha-milon-ee24f",
  storageBucket: "auth-moha-milon-ee24f.appspot.com",
  messagingSenderId: "1030469840335",
  appId: "1:1030469840335:web:f570f4111a84967af576ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
