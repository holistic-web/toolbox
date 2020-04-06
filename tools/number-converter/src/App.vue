<template>
	<div id="app">
		<tool-layout subtitle="Number Converter">
			<number-converter/>
		</tool-layout>
	</div>
</template>

<script>
import { ToolLayout } from '@holistic-web/toolbox-layout';
import NumberConverter from './NumberConverter.vue';

export default {
	components: {
		ToolLayout,
		NumberConverter
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
