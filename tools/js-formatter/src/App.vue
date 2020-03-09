<template>
	<div id="app">
		<tool-layout name="JS Formatter">
			<js-formatter/>
		</tool-layout>
	</div>
</template>

<script>
import { ToolLayout } from '@holistic-web/toolbox-layout';
import JsFormatter from './JsFormatter.vue';

export default {
	components: {
		ToolLayout,
		JsFormatter
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
