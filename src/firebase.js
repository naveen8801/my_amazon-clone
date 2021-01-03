
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDb-vkL1UoMNkcI1RmSqmU42_GNH4akqLE",
  authDomain: "clone-d509c.firebaseapp.com",
  projectId: "clone-d509c",
  storageBucket: "clone-d509c.appspot.com",
  messagingSenderId: "716937696891",
  appId: "1:716937696891:web:a350196b47f1def00ef4de",
  measurementId: "G-ZF6LH16LT2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

