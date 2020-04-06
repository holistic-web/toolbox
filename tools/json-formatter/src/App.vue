<template>
	<div id="app">
		<tool-layout subtitle="JSON Formatter">
			<json-formatter/>
		</tool-layout>
	</div>
</template>

<script>
import { ToolLayout } from '@holistic-web/toolbox-layout';
import JsonFormatter from './JsonFormatter.vue';

export default {
	components: {
		ToolLayout,
		JsonFormatter
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
