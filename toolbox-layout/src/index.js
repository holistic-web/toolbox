import Vue from 'vue';
import Analytics from './components/Analytics';
import AppButton from './components/AppButton';
import AppHeader from './components/AppHeader';
import ToolLayout from './components/ToolLayout';

const components = {
	Analytics,
	AppButton,
	AppHeader,
	ToolLayout
};

Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
})


export default components;