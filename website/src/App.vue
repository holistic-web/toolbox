<template>
	<div id="app">
		<tool-layout subtitle="Home">
			<website/>
		</tool-layout>
	</div>
</template>

<script>
import { ToolLayout } from '@holistic-web/toolbox-layout';
import Website from './Website.vue';

export default {
	components: {
		ToolLayout,
		Website
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
