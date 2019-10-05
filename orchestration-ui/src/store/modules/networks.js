/* eslint-disable no-param-reassign */
import config from '../../lib/config';
import httpService from '../../lib/httpService';

export default {
	namespaced: true,
	state: {
		networks: [],
		network: null
	},
	mutations: {
		SET_NETWORKS(state, networks) {
			state.networks = networks;
		},
		SET_NETWORK(state, network) {
			state.network = network;
		}
	},
	actions: {
		async setCurrentNetwork(vuex, { _id: networkId }) {
			const result = await httpService.request({
				url: `${config.API_BASE}/me/networkId`,
				method: 'PATCH',
				data: { networkId }
			});
			return result;
		},
		async fetchNetwork({ commit }, options = {}) {
			const { data: network } = await httpService.request({
				url: `${config.API_BASE}/me/network`,
				method: 'GET'
			});
			if (!options.skipCommit) commit('SET_NETWORK', network);
			return network;
		},
		async fetchNetworks({ commit }, options = {}) {
			const { data: networks } = await httpService.request({
				url: `${config.API_BASE}/networks`,
				method: 'GET'
			});
			if (!options.skipCommit) commit('SET_NETWORKS', networks);
			return networks;
		},
		async updateNetwork(vuex, network) {
			const result = await httpService.request({
				url: `${config.API_BASE}/me/network`,
				method: 'PATCH',
				data: { network }
			});
			return result;
		}
	},
	getters: {
		networks: state => state.networks,
		network: state => state.network
	}
};
