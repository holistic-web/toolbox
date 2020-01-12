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


export default components;