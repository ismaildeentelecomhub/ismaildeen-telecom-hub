import { db } from "./firebase.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

window.loadDashboard = async function () {

    const uid = localStorage.getItem("uid");

    if (!uid) {
        window.location.href = "login.html";
        return;
    }

    try {

        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) return;

        const data = userSnap.data();

        const username = document.getElementById("username");
        if (username) {
            username.innerHTML = "Welcome, " + data.fullname;
        }

        const wallet = document.getElementById("wallet");
        if (wallet) {
            wallet.innerHTML =
                "₦" + Number(data.wallet || 0).toLocaleString("en-NG", {
                    minimumFractionDigits: 2
                });
        }

    } catch (error) {
        console.log(error);
    }

};

// Buttons
window.openWallet = function () {
    window.location.href = "wallet.html";
};

window.buyData = function () {
    window.location.href = "buydata.html";
};

window.buyAirtime = function () {
    window.location.href = "buyairtime.html";
};

window.openProfile = function () {
    window.location.href = "profile.html";
};

// Auto Load
window.onload = loadDashboard;
