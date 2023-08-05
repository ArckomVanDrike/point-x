// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCC1-BHld_wAOotTqqB9vKoOayDDIzUltM",

  authDomain: "worldx-a9909.firebaseapp.com",

  projectId: "worldx-a9909",

  storageBucket: "worldx-a9909.appspot.com",

  messagingSenderId: "148914070543",

  appId: "1:148914070543:web:d442322e0b356fa5ffaf7a",

  measurementId: "G-P0YVD4SZRP"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
