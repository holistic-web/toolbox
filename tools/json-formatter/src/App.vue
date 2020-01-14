<template>
	<div id="app">
		<analytics />
		<tool-layout name="JSON Formatter">
			<json-formatter/>
		</tool-layout>
	</div>
</template>

<script>
// import { ToolLayout } from 'toolbox-layout';
import JsonFormatter from './components/JsonFormatter'
import Analytics from './components/Analytics'

export default {
	components: {
		JsonFormatter,
		Analytics
	}
}
</script>