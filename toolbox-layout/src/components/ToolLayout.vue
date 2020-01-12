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
.ToolLayout {
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;

	&__tool {
		padding: 1rem;
	}
}
</style>