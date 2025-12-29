// firebase-config.js (Firestore compat - SIN modules)

const firebaseConfig = {
  apiKey: "AIzaSyBVCaP1DJqkt-kbPU9xUvKI-YgXIB32UF8",
  authDomain: "compras-mantenimiento-app.firebaseapp.com",
  projectId: "compras-mantenimiento-app",
  storageBucket: "compras-mantenimiento-app.firebasestorage.app",
  messagingSenderId: "421706450966",
  appId: "1:421706450966:web:38ed25089d8c883079cd37"
};

// Inicializa Firebase (evitar doble init)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore
const db = firebase.firestore();

// Auth (por si lo necesitas)
const auth = firebase.auth();

// Exponer global
window.firebaseConfig = firebaseConfig;
window.db = db;
window.auth = auth;
