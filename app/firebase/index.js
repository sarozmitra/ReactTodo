var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
//require("firebase/storage");

//import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCMXqPbK3V4MDAbaLwM2S4o0phFOWT5ezY",
      authDomain: "mead-todo-app-1745b.firebaseapp.com",
      databaseURL: "https://mead-todo-app-1745b.firebaseio.com",
      //projectId: "mead-todo-app-1745b",
      storageBucket: "mead-todo-app-1745b.appspot.com",
      //messagingSenderId: "508151249585"
    };

  firebase.initializeApp(config);
} catch(e){

}


export var firebaseRef = firebase.database().ref();
export default firebase;
