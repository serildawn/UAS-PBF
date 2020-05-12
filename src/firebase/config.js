import "firebase/auth";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_sh516TxnykxKIXATGT93QxW40KCcpYk",
  authDomain: "uas-pbf-30e38.firebaseapp.com",
  databaseURL: "https://uas-pbf-30e38.firebaseio.com",
  projectId: "uas-pbf-30e38",
  storageBucket: "uas-pbf-30e38.appspot.com",
  messagingSenderId: "1072870354610",
  appId: "1:1072870354610:web:785a2098a36113e85723ab",
  measurementId: "G-NXTCJ2HJVX"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
