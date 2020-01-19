<template>
	<section class="ToolMarkdown" v-html="renderedMarkdown"/>
</template>

<script>
import marked from 'marked';

export default {
	props: {
		markdown: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			renderedMarkdown: ''
		}
	},
	methods: {
		renderMarkdown() {
			this.renderedMarkdown = marked(this.markdown, { sanitize: true });
		}
	},
	watch: {
		markdown: 'renderMarkdown'
	}
}
</script>