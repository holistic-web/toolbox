<template>

	<v-tabs
		v-model="activeTab"
		light>
		<v-tab-item key="preview">
			<v-card flat>
				<div
					class="MarkdownEditor__block"
					v-html="compiledMarkdown" />
			</v-card>
		</v-tab-item>
	</v-tabs>

</template>

<script>
import marked from 'marked';
export default {
	props: {
		value: {
			type: String,
			default: '# Something Worthwhile...'
		}
	},
	data() {
		return {
			markDown: '#  Welcome to the best JSON Formatter on the web \n We format JSON \n ## This is markdown.',
			activeTab: 1
		};
	},
	computed: {
		compiledMarkdown() {
			return marked(this.markDown, { sanitize: true });
		}
	}
};
</script>


<style lang="scss">
.MarkdownEditor {
	margin: 0;
	height: 100%;
	font-family: 'Helvetica Neue', Arial, sans-serif;
	color: #333;
	background: white;
	position: relative;
	&__block {
		width: 100%;
		padding: 8px;
		height: 100%;
		height: 400px;
		cursor: text;
	}
}
</style>