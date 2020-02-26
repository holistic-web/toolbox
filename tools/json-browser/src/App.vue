<template>
	<div id="app">
		<tool-layout name="JSON Browser">
			<router-view/>
		</tool-layout>
	</div>
</template>

<script>
import { ToolLayout } from '@holistic-web/toolbox-layout';

export default {
	components: {
		ToolLayout
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
