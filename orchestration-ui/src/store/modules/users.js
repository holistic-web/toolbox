/* eslint-disable no-param-reassign */
import config from '../../lib/config';
import httpService from '../../lib/httpService';

export default {
	namespaced: true,
	state: {
		users: [],
		user: null
	},
	mutations: {
		SET_USERS(state, users) {
			state.users = users;
		},
		SET_USER(state, user) {
			state.user = user;
		}
	},
	actions: {
		async fetchUsers({ commit }, options = {}) {
			const { data: users } = await httpService.request({
				url: `${config.API_BASE}/users`,
				method: 'GET'
			});
			if (!options.skipCommit) commit('SET_USERS', users);
			return users;
		},
		async createUser(vuex, { email, role }) {
			const result = await httpService.request({
				url: `${config.API_BASE}/users`,
				method: 'POST',
				data: { email, role }
			});
			return result;
		},
		async deleteUser(vuex, userId) {
			const result = await httpService.request({
				url: `${config.API_BASE}/users/${userId}`,
				method: 'DELETE'
			});
			return result;
		},
		async updateUserRole(vuex, { userId, role }) {
			const result = await httpService.request({
				url: `${config.API_BASE}/users/${userId}`,
				method: 'PATCH',
				data: { userId, role }
			});
			return result;
		}
	},
	getters: {
		users: state => state.users,
		user: state => state.user
	}
};
