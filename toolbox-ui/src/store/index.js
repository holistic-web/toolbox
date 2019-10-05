import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import accountStore from './modules/account';
import usersStore from './modules/users';
import lightsStore from './modules/lights';
import networkStore from './modules/networks';

Vue.use(Vuex);


const { plugin: persistedStatePlugin } = new VuexPersistence({
	supportCircular: true,
	modules: ['account']
});

const storeConfig = {
	modules: {
		account: accountStore,
		users: usersStore,
		lights: lightsStore,
		networks: networkStore
	},
	plugins: [
		persistedStatePlugin
	]
};

const store = new Vuex.Store(storeConfig);

export default store;
