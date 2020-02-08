<template>
	<section class="Website">

		<div class="Website__image"/>

		<section class="Website__content">

			<p>
				Welcome to Holistic Toolbox. We provide a growing list of tools to make working easier.
			</p>

			<div class="Website__tools">

				<tool-preview
					class="Website__tools__tool"
					v-for="tool in tools"
					:key="tool.name"
					:tool="tool"/>

			</div>

		</section>

	</section>
</template>

<script>
import ToolPreview from './components/ToolPreview.vue';

export default {
	components: {
		ToolPreview
	},
	data() {
		return {
			tools: [
				{
					name: 'Image Comparer',
					description: 'Finds the differences between images',
					link: 'http://image-comparer.holistic-toolbox.com',
					image: require('../assets/tools/image-comparer.png')
				},
				{
					name: 'JSON Browser',
					description: 'Helps analyse JSON data',
					link: 'http://json-browser.holistic-toolbox.com',
					image: require('../assets/tools/json-browser.png')
				},
				{
					name: 'JSON Formatter',
					description: 'A simple, client side JSON formatter.',
					link: 'http://json-formatter.holistic-toolbox.com',
					image: require('../assets/tools/json-formatter.png')
				},
				{
					name: 'Markdown Renderer',
					description: 'A browser based markdown renderer.',
					link: 'http://markdown-renderer.holistic-toolbox.com',
					image: require('../assets/tools/markdown-renderer.png')
				},
				{
					name: 'Number Converter',
					description: 'A simple number converter from decimal to binary, octal and hexadecimal.',
					link: 'http://number-converter.holistic-toolbox.com',
					image: require('../assets/tools/number-converter.png')
				}
			]
		};
	}
};
</script>

<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.Website {

	&__image {
		width: 100%;
		height: calc(100vh - 60.67px); // to account for the height of the header
		height: 380px;
		background-image: url('../assets/tool-sketch.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0 -170px;
	}

	&__content {
		padding: $tool-padding;
	}

	&__tools {
		display: flex;
		flex-direction: row;
		margin: 0 -1rem;

		&__tool {
			width: 300px;
			margin: 1rem;
		}
	}
}
</style>
