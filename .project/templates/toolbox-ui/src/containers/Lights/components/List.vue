<template>
	<section class="LightsList">

		<light
			v-for="(light, i) in inputVal"
			:key="light.name"
			class="LightsList__item"
			v-model="inputVal[i]"/>

	</section>
</template>

<script>
import Light from './Light.vue';

export default {
	components: {
		Light
	},
	props: {
		value: {
			required: true,
			type: Array
		}
	},
	data() {
		return {
			inputVal: this.value
		};
	},
	watch: {
		inputVal(v) {
			this.$emit('input', v);
		},
		value: {
			immediate: true,
			handler() {
				this.inputVal = this.value;
			}
		}
	}
};
</script>

<style lang="scss">
.LightsList {
	display: flex;
	flex-direction: column;

	&__item {
		width: 100%;
		margin-bottom: 1rem;
	}
}
</style>
