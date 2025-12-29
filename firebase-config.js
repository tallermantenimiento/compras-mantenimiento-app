// firebase-config.js (Firestore - Modular)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVCaP1DJqkt-kbPU9xUvKI-YgXIB32UF8",
  authDomain: "compras-mantenimiento-app.firebaseapp.com",
  projectId: "compras-mantenimiento-app",
  storageBucket: "compras-mantenimiento-app.firebasestorage.app",
  messagingSenderId: "421706450966",
  appId: "1:421706450966:web:38ed25089d8c883079cd37"
};

// Inicializa App
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exponer para consola
window.firebaseConfig = firebaseConfig;
window.firebaseApp = app;
window.db = db;

// Exportar para módulos si lo necesitas
export { firebaseConfig, app, db, serverTimestamp };
