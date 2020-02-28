<template>
	<div id="app">
		<tool-layout name="Image Comparer">
			<image-comparer/>
		</tool-layout>
	</div>
</template>

<script>
import { ToolLayout } from '@holistic-web/toolbox-layout';
import ImageComparer from './ImageComparer.vue';

export default {
	components: {
		ToolLayout,
		ImageComparer
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
