import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6X7W7Z81gqaOZtOxG0gBoLjNXtXCF4I0",
  authDomain: "e-clone-a5bc4.firebaseapp.com",
  projectId: "e-clone-a5bc4",
  storageBucket: "e-clone-a5bc4.appspot.com",
  messagingSenderId: "855815931974",
  appId: "1:855815931974:web:ccd011a571cbae08442247",
  measurementId: "G-RHM740GXZ0",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
