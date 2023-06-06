import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBWmf3U_JX9VEuhlT4mcGc3I63Bi_b2Zzo",
  authDomain: "split-my-bill-app.firebaseapp.com",
  projectId: "split-my-bill-app",
  storageBucket: "split-my-bill-app.appspot.com",
  messagingSenderId: "225929682723",
  appId: "1:225929682723:web:0733ba6561ca3b4aa83696",
  measurementId: "G-NCZ6B2NNKZ",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
