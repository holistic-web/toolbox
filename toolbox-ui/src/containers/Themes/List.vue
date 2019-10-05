<template>
	<default-layout :isLoading="page.isLoading" :isSubmitting="page.isSubmitting">

		<template v-slot:title>
			Themes
		</template>

		<template v-slot:actions>
			<b-button
				variant="info"
				v-text="'Refresh'"
				@click="fetchThemesAndSetupPage"/>

			<b-button
				variant="outline-info"
				v-text="'New Theme'"
				:to="{ name: 'themes.create' }"/>
		</template>

		<template v-slot:content>

			<span
				v-if="themes.length === 0"
				v-text="'There are no themes to display. Why not create one?'"/>

			<b-table
				v-else
				:items="themes"
				:fields="tableFields">

				<template slot="lights" slot-scope="data">

					<lights-preview :lights="data.item.lights"/>

				</template>

				<template
					slot="actions"
					slot-scope="data">

					<div class="Table__actions">

						<b-btn
							v-if="!data.item.isSubmitting"
							class="Table__actions__item"
							variant="primary"
							v-text="'Apply'"
							@click="applyThemeToItem(data.item)"/>

						<span
							v-if="data.item.isSubmitting"
							class="Table__actions__item"
							v-text="'Submitting...'"/>

						<b-btn
							class="Table__actions__item"
							variant="outline-info"
							v-text="'Edit'"
							:to="{ name: 'themes.edit', params: { id: data.item._id } }"/>

					</div>


				</template>

			</b-table>

		</template>

	</default-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import toastService from '../../lib/toastService';
import DefaultLayout from '../../components/DefaultLayout.vue';
import LightsPreview from '../Lights/components/LightsPreview.vue';

export default {
	components: {
		DefaultLayout,
		LightsPreview
	},
	data() {
		return {
			page: {
				isLoading: false,
				isSubmitting: false
			},
			tableFields: [
				'name',
				'lights',
				{ key: 'actions', label: '' }
			]
		};
	},
	computed: {
		...mapGetters({
			themes: 'themes/themes'
		})
	},
	methods: {
		...mapActions({
			fetchThemes: 'themes/fetchThemes',
			applyTheme: 'themes/applyTheme'
		}),
		async fetchThemesAndSetupPage() {
			this.page.isLoading = true;
			await this.fetchThemes();
			this.page.isLoading = false;
		},
		async applyThemeToItem(item) {
			this.$set(item, 'isSubmitting', true);
			try {
				await this.applyTheme(item);
				toastService.toast('Theme applied');
			} catch (err) {
				toastService.toast(err.message);
			}
			this.$set(item, 'isSubmitting', false);
		}
	},
	created() {
		this.fetchThemesAndSetupPage();
	}
};
</script>
