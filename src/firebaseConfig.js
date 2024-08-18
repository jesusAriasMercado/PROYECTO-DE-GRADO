// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzcNhHZUEry0YiQRsR6t9a3qJJD3CK6dk",
  authDomain: "proyectogrado-a3da9.firebaseapp.com",
  projectId: "proyectogrado-a3da9",
  storageBucket: "proyectogrado-a3da9.appspot.com",
  messagingSenderId: "383969672348",
  appId: "1:383969672348:web:c36f2cd2ca4fb52f638159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);;

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { storage };