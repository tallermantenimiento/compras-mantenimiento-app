// Configuración Firebase para Compras Mantenimiento
// Usada tanto por el panel (PC) como por la app (responsables).

const firebaseConfig = {
  apiKey: "AIzaSyCjmIiEt91ORnjW6lNrIkEl6rGG-uxIqgk",
  authDomain: "compras-mantenimiento.firebaseapp.com",
  projectId: "compras-mantenimiento",
  storageBucket: "compras-mantenimiento.firebasestorage.app",
  messagingSenderId: "520661805072",
  appId: "1:520661805072:web:1a3068244aa06ee9cb8295"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();