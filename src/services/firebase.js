import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDQzrEWaA6fDhXdBvme5lzPHuGLlOHdQuo",
    authDomain: "gbmessanger.firebaseapp.com",
    projectId: "gbmessanger",
    storageBucket: "gbmessanger.appspot.com",
    messagingSenderId: "76452901787",
    appId: "1:76452901787:web:f4eebd4f214209959a673e",
    measurementId: "G-GMWC90GC7P"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
