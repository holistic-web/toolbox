/* eslint-disable no-param-reassign */
import firebase from 'firebase';
import config from '../../lib/config';

firebase.initializeApp(config.firebase);
const provider = new firebase.auth.GoogleAuthProvider();

export default {
	namespaced: true,
	state: {
		firebase,
		provider,
		account: null,
		token: null
	},
	mutations: {
		SET_ACCOUNT(state, data) {
			if (!data) {
				state.account = null;
			} else {
				state.account = data;
			}
		},
		SET_TOKEN(state, result) {
			state.token = result;
		}
	},
	actions: {
		/**
		 * Logs in with given credentials and stores these credentials.
		 * @param {String} email the user's email (email)
		 * @param {String} password the user's password
		 */
		async logIn({ state, commit }, { doRedirect = true }) {
			const result = await state.firebase.auth().signInWithPopup(state.provider);
			commit('SET_ACCOUNT', result);
			const token = await state.firebase.auth().currentUser.getIdToken();
			commit('SET_TOKEN', token);
			if (doRedirect) window.location.replace('/');
			return result;
		},
		async logOut({ state, commit }) {
			const success = await state.firebase.auth().signOut();
			commit('SETw_ACCOUNT', null);
			commit('SET_TOKEN', null);
			localStorage.clear();
			window.location.reload();
			return success;
		}
	},
	getters: {
		account: state => state.account,
		token: state => state.token,
		firebase: state => state.firebase
	}
};
