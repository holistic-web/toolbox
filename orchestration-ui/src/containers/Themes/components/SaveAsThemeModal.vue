<template>
	<b-modal
		:visible="visible"
		title="Save as Theme"
		ok-variant="outline-info"
		ok-title="Save"
		:ok-disabled="isSubmitDisabled"
		@ok="onSubmit"
		@hidden="$emit('hidden')">

			<span v-if="isSubmitting" v-text="'Submitting...'"/>

			<template v-if="!isSubmitting">

				<b-form-group
					label="Name"
					label-for="SaveAsThemeModal__name">
					<b-form-input
						id="SaveAsThemeModal__name"
						v-model="name"
						trim/>
				</b-form-group>

				<section v-if="theme.lights">
					<h5>Lights</h5>
					<lights-preview :lights="theme.lights"/>
				</section>

			</template>

	</b-modal>
</template>

<script>
import { mapActions } from 'vuex';
import toastService from '../../../lib/toastService';
import LightsPreview from '../../Lights/components/LightsPreview.vue';

export default {
	components: {
		LightsPreview
	},
	props: {
		visible: {
			required: true,
			type: Boolean
		},
		theme: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			isSubmitting: false,
			name: null
		};
	},
	computed: {
		isSubmitDisabled() {
			return !this.name || this.isSubmitting;
		}
	},
	methods: {
		...mapActions({
			createTheme: 'themes/createTheme'
		}),
		async onSubmit(event) {
			event.preventDefault();
			this.isSubmitting = true;
			try {
				await this.createTheme({
					...this.theme,
					name: this.name
				});
				toastService.toast('Theme created');
				this.$emit('submitted');
				this.$emit('hidden');
			} catch (err) {
				toastService.toast(`Error creating theme: ${err}`);
			}
			this.isSubmitting = false;
		}
	},
	watch: {
		visible() {
			this.name = null;
		}
	}
};
</script>
