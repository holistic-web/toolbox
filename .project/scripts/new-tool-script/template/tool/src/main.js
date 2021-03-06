import Vue from 'vue';
import '@holistic-web/toolbox-layout';
import '@holistic-web/toolbox-layout';
import '@holistic-web/el-layout/dist/el-layout.css';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
