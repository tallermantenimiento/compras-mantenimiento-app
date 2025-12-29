// firebase-config.js (CDN)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Config real
const firebaseConfig = {
  apiKey: "AIzaSyBVCaP1DJqkt-kbPU9xUvKI-YgXIB32UF8",
  authDomain: "compras-mantenimiento-app.firebaseapp.com",
  projectId: "compras-mantenimiento-app",
  storageBucket: "compras-mantenimiento-app.firebasestorage.app",
  messagingSenderId: "421706450966",
  appId: "1:421706450966:web:38ed25089d8c883079cd37",
  databaseURL: "https://compras-mantenimiento-app-default-rtdb.europe-west1.firebasedatabase.app"
};

// Inicializa
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Exponer para consola
window.firebaseConfig = firebaseConfig;
window.firebaseApp = app;
window.db = db;

// Exportar para uso desde módulos
export { firebaseConfig, app, db };
