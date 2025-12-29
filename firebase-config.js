// Firebase (SDK modular por URL) - Compatible con GitHub Pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVCaP1DJqkt-kbPU9xUvKI-YgXIB32UF8",
  authDomain: "compras-mantenimiento-app.firebaseapp.com",
  projectId: "compras-mantenimiento-app",
  storageBucket: "compras-mantenimiento-app.firebasestorage.app",
  messagingSenderId: "421706450966",
  appId: "1:421706450966:web:38ed25089d8c883079cd37",

  // MUY IMPORTANTE (Realtime Database)
  databaseURL: "https://compras-mantenimiento-app-default-rtdb.europe-west1.firebasedatabase.app"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
