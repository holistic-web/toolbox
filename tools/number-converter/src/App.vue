<template>
	<div id="app">
		<tool-layout name="New Tool">
			<number-converter />
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
