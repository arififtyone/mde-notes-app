// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9MyV2a9BvILBt75PVvf_-15BudIqcdjY",
  authDomain: "mde-notes-app.firebaseapp.com",
  projectId: "mde-notes-app",
  storageBucket: "mde-notes-app.appspot.com",
  messagingSenderId: "173448070002",
  appId: "1:173448070002:web:fff078f44576bcebbd93eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
