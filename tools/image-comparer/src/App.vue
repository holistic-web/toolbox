<template>
	<div id="app">
		<tool-layout name="Image Comparator">
			<image-comparator/>
		</tool-layout>
	</div>
</template>

<script>
import ImageComparator from './ImageComparator.vue';

export default {
	components: {
		ImageComparator
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
