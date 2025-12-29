// firebase-config.js (versión CDN para GitHub Pages)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Config REAL de tu proyecto
export const firebaseConfig = {
  apiKey: "AIzaSyBVCaP1DJqkt-kbPU9xUvKI-YgXIB32UF8",
  authDomain: "compras-mantenimiento-app.firebaseapp.com",
  projectId: "compras-mantenimiento-app",
  storageBucket: "compras-mantenimiento-app.firebasestorage.app",
  messagingSenderId: "421706450966",
  appId: "1:421706450966:web:38ed25089d8c883079cd37",

  // URL de Realtime Database (IMPORTANTE)
  databaseURL: "https://compras-mantenimiento-app-default-rtdb.europe-west1.firebasedatabase.app"
};

// Inicializa
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp);

// Para probar en consola
window.firebaseApp = firebaseApp;
window.firebaseConfig = firebaseConfig;
window.db = db;
