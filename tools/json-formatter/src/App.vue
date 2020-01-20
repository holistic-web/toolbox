<template>
	<div id="app">
		<tool-layout name="JSON Formatter">
			<json-formatter/>
		</tool-layout>
	</div>
</template>

<script>
import JsonFormatter from './JsonFormatter.vue';

export default {
	components: {
		JsonFormatter
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
