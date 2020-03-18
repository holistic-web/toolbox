<template>
	<div id="app">
		<tool-layout subtitle="Markdown Renderer">
			<markdown-renderer/>
		</tool-layout>
	</div>
</template>

<script>
import { ToolLayout } from '@holistic-web/toolbox-layout';
import MarkdownRenderer from './MarkdownRenderer.vue';

export default {
	components: {
		ToolLayout,
		MarkdownRenderer
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
