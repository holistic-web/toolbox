<template>
	<div class="ToolLayout">

		<tool-header :name="name"/>

		<section class="ToolLayout__tool">
			<slot/>
		</section>

	</div>
</template>
<script>
import ToolHeader from './ToolHeader.vue';

export default {
	props: {
		name: { type: String, required: true }
	},
	components: {
		ToolHeader
	}
};
</script>

<style lang="scss">
@import '../styles/theme';

.ToolLayout {
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;

	&__tool {
		background-color: $background;
		flex-grow: 1;
		overflow: auto;

		> * {
			height: 100%;
		}

		.ToolTaskbar {
			margin-top: auto;
		}
	}
}
</style>
