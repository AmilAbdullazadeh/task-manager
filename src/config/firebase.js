import firebase from "firebase/app";
import "firebase/store";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5Ev4nYexfHba96CqR_NfcFIGu9JTVaO0",
  authDomain: "taskmanager-5.firebaseapp.com",
  projectId: "taskmanager-5",
  storageBucket: "taskmanager-5.appspot.com",
  messagingSenderId: "1009603320536",
  appId: "1:1009603320536:web:5507a1c0a8f0b99f0d15ad",
  measurementId: "G-JWW3J8WSVZ",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore.settings({ timestampInSnapshot: true });

export default firebase;
