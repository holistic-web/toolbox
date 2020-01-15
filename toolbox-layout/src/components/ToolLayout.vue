<template>
	<div class="ToolLayout">

		<app-header :name="name"/>

		<section class="ToolLayout__tool">
			<slot/>
		</section>

	</div>
</template>
<script>
import AppHeader from './AppHeader';

export default {
	props: {
		name: { type: String, required: true }
	},
	components: {
		AppHeader
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
		overflow: auto;
	}
}
</style>