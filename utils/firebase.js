// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiZhDZdiwwroETa544az0E67Xd38s7EZE",
  authDomain: "varrus-ee20f.firebaseapp.com",
  projectId: "varrus-ee20f",
  storageBucket: "varrus-ee20f.appspot.com",
  messagingSenderId: "915559725541",
  appId: "1:915559725541:web:3e440b046404a3593b570c",
  measurementId: "G-HWBK7SSS5E",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebase.firestore();
export default firebase;
