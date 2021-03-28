import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBdE0aG7raZu1VsHEj9ScmsJlhVmpbwDdY",
  authDomain: "nixon-f5a48.firebaseapp.com",
  projectId: "nixon-f5a48",
  storageBucket: "nixon-f5a48.appspot.com",
  messagingSenderId: "54503992458",
  appId: "1:54503992458:web:2cf5bbdb290fa2c8b25173",
  measurementId: "G-4TRBT3SZNF"
  };

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();
const auth = FirebaseApp.auth();
const storage = FirebaseApp.storage();

export { db };