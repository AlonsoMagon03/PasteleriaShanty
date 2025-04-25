// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyDbthH3gkv65-oec61OiQ1liltd5neWuRc",
  authDomain: "encuestashanty.firebaseapp.com",
  projectId: "encuestashanty",
  storageBucket: "encuestashanty.firebasestorage.app",
  messagingSenderId: "830229743734",
  appId: "1:830229743734:web:19e220f264303f4a62b757",
  measurementId: "G-NVSNS7PG6R"
};
// Inicializa Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
window.db = firebase.firestore();
