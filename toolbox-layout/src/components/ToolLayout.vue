<template>
	<div class="ToolLayout">

		<tool-header :name="name"/>

		<section class="ToolLayout__tool">
			<slot/>
		</section>

	</div>
</template>
<script>
import ToolHeader from './ToolHeader';

export default {
	props: {
		name: { type: String, required: true }
	},
	components: {
		ToolHeader
	}
}
</script>

<style lang="scss">
@import '../styles/theme';

.ToolLayout {
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;

	&__tool {
		padding: 1rem;
		background-color: $highlight;
		height: 100%;
		overflow: auto;
	}
}
</style>