import Vue from 'vue';
import '@holistic-web/toolbox-layout';
import '@holistic-web/toolbox-layout/dist/toolbox-layout.css';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
