<template>
	<section class="AccountSettings">

		<h3>Settings</h3>

		<b-form-group
			label="IFTTT Key"
			label-for="AccountSettings__iftttKey"
			horizontal>
			<b-form-input
				id="AccountSettings__iftttKey"
				v-model="inputVal.IFTTT.key"/>
		</b-form-group>

		<h4>Lights</h4>

		<b-form-group
			label="Using Local API"
			label-for="AccountSettings__useLocalAPI"
			horizontal>
			<b-form-checkbox
				id="AccountSettings__useLocalAPI"
				v-model="inputVal.usingLocalAPI"/>
		</b-form-group>

		<b-form-group
			v-if="inputVal.usingLocalAPI"
			label="Local API URL"
			label-for="AccountSettings__lightsApiUrl"
			horizontal>
			<b-form-input
				id="AccountSettings__lightsApiUrl"
				v-model="inputVal.localUrl"/>
		</b-form-group>


		<template v-if="inputVal.lights.hue">
			<h5>Hue:</h5>

			<b-form-group
				label="Use IFTTT"
				label-for="AccountSettings__hueUseIfttt"
				horizontal>
				<b-form-checkbox
					id="AccountSettings__hueUseIfttt"
					v-model="inputVal.lights.hue.useIFTTT"/>
			</b-form-group>

			<template v-if="!inputVal.lights.hue.useIFTTT">

				<b-form-group
					label="Bridge IP Address"
					label-for="AccountSettings__hueIpAddress"
					horizontal>
					<b-form-input
						id="AccountSettings__hueIpAddress"
						v-model="inputVal.lights.hue.ipAddress"/>
				</b-form-group>

				<b-form-group
					label="Bridge Username"
					label-for="AccountSettings__hueUsername"
					horizontal>
					<b-form-input
						id="AccountSettings__hueUsername"
						v-model="inputVal.lights.hue.username"/>
				</b-form-group>

			</template>
		</template>

	</section>
</template>

<script>
export default {
	props: {
		value: {
			required: true
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

.AccountSettings {
	width: 100%;
	display: flex;
	flex-direction: column;
}
</style>
