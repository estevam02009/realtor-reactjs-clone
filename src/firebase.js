// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT1F9DEHpLJCFj0mxJy3YcXmmtqHiY_bE",
    authDomain: "realtor-clone-react-26d34.firebaseapp.com",
    projectId: "realtor-clone-react-26d34",
    storageBucket: "realtor-clone-react-26d34.appspot.com",
    messagingSenderId: "553445517924",
    appId: "1:553445517924:web:8d5197d3e94dbc3869cd71"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();