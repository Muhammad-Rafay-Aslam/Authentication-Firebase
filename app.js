import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOcEwWIZgRS4DqfzJ9wcpHJJQpScd60rY",
  authDomain: "authentication-fdedf.firebaseapp.com",
  projectId: "authentication-fdedf",
  storageBucket: "authentication-fdedf.firebasestorage.app",
  messagingSenderId: "86016930433",
  appId: "1:86016930433:web:85afafd746816e372cd380",
  measurementId: "G-E6XRBMSL8J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let get_Signup_btn = document.getElementById("signUp-btn");

get_Signup_btn.addEventListener("click", () => {
  let getname = document.getElementById("sname").value;
  let getemail = document.getElementById("semail").value;
  let getpassword = document.getElementById("spassword").value;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
