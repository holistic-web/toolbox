import * as firebase from 'firebase/app';
import 'firebase/analytics';
import {
	ElButton,
	ElCodeInput,
	ElError,
	ElHeader,
	ElLayout,
	ElMarkdown,
	ElTaskbar
} from '@holistic-web/el-layout';
import '@holistic-web/el-layout/dist/el-layout.css';
import Vue from 'vue';
import scrollTo from 'vue-scrollto';
import ToolLayout from './components/ToolLayout.vue';

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

Vue.use(scrollTo, {
	container: '.ToolWrapper',
	duration: 300
});

export {
	ElButton,
	ElCodeInput,
	ElError,
	ElHeader,
	ElLayout,
	ElMarkdown,
	ElTaskbar,
	ToolLayout
};
