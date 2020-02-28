import { configure } from '@storybook/vue';
import Vue from 'vue';
import './theme.scss';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
configure(require.context('../src', true, /\.stories\.js$/), module);
