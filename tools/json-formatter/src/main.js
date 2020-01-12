import Vue from 'vue';
import App from './App.vue';
import 'toolbox-layout';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Clipboard from 'v-clipboard';

Vue.use(BootstrapVue);
Vue.use(Clipboard);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');