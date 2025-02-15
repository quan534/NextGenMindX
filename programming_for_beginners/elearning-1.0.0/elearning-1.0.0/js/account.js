// login_form = document.querySelector("body > div > div:nth-child(1)")
// signup_form = document.querySelector("body > div > div:nth-child(2)")
// login_email = document.querySelector("#login-email")
// login_password = document.querySelector("#login-password")
// signup_username = document.querySelector("#signup-username")
// signup_email = document.querySelector("#signup-email")
// signup_password = document.querySelector("#signup-password")


// login_form.addEventListener("submit", (e) => {
//     alert(`login_email=${login_email.value}
// login_password=${login_password.value}`);
//     e.preventDefault();
// });

// signup_form.addEventListener("submit", (e) => {
//     alert(`signup_username=${signup_username.value}
// signup_email=${signup_email.value}
// login_password=${login_password.value}`);
//     e.preventDefault();
// });
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
const emailSignup = document.getElementById("signup-email");
const passwordSignup = document.getElementById("signup-password");
const emailLogin = document.getElementById("login-email");
const passwordLogin = document.getElementById("login-password");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Register
registerBtn.addEventListener("click", () => {
    const email = emailSignup.value;
    const password = passwordSignup.value;
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
    const email = emailLogin.value;
    const password = passwordLogin.value;
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

