<template>
	<div id="app">
		<tool-layout name="JSON Browser">
			<json-browser/>
		</tool-layout>
	</div>
</template>

<script>
import JsonBrowser from './JsonBrowser.vue';

export default {
	components: {
		JsonBrowser
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
