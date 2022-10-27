// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjU3xt1BMFxsnn0hSCu0W2-tUjEu46jHU",
  authDomain: "realtor-clone-react-c64ef.firebaseapp.com",
  projectId: "realtor-clone-react-c64ef",
  storageBucket: "realtor-clone-react-c64ef.appspot.com",
  messagingSenderId: "29129780966",
  appId: "1:29129780966:web:d9eb682f7e6ecee32f5527"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()