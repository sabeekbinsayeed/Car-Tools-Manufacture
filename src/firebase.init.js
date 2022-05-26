// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyD17VN7mFa-r2-NZE2W-HXJf3i07BiU48I",
    // authDomain: "manufacture-1d49f.firebaseapp.com",
    // projectId: "manufacture-1d49f",
    // storageBucket: "manufacture-1d49f.appspot.com",
    // messagingSenderId: "395332645061",
    // appId: "1:395332645061:web:7f17ba4ca0e186655ec0ac"


    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;