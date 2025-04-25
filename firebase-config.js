// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCgIaoQ85Yicy3uSdNyIO2d35y58yWkRqk",
  authDomain: "encuestashanty1.firebaseapp.com",
  projectId: "encuestashanty1",
  storageBucket: "encuestashanty1.firebasestorage.app",
  messagingSenderId: "505377362551",
  appId: "1:505377362551:web:51a46369ed34d7cf146c72",
  measurementId: "G-CQLL716R31"
};
// Inicializa Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
window.db = firebase.firestore();
