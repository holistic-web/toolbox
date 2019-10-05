<template>
	<b-card
		class="Light"
		body-class="Light__inner">

		<section class="Light__label">
			<h4 v-text="inputVal.name"/>
			<pre v-text="inputVal.type"/>
		</section>

		<div class="Light__controls">

			<div class="Light__item">
				<label v-text="'Power'"/>
				<b-form-radio-group
					v-model="inputVal.state.on"
					:options="onStateOptions"
					size="lg"
					button-variant="outline-info"
					buttons
					stacked/>
			</div>

			<div v-if="controlOptions.length > 1" class="Light__item">
			<label v-text="'Controls'"/>
				<b-form-radio-group
					v-model="controls"
					:options="controlOptions"
					size="sm"
					button-variant="outline-info"
					buttons
					stacked/>
			</div>
		</div>

		<section class="Light__items">

			<template v-if="controls === 'manual'">

				<div class="Light__item">
					<label v-text="'Colour'"/>
					<verte
						picker="wheel"
						model="rgb"
						display="picker"
						:rgbSliders="false"
						:showHistory="false"
						:draggable="false"
						:enableAlpha="false"
						v-model="inputVal.state.colour"/>
				</div>

				<div class="Light__item">
					<label>Brightness</label>
					<b-form-input
						type="range"
						min="0"
						max="100"
						v-model="inputVal.state.brightness"/>
					<span v-if="inputVal.state.brightness" v-text="inputVal.state.brightness"/>
				</div>

			</template>

			<template v-if="controls === 'scene'">

				<div class="Light__item">
					<label v-text="'Scene'"/>
					<b-form-select
						v-model="inputVal.state.scene"
						:options="sceneOptions"/>
				</div>

			</template>

		</section>

	</b-card>

</template>

<script>
import Verte from 'verte';
import 'verte/dist/verte.css';

export default {
	components: {
		Verte
	},
	props: {
		value: {
			required: true
		},
		label: {
			type: String
		}
	},
	data() {
		return {
			inputVal: this.value,
			sceneOptions: [
				'flow', 'sesh', 'woah', 'morning'
			],
			controls: 'manual',
			baseControlsOptions: ['manual'],
			onStateOptions: [{ text: 'On', value: true }, { text: 'Off', value: false }]
		};
	},
	computed: {
		controlOptions() {
			const controlOptions = [...this.baseControlsOptions];
			if (this.value.type === 'nanoleaf') controlOptions.push('scene');
			return controlOptions;
		}
	},
	methods: {
		clearDefaultInputs() {
			this.inputVal.state.brightness = null;
			this.inputVal.state.colour = null;
		},
		clearSceneInputs() {
			this.inputVal.state.scene = null;
		},
		setDefaultControls() {
			if (this.inputVal.state.scene) {
				this.controls = 'scene';
			} else {
				this.controls = 'manual';
			}
		}
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
		},
		controls() {
			if (this.controls === 'manual') {
				return this.clearSceneInputs();
			}
			if (this.controls === 'scene') {
				return this.clearDefaultInputs();
			}
			throw new Error('unknown control type');
		}
	},
	created() {
		this.setDefaultControls();
	}
};
</script>

<style lang="scss">

.Light {

	@media all and (min-width: 768px) {
		min-height: 20rem;
	}

	&__inner {
		display: flex;
		flex-direction: column;
		align-items: center;

		@media all and (min-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	&__label {
		width: 100%;

		@media all and (min-width: 768px) {
			width: auto;
		}
	}

	&__items {
		height: 100%;
		display: flex;
		flex-direction: column;

		@media all and (min-width: 768px) {
			min-width: 26rem;
			flex-direction: row;
			justify-content: space-around;
		}
	}

	&__item {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		@media all and (min-width: 768px) {
			padding: 0 1rem;
		}
	}

	&__controls {
		display: flex;
		flex-direction: row;
	}

}

</style>
