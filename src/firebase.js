import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyBvR3Qk6Fafe-VtS6dvX7mGAoSn7NRpk7o",
    authDomain: "gifmsg-b1bc4.firebaseapp.com",
    databaseURL: "https://gifmsg-b1bc4.firebaseio.com",
    projectId: "gifmsg-b1bc4",
    storageBucket: "gifmsg-b1bc4.appspot.com",
    messagingSenderId: "205206609070"
  };
firebase.initializeApp(config);
  
export default firebase;