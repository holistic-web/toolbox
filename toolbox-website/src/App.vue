<template>
	<div id="app">
		<tool-layout name="Home">
			<website/>
		</tool-layout>
	</div>
</template>

<script>
import Website from './Website.vue';

export default {
	components: {
		Website
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
