<template>
	<default-layout :isLoading="page.isLoading" :isSubmitting="page.isSubmitting">

		<template v-slot:title>
			{{ titleText }}
		</template>

		<template v-slot:actions>
			<b-button
				variant="info"
				v-text="'List'"
				:to="{ name: 'themes.list' }"/>

			<b-button
				v-if="!isInCreateMode"
				variant="danger"
				v-text="'Delete'"
				:disabled="page.isSubmitting"
				@click="openConfirmDeleteModal"/>

			<b-button
				variant="primary"
				v-text="'Preview'"
				:disabled="page.isSubmitting"
				@click="onPreviewClick"/>

			<b-button
				v-if="isInCreateMode"
				variant="outline-info"
				v-text="'Create'"
				:disabled="isSubmitDisabled"
				@click="onCreateClick"/>

			<b-button
				v-if="!isInCreateMode"
				variant="outline-info"
				v-text="'Update'"
				:disabled="isSubmitDisabled"
				@click="onUpdateClick"/>
		</template>

		<template v-slot:content>

			<b-form-group
				label="Name"
				label-for="ThemesEdit__name">
				<b-form-input
					id="ThemesEdit__name"
					v-model="themeInput.name"
					trim/>
			</b-form-group>

			<section>
				<h3>Lights</h3>
				<light-list v-model="themeInput.lights"/>
			</section>

			<confirm-modal
				:visible="page.isConfirmDeleteModalVisible"
				title="Delete Theme"
				text="Are you sure you want to delete this theme?"
				:danger="true"
				@ok="onDeleteClick"
				@hidden="hideConfirmDeleteModal"/>

		</template>

	</default-layout>
</template>

<script>
import { cloneDeep } from 'lodash';
import { mapGetters, mapActions } from 'vuex';
import toastService from '../../lib/toastService';
import DefaultLayout from '../../components/DefaultLayout.vue';
import ConfirmModal from '../../components/ConfirmModal.vue';
import LightList from '../Lights/components/List.vue';

export default {
	components: {
		DefaultLayout,
		ConfirmModal,
		LightList
	},
	data() {
		return {
			page: {
				isLoading: false,
				isSubmitting: false,
				isConfirmDeleteModalVisible: false
			},
			themeInput: {}
		};
	},
	computed: {
		...mapGetters({
			lights: 'lights/lights'
		}),
		isInCreateMode() {
			return this.$route.name === 'themes.create';
		},
		titleText() {
			if (this.isInCreateMode) return 'New Theme';
			return 'Edit Theme';
		},
		isSubmitDisabled() {
			return (!this.themeInput.name || this.page.isSubmitting);
		}
	},
	methods: {
		...mapActions({
			fetchLights: 'lights/fetchLights',
			fetchTheme: 'themes/fetchTheme',
			updateTheme: 'themes/updateTheme',
			createTheme: 'themes/createTheme',
			deleteTheme: 'themes/deleteTheme',
			applyTheme: 'themes/applyTheme'
		}),
		async setUpPage() {
			this.page.isLoading = true;
			if (this.isInCreateMode) {
				await this.fetchLights();
				this.themeInput.lights = cloneDeep(this.lights);
			} else {
				const { id } = this.$route.params;
				this.themeInput = await this.fetchTheme(id);
			}
			this.page.isLoading = false;
		},
		async onCreateClick() {
			this.page.isSubmitting = true;
			try {
				await this.createTheme(this.themeInput);
				toastService.toast('Theme created');
				this.$router.push({ name: 'themes.list' });
			} catch (err) {
				toastService.toast(err.message);
			}
			this.page.isSubmitting = false;
		},
		async onUpdateClick() {
			this.page.isSubmitting = true;
			try {
				await this.updateTheme(this.themeInput);
				toastService.toast('Theme updated');
			} catch (err) {
				toastService.toast(err.message);
			}
			this.page.isSubmitting = false;
		},
		async onPreviewClick() {
			this.page.isSubmitting = true;
			try {
				await this.applyTheme(this.themeInput);
				toastService.toast('Theme applied');
			} catch (err) {
				toastService.toast(`Error applying theme: ${err}`);
			}
			this.page.isSubmitting = false;
		},
		async onDeleteClick() {
			this.page.isSubmitting = true;
			try {
				await this.deleteTheme(this.themeInput);
				toastService.toast('Theme deleted');
				this.$router.push({ name: 'themes.list' });
			} catch (err) {
				toastService.toast(`Error deleting theme: ${err}`);
			}
			this.page.isSubmitting = false;
		},
		openConfirmDeleteModal() {
			this.page.isConfirmDeleteModalVisible = true;
		},
		hideConfirmDeleteModal() {
			this.page.isConfirmDeleteModalVisible = false;
		}
	},
	watch: {
		$route: {
			immediate: true,
			handler: 'setUpPage'
		}
	}
};

</script>
