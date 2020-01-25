<template>
	<div class="MarkdownRenderer">

		<section class="MarkdownRenderer__header">
			<p>Enter your markdown below:</p>
			<tool-button
				v-text="'Copy to Clipboard'"
				v-clipboard="markdown"/>
		</section>

		<section class="MarkdownRenderer__content">
			<tool-code
				class="MarkdownRenderer__editor MarkdownRenderer__content__item MarkdownRenderer__content__item--left"
				v-model="markdown"
				:options="codeOptions"/>

			<tool-markdown
				class="MarkdownRenderer__content__item MarkdownRenderer__content__item--right"
				:markdown="markdown"/>
		</section>

	</div>
</template>

<script>
export default {
	data() {
		return {
			markdown: '',
			codeOptions: {
				mode: 'Markdown',
				viewportMargin: Infinity
			}
		};
	}
};
</script>

<style lang="scss">
@import 'toolbox-layout/src/styles/theme';

.MarkdownRenderer {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;

	&__header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	&__content {
		display: flex;
		flex-direction: row;

		&__item {
			width: 50%;

			&--left {
				margin-right: 1rem;
			}

			&--right {
				margin-left: 1rem;
			}
		}
	}

	&__editor {
		.CodeMirror { // to allow the editor to grow with entered text
			height: auto;
		}
	}
}
</style>
