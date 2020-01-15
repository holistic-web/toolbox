import Vue from 'vue';
import AppButton from './components/AppButton';
import AppHeader from './components/AppHeader';
import ToolLayout from './components/ToolLayout';
import './styles/theme.scss';

const components = {
	AppButton,
	AppHeader,
	ToolLayout
};

Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
})


export default components;