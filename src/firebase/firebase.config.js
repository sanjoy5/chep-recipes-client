// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAApzu5ntmwpfldBzmlHeBbGlg_NMouxsc",
    authDomain: "chef-recipe-e3c54.firebaseapp.com",
    projectId: "chef-recipe-e3c54",
    storageBucket: "chef-recipe-e3c54.appspot.com",
    messagingSenderId: "303485504860",
    appId: "1:303485504860:web:a2154daa8f9fb36b198599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app