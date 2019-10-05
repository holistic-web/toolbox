<template>
	<section class="LightsActionBar">

		<b-container class="LightsActionBar__inner">
			<b-btn
				variant="primary"
				v-text="'Update Lights'"
				@click="onUpdateLightsClick"/>
		</b-container>

	</section>
</template>

<script>
export default {
	data() {
		return {
			page: {
				isLoading: false
			}
		};
	},
	methods: {
		onUpdateLightsClick() {
			this.$emit('update');
		}
	}
};
</script>

<style lang="scss">
.LightsActionBar {
	width: 100%;
	padding: 1rem 0;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #fff;
	border-top: 1px solid #707070;
	z-index: 1;

	&__inner {
		display: flex;
		justify-content: flex-end;
	}
}
</style>
