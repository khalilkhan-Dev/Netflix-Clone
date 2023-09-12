// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:"AIzaSyDgB3Q0nJlebwszLFhtal6Zh0wNoRomHwg",
    authDomain: "netflix-clone-56aa5.firebaseapp.com",
    projectId: "netflix-clone-56aa5",
    storageBucket: "netflix-clone-56aa5.appspot.com", 
    messagingSenderId: "1016908971843", 
    appId: "1:1016908971843:web:2663112c22be8b492e79f6S"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
