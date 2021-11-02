
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyBow_HbcwJ33ejzzQCZFR0dOkeZmTs_SQs",
    authDomain: "texnomart-a1db0.firebaseapp.com",
    projectId: "texnomart-a1db0",
    storageBucket: "texnomart-a1db0.appspot.com",
    messagingSenderId: "745393017348",
    appId: "1:745393017348:web:70bc6ae6828fa6b0801b51",
    measurementId: "G-WD670HPWX8"
})

const auth = app.auth();
const db = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };









// import firebase from "firebase/app";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //     apiKey: "AIzaSyDuYkbqHS7GVrNJc1XB4ofaevm-O96qPrc",
// //     authDomain: "fir-5c5b9.firebaseapp.com",
// //     projectId: "fir-5c5b9",
// //     storageBucket: "fir-5c5b9.appspot.com",
// //     messagingSenderId: "877689149551",
// //     appId: "1:877689149551:web:a7b6ca55e7f2665f6ad59a",
// //     measurementId: "G-BEJMC134EP"
// //   };

// const app = firebase.initializeApp( {
//   apiKey: "AIzaSyDuYkbqHS7GVrNJc1XB4ofaevm-O96qPrc",
//   authDomain: "fir-5c5b9.firebaseapp.com",
//   projectId: "fir-5c5b9",
//   storageBucket: "fir-5c5b9.appspot.com",
//   messagingSenderId: "877689149551",
//   appId: "1:877689149551:web:a7b6ca55e7f2665f6ad59a",
//   measurementId: "G-BEJMC134EP"
// });
// const auth = app.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const db = app.firestore();

// export { auth, provider, db };

