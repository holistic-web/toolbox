import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueToasted from 'vue-toasted';
import App from './App.vue';
import router from './router';
import store from './store/index';


Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(VueToasted);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
