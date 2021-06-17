import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyD90JpqBBDR4EiX0R0oKCvLOPEB-3Yy5DI",
  authDomain: "vincacademy.firebaseapp.com",
  databaseURL:
    "https://vincacademy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vincacademy",
  storageBucket: "vincacademy.appspot.com",
  messagingSenderId: "180773839388",
  appId: "1:180773839388:web:c3d23c638afbf8fca275d9",
  measurementId: "G-9EE8WVQPMT",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export default db;
