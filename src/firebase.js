// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAr6KO8GF7PadJw2xcIaKyNJbaQZLYQB4I",
    authDomain: "todoapp-cbf7c.firebaseapp.com",
    projectId: "todoapp-cbf7c",
    storageBucket: "todoapp-cbf7c.appspot.com",
    messagingSenderId: "523700576690",
    appId: "1:523700576690:web:5624079784b48eca3b84ab",
    measurementId: "G-P85730SBY2"
});

const db = firebaseApp.firestore();

export {db};