<template>
	<section class="Settings">

		<b-form-group
			class="Settings__input"
			description="Ignore anti-aliased pixels"
			label="Include AA"
			label-for="ImageComparer__includeAA"
			label-size="sm">
			<b-form-checkbox
				id="ImageComparer__includeAA"
				v-model="inputValue.includeAA"
				size="sm"
				switch
				@input="updateValue"/>
		</b-form-group>

		<b-form-group
			class="Settings__input"
			description="Blending factor of unchanged pixels in the diff output. 0 - 1"
			label="Alpha"
			label-for="ImageComparer__alpha"
			label-size="sm">
			<b-form-input
				id="ImageComparer__alpha"
				v-model="inputValue.alpha"
				size="sm"
				type="number"
				min="0"
				max="1"
				step="0.1"
				number
				@input="updateValue"/>
		</b-form-group>

		<b-form-group
			class="Settings__input"
			description="A number between 0-1"
			label="Threshold"
			label-for="ImageComparer__threshold"
			label-size="sm">
			<b-form-input
				id="ImageComparer__threshold"
				v-model="inputValue.threshold"
				size="sm"
				type="number"
				min="0"
				max="1"
				step="0.1"
				number
				@input="updateValue"/>
		</b-form-group>

	</section>
</template>

<script>
export default {
	props: {
		value: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			inputValue: null
		};
	},
	methods: {
		updateValue() {
			this.$emit('input', { ...this.inputValue });
		}
	},
	watch: {
		value: {
			immediate: true,
			handler() {
				this.inputValue = { ...this.value };
			}
		}
	}
};
</script>

<style lang="scss">

.Settings {
	display: flex;
	flex-direction: row;

	&__input {
		margin-left: 1rem !important;
		max-width: 250px;
	}
}
</style>
