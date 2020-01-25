<template>
	<div id="app">
		<tool-layout name="Markdown Renderer">
			<markdown-renderer/>
		</tool-layout>
	</div>
</template>

<script>
import MarkdownRenderer from './MarkdownRenderer.vue';

export default {
	components: {
		MarkdownRenderer
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
