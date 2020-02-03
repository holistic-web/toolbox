<template>
	<div id="app">
		<tool-layout name="Number Converter">
			<number-converter/>
		</tool-layout>
	</div>
</template>

<script>
import NumberConverter from './NumberConverter.vue';

export default {
	components: {
		NumberConverter
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
