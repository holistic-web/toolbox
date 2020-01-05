<template>
	<section class="LightsPreview">
		<div
			v-for="light in lights"
			:key="light.name">
			<b
				class="LightsPreview__light__statistic"
				v-text="`${light.name}:`"/>

			<span v-if="!light.state.on" v-text="'off'"/>
			<template v-else>
				<span
					class="LightsPreview__light__statistic"
					v-if="light.state.colour"
					v-text="`colour: ${light.state.colour};`"/>
				<span
					class="LightsPreview__light__statistic"
					v-if="light.state.brightness"
					v-text="`brightness: ${light.state.brightness};`"/>
				<span
					class="LightsPreview__light__statistic"
					v-if="light.state.scene"
					v-text="`scene: ${light.state.scene};`"/>
			</template>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		lights: {
			required: true,
			type: Array
		}
	}
};
</script>


<style lang="scss">

.LightsPreview {

	&__light {

		&__statistic {
			margin-right: 1rem;
		}
	}

}
</style>
