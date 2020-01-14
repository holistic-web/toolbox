<script>

// I was not able to install separately which needs to be changed
// import * as firebase from "firebase/app";

// // Add the Firebase services that you want to use
// import "firebase/analytics";

var firebase = require("firebase");

// Your web app's Firebase configuration
// THIS SHOULD PROBABLY BE ITS OWN FOLDER
var firebaseConfig = {
    apiKey: "AIzaSyCYyxjgL9YGvKnzax2EBxEI_bl6KxB2nK8",
    authDomain: "holistic-toolbox.firebaseapp.com",
    databaseURL: "https://holistic-toolbox.firebaseio.com",
    projectId: "holistic-toolbox",
    storageBucket: "holistic-toolbox.appspot.com",
    messagingSenderId: "94330098957",
    appId: "1:94330098957:web:c87c654651186a555e0c44",
    measurementId: "G-J32Q7R91JH"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.analytics().logEvent('hello');

</script>