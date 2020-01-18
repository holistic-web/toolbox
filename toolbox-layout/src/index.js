import Vue from 'vue';

import ToolButton from './components/ToolButton';
import ToolError from './components/ToolError';
import ToolHeader from './components/ToolHeader';
import ToolLayout from './components/ToolLayout';
import './styles/theme.scss';

const components = {
	ToolButton,
	ToolError,
	ToolHeader,
	ToolLayout
};

Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
})

import * as firebase from 'firebase/app';
import 'firebase/analytics';

firebase.initializeApp({
	apiKey: 'AIzaSyCYyxjgL9YGvKnzax2EBxEI_bl6KxB2nK8',
	authDomain: 'holistic-toolbox.firebaseapp.com',
	databaseURL: 'https://holistic-toolbox.firebaseio.com',
	projectId: 'holistic-toolbox',
	storageBucket: 'holistic-toolbox.appspot.com',
	messagingSenderId: '94330098957',
	appId: '1:94330098957:web:c87c654651186a555e0c44',
	measurementId: 'G-J32Q7R91JH'
});
firebase.analytics();

export default components;