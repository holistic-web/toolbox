<template>
	<div id="app">
		<tool-layout name="XML Formatter">
			<json-formatter/>
		</tool-layout>
	</div>
</template>

<script>
// import { ToolLayout } from 'toolbox-layout';
import XMLFormatter from './components/XMLFormatter'

export default {
	components: {
		XMLFormatter
	}
}
</script>