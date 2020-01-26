<template>
	<div class="MarkdownRenderer">

		<p>Enter your markdown below:</p>

		<section class="MarkdownRenderer__content">
			<tool-code
				ref="MarkdownRenderer__input"
				class="MarkdownRenderer__content__item MarkdownRenderer__content__item--left"
				v-model="markdown"
				:options="codeOptions"
				:autoSize="true"/>

			<tool-markdown
				class="MarkdownRenderer__content__item MarkdownRenderer__content__item--right"
				:markdown="markdown"/>
		</section>

		<tool-taskbar>
			<b-form-checkbox
				name="MarkdownRenderer__autoCopy"
				v-model="autoCopy"
				switch>
				Auto Copy
			</b-form-checkbox>
			<tool-button
				v-visible="!autoCopy"
				class="MarkdownRenderer__copyButton"
				size="sm"
				v-text="'Copy to Clipboard'"
				@click.native="onCopyClick"/>
		</tool-taskbar>

	</div>
</template>

<script>
export default {
	data() {
		return {
			markdown: '',
			codeOptions: {
				mode: 'Markdown'
			},
			autoCopy: false
		};
	},
	methods: {
		onCopyClick() {
			this.$clipboard(this.markdown);
		}
	},
	watch: {
		markdown() {
			this.$clipboard(this.markdown);
			this.$refs.MarkdownRenderer__input.focus();
		}
	},
	mounted() {
		this.$refs.MarkdownRenderer__input.focus();
	}
};
</script>

<style lang="scss">
@import 'toolbox-layout/src/styles/theme';

.MarkdownRenderer {
	display: flex;
	flex-direction: column;
	padding: $tool-padding;

	&__copyButton {
		margin-right: 1rem;
	}

	&__content {
		display: flex;
		flex-direction: row;
		margin-bottom: 97px; // to account for the taskbar

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

}
</style>
