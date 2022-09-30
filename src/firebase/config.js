// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBX1oIJNBrWjhMgIooHJ75So25etnu6PWs",
    authDomain: "drinks-fb1e0.firebaseapp.com",
    projectId: "drinks-fb1e0",
    storageBucket: "drinks-fb1e0.appspot.com",
    messagingSenderId: "629604274475",
    appId: "1:629604274475:web:6b7fa3935b7df2e1b2756e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);