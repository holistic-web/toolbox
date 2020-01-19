import Vue from 'vue';
import 'toolbox-layout';
import 'toolbox-layout/dist/toolbox-layout.css';
import BootstrapVue from 'bootstrap-vue';
import App from './App';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
