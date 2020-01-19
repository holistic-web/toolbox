import Vue from 'vue';
import App from './App';
import 'toolbox-layout';
import 'toolbox-layout/dist/toolbox-layout.css';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
