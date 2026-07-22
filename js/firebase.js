// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_8GdUW3P_x5lphPvPisexCV8MMDXmQVU",
  authDomain: "ismaildeentelecomhub-1a157.firebaseapp.com",
  projectId: "ismaildeentelecomhub-1a157",
  storageBucket: "ismaildeentelecomhub-1a157.firebasestorage.app",
  messagingSenderId: "1461191111",
  appId: "1:1461191111:web:4c287be11318b912d859e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);