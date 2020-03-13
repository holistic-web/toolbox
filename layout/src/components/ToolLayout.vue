<template>
	<div class="ToolLayout">

		<tool-header class="ToolLayout__header" :name="name"/>

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

$headerHeight: 60px;

.ToolLayout {
	background-color: $background;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;

	&__header {
		flex-grow: 0;
	}

	&__tool {
		flex-grow: 1;
		overflow: auto;

		> * {
			height: 100%;
			overflow: auto;
		}
	}
}
</style>
