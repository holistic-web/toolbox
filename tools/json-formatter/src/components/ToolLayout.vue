<template>
	<div class="ToolLayout">

		<app-header :name="name"/>

		<slot/>

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
}
</style>