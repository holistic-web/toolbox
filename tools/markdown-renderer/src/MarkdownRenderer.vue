<template>
	<div class="MarkdownRenderer">

		<section class="MarkdownRenderer__header">
			<p>Enter your markdown below:</p>

			<div class="MarkdownRenderer__header__buttons">
				<tool-button
					v-if="!autoCopy"
					class="MarkdownRenderer__header__button"
					v-text="'Copy to Clipboard'"
					@click.native="onCopyClick"/>

				<b-form-checkbox
					name="MarkdownRenderer__autoCopy"
					v-model="autoCopy"
					switch>
					Auto Copy to Clipboard
				</b-form-checkbox>
			</div>
		</section>

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
</template>

<script>
export default {
	data() {
		return {
			markdown: '',
			codeOptions: {
				mode: 'Markdown',
				autoFocus: true
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
	height: 100%;
	padding: $tool-padding;

	&__header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		&__buttons {
			display: flex;
			flex-direction: row;
		}

		&__button {
			margin-right: 1rem;
		}
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
