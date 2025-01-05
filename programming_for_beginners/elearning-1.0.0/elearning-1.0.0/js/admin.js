// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// Firebase Config (Replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyDBWYgCSW-XvDEliAm_cHFSg4LIv29joJw",
    authDomain: "old-books-seller.firebaseapp.com",
    databaseURL: "https://old-books-seller-default-rtdb.firebaseio.com",
    projectId: "old-books-seller",
    storageBucket: "old-books-seller.firebasestorage.app",
    messagingSenderId: "696373662236",
    appId: "1:696373662236:web:587ac6b5a46f544797c5d9",
    measurementId: "G-VGLV0VPY4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Register
registerBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Set default role as 'user'
            set(ref(db, "users/" + user.uid), {
                email: email,
                role: "user" // Default role
            });
            alert("Registered successfully!");
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login
loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Get user's role
            const dbRef = ref(db);
            get(child(dbRef, `users/${user.uid}`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const role = snapshot.val().role;
                        if (role === "admin") {
                            window.location.href = "admin-dashboard.html"; // Redirect to admin
                        } else {
                            window.location.href = "index.html"; // Redirect to home
                        }
                    } else {
                        alert("No role assigned to this user.");
                    }
                })
                .catch((error) => {
                    alert(error.message);
                });
        })
        .catch((error) => {
            alert(error.message);
        });
});