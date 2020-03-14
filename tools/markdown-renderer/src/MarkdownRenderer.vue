<template>
	<div class="MarkdownRenderer">

		<div class="ToolWrapper">

			<tool-markdown :markdown="`
	Markdown is rendered with [marked](https://www.npmjs.com/package/marked). Enter your text below:
			`"/>

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

		</div>

		<tool-taskbar>
			<b-form-checkbox
				id="Action"
				class="MarkdownRenderer__button"
				name="MarkdownRenderer__autoCopy"
				v-model="autoCopy"
				switch>
				Auto Copy
			</b-form-checkbox>
			<tool-button
				v-if="!autoCopy"
				id="Action"
				class="MarkdownRenderer__button"
				size="sm"
				v-text="'Copy to Clipboard'"
				@click.native="onCopyClick"/>
			<tool-button
					size="sm"
					class="MarkdownRenderer__button"
					variant="secondary"
					v-text="'Reset'"
					@click.native="reset"/>
		</tool-taskbar>

	</div>
</template>

<script>
import { ToolButton, ToolCode, ToolMarkdown, ToolTaskbar } from '@holistic-web/toolbox-layout';

export default {
	components: {
		ToolButton,
		ToolCode,
		ToolMarkdown,
		ToolTaskbar
	},
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
		},
		reset() {
			this.markdown = '';
			this.autoCopy = false;
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

.MarkdownRenderer {

	&__button {
		margin-left: 1rem;
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

}
</style>
