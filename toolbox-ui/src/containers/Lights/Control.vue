<template>
	<default-layout :isLoading="page.isLoading" :isSubmitting="page.isSubmitting">

		<template v-slot:title>
			Lights
		</template>

		<template v-slot:actions>
			<b-button
				variant="info"
				v-text="'Refresh'"
				@click="fetch"/>

			<b-btn
				variant="outline-info"
				v-text="'Save as Theme'"
				@click="showSaveAsThemeModal"/>

		</template>

		<template v-slot:content>

			<list class="LightsControl__list" v-model="lightsInputs"/>

			<save-as-theme-modal
				:visible="page.isSaveAsThemeModalVisible"
				:theme="{ lights: lightsInputs }"
				@submitted="goToThemesList"
				@hidden="hideSaveAsThemeModal"/>

			<action-bar v-if="!page.submitted" @update="submit"/>

		</template>

	</default-layout>
</template>

<script>
import { cloneDeep } from 'lodash';
import { mapGetters, mapActions } from 'vuex';
import Pusher from 'pusher-js';
import config from '../../lib/config';
import toastService from '../../lib/toastService';
import DefaultLayout from '../../components/DefaultLayout.vue';
import SaveAsThemeModal from '../Themes/components/SaveAsThemeModal.vue';
import List from './components/List.vue';
import ActionBar from './components/ActionBar.vue';

export default {
	components: {
		DefaultLayout,
		SaveAsThemeModal,
		List,
		ActionBar
	},
	data() {
		return {
			page: {
				isLoading: false,
				isSubmitting: false,
				isSaveAsThemeModalVisible: false
			},
			pusher: {},
			lightsInputs: []
		};
	},
	computed: {
		...mapGetters({
			network: 'networks/network',
			lights: 'lights/lights'
		})
	},
	methods: {
		...mapActions({
			fetchLights: 'lights/fetchLights',
			fetchNetwork: 'networks/fetchNetwork',
			updateLights: 'lights/updateLights'
		}),
		async fetch() {
			this.page.isLoading = true;
			await this.fetchLights();
			this.lightsInputs = cloneDeep(this.lights);
			this.page.isLoading = false;
		},
		async setupPusher() {
			this.pusher.instance = new Pusher(config.pusher.APP_KEY, {
				cluster: config.pusher.cluster
			});
			await this.fetchNetwork();
			this.pusher.channel = this.pusher.instance.subscribe(this.network._id);
			this.pusher.channel.bind('lights_update', () => {
				this.fetch();
			});
		},
		async submit() {
			if (!this.lights) return;
			this.page.isSubmitting = true;
			try {
				await this.updateLights(this.lightsInputs);
				this.fetch();
				toastService.toast('Lights Updated');
			} catch (err) {
				toastService.toast(err);
			}
			this.page.isSubmitting = false;
		},
		showSaveAsThemeModal() {
			this.page.isSaveAsThemeModalVisible = true;
		},
		hideSaveAsThemeModal() {
			this.page.isSaveAsThemeModalVisible = false;
		},
		goToThemesList() {
			this.$router.push({ name: 'themes.list' });
		}
	},
	created() {
		this.fetch();
		this.setupPusher();
	},
	destroyed() {
		if (!this.pusher.channel) return;
		this.pusher.channel.unsubscribe();
	}
};
</script>

<style lang="scss">
.LightsControl {

	&__list {
		padding-bottom: 4rem;
	}
}
</style>
