import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Ensure this is imported
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoLi-lQXIHZT2mZMOG9vQOaSg8E17SkNQ",
  authDomain: "adsa-53f72.firebaseapp.com",
  databaseURL: "https://adsa-53f72-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adsa-53f72",
  storageBucket: "adsa-53f72.firebasestorage.app",
  messagingSenderId: "280906415203",
  appId: "1:280906415203:web:658c1ae4402f8b29f0cc56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
