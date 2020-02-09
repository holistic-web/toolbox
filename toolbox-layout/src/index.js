import Vue from 'vue';
import './styles/theme.scss';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import ToolButton from './components/ToolButton.vue';
import ToolCode from './components/ToolCode.vue';
import ToolError from './components/ToolError.vue';
import ToolHeader from './components/ToolHeader.vue';
import ToolLayout from './components/ToolLayout.vue';
import ToolMarkdown from './components/ToolMarkdown.vue';
import ToolTaskbar from './components/ToolTaskbar.vue';

const components = {
	ToolButton,
	ToolCode,
	ToolError,
	ToolHeader,
	ToolLayout,
	ToolMarkdown,
	ToolTaskbar
};
Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
});

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

// alias
Vue.prototype.$analytics = firebase.analytics();

export default components;
