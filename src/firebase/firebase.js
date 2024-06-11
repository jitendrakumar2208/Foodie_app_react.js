// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKF4GWHPmxO3iQ8oDlSB3mtARqwlpmwkc",
  authDomain: "food-app-68580.firebaseapp.com",
  databaseURL: "https://food-app-68580-default-rtdb.firebaseio.com",
  projectId: "food-app-68580",
  storageBucket: "food-app-68580.appspot.com",
  messagingSenderId: "859114806984",
  appId: "1:859114806984:web:ee79ef9b4c717231618ffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth }