<template>
	<div id="app">
		<tool-layout name="JSON Formatter">
			<json-formatter/>
		</tool-layout>
	</div>
</template>

<script>
import ToolLayout from './components/ToolLayout';
import JsonFormatter from './components/JsonFormatter'

export default {
	components: {
		ToolLayout,
		JsonFormatter
	}
}
</script>