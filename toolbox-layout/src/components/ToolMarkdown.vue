<template>
	<section class="ToolMarkdown">

	</section>
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
	watch: {
		markdown: {
			immediate: true,
			handler: () => {
				this.renderedMarkdown = marked(this.markdown, { sanitize: true });
			}
		}
	}
}
</script>

<style lang="scss">
.ToolMarkdown {

}
</style>