<template>
	<div id="app">
		<tool-layout name="{{tool-name-human}}">
			<{{tool-name}}/>
		</tool-layout>
	</div>
</template>

<script>
import ToolLayout from '@holistic-web/toolbox-layout';
import {{tool-name-uppercase}} from './{{tool-name-uppercase}}.vue';

export default {
	components: {
		ToolLayout,
		{{tool-name-uppercase}}
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}
</style>
