<template>
	<div id="app">
		<tool-layout name="Image Comparer">
			<image-comparer/>
		</tool-layout>
	</div>
</template>

<script>
import ImageComparer from './ImageComparer.vue';

export default {
	components: {
		ImageComparer
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
