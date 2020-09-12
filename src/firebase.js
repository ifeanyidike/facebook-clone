import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA86ICGMuaxxl0LdcCnhmfL-hTR5dwtMcA",
  authDomain: "custom-facebook.firebaseapp.com",
  databaseURL: "https://custom-facebook.firebaseio.com",
  projectId: "custom-facebook",
  storageBucket: "custom-facebook.appspot.com",
  messagingSenderId: "151364461212",
  appId: "1:151364461212:web:2083f89887727c3cb38359",
  measurementId: "G-RPV7RQYZ8W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
