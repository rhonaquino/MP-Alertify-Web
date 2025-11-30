// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyC9xxOxrblkjM59EgeEjENJS01IGkzPvgQ",

  authDomain: "mp-alertify-71f45.firebaseapp.com",

  databaseURL: "https://mp-alertify-71f45-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "mp-alertify-71f45",

  storageBucket: "mp-alertify-71f45.firebasestorage.app",

  messagingSenderId: "639263011122",

  appId: "1:639263011122:web:621c72e25b070ce7a7e72b",

  measurementId: "G-VLSLZZZTRY"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Optional analytics
// firebase.analytics();

// References for database and auth
const db = firebase.database();
const auth = firebase.auth();
