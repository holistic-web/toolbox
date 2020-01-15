<template>
	<div id="app">
		<tool-layout name="JSON Formatter">
			<json-formatter/>
		</tool-layout>
	</div>
</template>

<script>
// import { ToolLayout } from 'toolbox-layout';
import JsonFormatter from './components/JsonFormatter'

export default {
	components: {
		JsonFormatter
	}
}
</script>