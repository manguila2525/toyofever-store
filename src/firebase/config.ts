import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8pIc_WltuCbLHK6ogB1mIqjo2e_SmA10",
  authDomain: "toyofever-eaba4.firebaseapp.com",
  projectId: "toyofever-eaba4",
  storageBucket: "toyofever-eaba4.firebasestorage.app",
  messagingSenderId: "362860570922",
  appId: "1:362860570922:web:6956e1c0dfe29064925653",
  measurementId: "G-CS2VEV13VK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Obtiene la instancia de Firestore

export { app, db }; // Exporta 'db'
