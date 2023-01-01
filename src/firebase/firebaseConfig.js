
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

//Nifemi: This is the web firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyA-A2enevKrs-vVzhgzw_iwCdbedd6t8Uo",
    authDomain: "devreport-3c73e.firebaseapp.com",
    projectId: "devreport-3c73e",
    storageBucket: "devreport-3c73e.appspot.com",
    messagingSenderId: "986563168351",
    appId: "1:986563168351:web:596e8a2368cbc55ea9f3ea",
    measurementId: "G-ZSGTG3KGW5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
