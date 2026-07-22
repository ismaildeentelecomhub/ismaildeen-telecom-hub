import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// =========================
// REGISTER
// =========================
window.registerUser = async function () {

    const fullname = document.getElementById("fullname")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const password = document.getElementById("password")?.value;

    if (!fullname || !email || !phone || !password) {
        alert("Please fill all fields.");
        return;
    }

    try {

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await setDoc(doc(db, "users", userCredential.user.uid), {
            fullname,
            email,
            phone,
            wallet: 0,
            createdAt: new Date().toISOString()
        });

        alert("Registration Successful");
        window.location.href = "login.html";

    } catch (error) {
        alert(error.message);
    }

};

// =========================
// LOGIN
// =========================
window.loginUser = async function () {

    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("password")?.value;

    if (!email || !password) {
        alert("Enter Email and Password");
        return;
    }

    try {

        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        localStorage.setItem("uid", userCredential.user.uid);
        localStorage.setItem("email", userCredential.user.email);

        alert("Login Successful");

        window.location.href = "dashboard.html";

    } catch (error) {
        alert(error.message);
    }

};

// =========================
// LOGOUT
// =========================
window.logout = async function () {

    await signOut(auth);

    localStorage.removeItem("uid");
    localStorage.removeItem("email");

    window.location.href = "login.html";

};