/* eslint-disable no-param-reassign */
import config from '../../lib/config';
import httpService from '../../lib/httpService';

export default {
	namespaced: true,
	state: {
		themes: [],
		theme: null
	},
	mutations: {
		SET_THEMES(state, themes) {
			state.themes = themes;
		},
		SET_THEME(state, theme) {
			state.theme = theme;
		}
	},
	actions: {
		async fetchTheme({ commit }, id) {
			const { data: theme } = await httpService.request({
				url: `${config.API_BASE}/themes/${id}`,
				method: 'GET'
			});
			commit('SET_THEME', theme);
			return theme;
		},
		async fetchThemes({ commit }, options = {}) {
			const { data: themes } = await httpService.request({
				url: `${config.API_BASE}/themes`,
				method: 'GET'
			});
			if (!options.skipCommit) commit('SET_THEMES', themes);
			return themes;
		},
		async updateTheme(vuex, theme) {
			const result = await httpService.request({
				url: `${config.API_BASE}/themes/${theme._id}`,
				method: 'PATCH',
				data: { theme }
			});
			return result;
		},
		async createTheme(vuex, theme) {
			const result = await httpService.request({
				url: `${config.API_BASE}/themes`,
				method: 'POST',
				data: { theme }
			});
			return result;
		},
		async deleteTheme(vuex, theme) {
			const result = await httpService.request({
				url: `${config.API_BASE}/themes/${theme._id}`,
				method: 'DELETE'
			});
			return result;
		},
		async applyTheme({ dispatch }, theme) {
			const result = await dispatch('lights/updateLights', theme.lights, { root: true });
			return result;
		}
	},
	getters: {
		themes: state => state.themes,
		theme: state => state.theme
	}
};
