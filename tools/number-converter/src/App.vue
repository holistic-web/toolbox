<template>
	<div id="app">
		<tool-layout name="New Tool">
			<new-tool/>
		</tool-layout>
	</div>
</template>

<script>
import NewTool from './NewTool.vue';

export default {
	components: {
		NewTool
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
