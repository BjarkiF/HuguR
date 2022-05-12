import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHoW1xg6buHvj8klr0VGz1dUAlv1V3nAM",
  authDomain: "hugur-project.firebaseapp.com",
  projectId: "hugur-project",
  storageBucket: "hugur-project.appspot.com",
  messagingSenderId: "658869758799",
  appId: "1:658869758799:web:a8265da8f83a96e91ff33a",
  measurementId: "G-F03QF0Q6PE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };