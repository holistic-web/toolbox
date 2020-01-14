import Vue from 'vue';
import AppButton from './components/AppButton';
import AppHeader from './components/AppHeader';
import ToolLayout from './components/ToolLayout';

const components = {
	AppButton,
	AppHeader,
	ToolLayout
};

Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
})

// I was not able to install separately which needs to be changed
// import * as firebase from "firebase/app";

// import "firebase/analytics";

var firebase = require("firebase");

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
// Initialize Firebase & Analytics
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// firebase.analytics().logEvent('');

export default components;