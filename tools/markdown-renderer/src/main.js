import Vue from 'vue';
import '@holistic-web/toolbox-layout';
import '@holistic-web/el-layout/dist/el-layout.css';
import Clipboard from 'v-clipboard';
import App from './App.vue';

Vue.use(Clipboard);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
