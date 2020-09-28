import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBwfB-tPcQec5LcbTPNFiKwM3MbxNIImV0",
  authDomain: "facebook-clone-8c167.firebaseapp.com",
  databaseURL: "https://facebook-clone-8c167.firebaseio.com",
  projectId: "facebook-clone-8c167",
  storageBucket: "facebook-clone-8c167.appspot.com",
  messagingSenderId: "646762755849",
  appId: "1:646762755849:web:92e4b9ac193291cf42c5d8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;