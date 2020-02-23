<template>
	<div id="app">
		<tool-layout name="NLP Toolkit">
			<nlp-toolkit/>
		</tool-layout>
	</div>
</template>

<script>
import NlpToolkit from './NlpToolkit.vue';

export default {
	components: {
		NlpToolkit
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
