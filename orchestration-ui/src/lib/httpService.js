import axios from 'axios';
import store from '../store';

/**
 * Service that automatically attaches authentication headers
 * when communicating with the Orchestration API.
 *
 * It requires firebase to be initialised and logged in.
 */
export default {
	async request(config) {
		const axiosConfig = config;
		const token = store.getters['account/token'];
		if (!token) {
			throw new Error('no authenticated token');
		}
		if (!axiosConfig.headers) axiosConfig.headers = {};
		axiosConfig.headers.authorization = `Bearer ${token}`;
		try {
			const result = await axios.request(axiosConfig);
			return result;
		} catch (err) {
			if (err.response && err.response.status === 403) return store.dispatch('account/logOut')();
			throw err;
		}
	}
};
