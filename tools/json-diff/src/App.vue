<template>
	<div id="app">
		<tool-layout name="JSON Diff">
			<json-diff/>
		</tool-layout>
	</div>
</template>

<script>
import { ToolLayout } from '@holistic-web/toolbox-layout';
import JsonDiff from './JsonDiff.vue';

export default {
	components: {
		ToolLayout,
		JsonDiff
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
