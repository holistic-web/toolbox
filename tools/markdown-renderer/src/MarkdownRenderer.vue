<template>
	<div class="MarkdownRenderer">

		<tool-markdown :markdown="`
Enter your markdown below:
		`"/>

		<section class="MarkdownRenderer__content">
			<tool-code v-model="markdown"/>

			<tool-markdown :markdown="markdown"/>

		</section>

	</div>
</template>

<script>
export default {
	data() {
		return {
			markdown: ''
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
}
</style>
