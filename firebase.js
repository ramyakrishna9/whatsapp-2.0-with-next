import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCTsZhUFL8mgN-P3bD66n6vTlHNViYUl3g",
    authDomain: "whatsapp-2-eaf5e.firebaseapp.com",
    projectId: "whatsapp-2-eaf5e",
    storageBucket: "whatsapp-2-eaf5e.appspot.com",
    messagingSenderId: "952021283806",
    appId: "1:952021283806:web:4056fa074c65b6970be34f"
};
const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };