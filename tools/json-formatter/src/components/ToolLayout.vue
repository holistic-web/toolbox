<template>
	<div class="ToolLayout">

		<app-header/>

		<slot/>

	</div>
</template>
<script>
import AppHeader from './AppHeader';

export default {
	components: {
		AppHeader
	}
}
</script>

<style lang="scss">
.ToolLayout {
	display: flex;
	flex-direction: column;
}
</style>