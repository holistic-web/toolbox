<template>
	<div id="app">
		<tool-layout name="JSON Diff">
			<json-diff/>
		</tool-layout>
	</div>
</template>

<script>
import JsonDiff from './JsonDiff.vue';

export default {
	components: {
		JsonDiff
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
