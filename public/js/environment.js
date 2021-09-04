// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANWkLLlNa_3BRMLkHX4oRVj9baFidIyZY",
  authDomain: "the-ad-company-fa691.firebaseapp.com",
  databaseURL: "https://the-ad-company-fa691-default-rtdb.firebaseio.com",
  projectId: "the-ad-company-fa691",
  storageBucket: "the-ad-company-fa691.appspot.com",
  messagingSenderId: "19614022644",
  appId: "1:19614022644:web:c62cdc5ec08af444c7d7a1",
  measurementId: "G-T54CWSF1DF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
