// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdstrBNIuSrPZfIuZ5Cvp_CL4CpiJXH2o",
  authDomain: "ops-bulletin.firebaseapp.com",
  projectId: "ops-bulletin",
  storageBucket: "ops-bulletin.appspot.com",
  messagingSenderId: "935671328665",
  appId: "1:935671328665:web:04fab283fe00fe5b10ed08",
  measurementId: "G-V0XXG4NZBD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
