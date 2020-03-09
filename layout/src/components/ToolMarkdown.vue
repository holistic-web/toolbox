<template>
	<section v-html="renderedMarkdown"/>
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
		};
	},
	methods: {
		renderMarkdown() {
			this.renderedMarkdown = marked(this.markdown, { sanitize: true });
		}
	},
	mounted() {
		this.renderMarkdown();
	},
	watch: {
		markdown: 'renderMarkdown'
	}

};
</script>
