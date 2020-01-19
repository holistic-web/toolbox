import Vue from 'vue';
import App from './App';
import 'toolbox-layout';
import 'toolbox-layout/dist/toolbox-layout.css';
import BootstrapVue from 'bootstrap-vue';
import Clipboard from 'v-clipboard';

Vue.use(BootstrapVue);
Vue.use(Clipboard);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
