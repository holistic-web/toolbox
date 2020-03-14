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
			this.renderedMarkdown = marked(this.markdown, {
				// https://marked.js.org/#/USING_ADVANCED.md#options
				breaks: true,
				gfm: true
			});
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
