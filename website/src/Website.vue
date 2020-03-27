<template>
	<section class="Website">

		<section class="Website__content">

			<p>
				The Holistic Toolbox strives to provide a useful set of tools for developers, computer scientists and curious folk.
				With a growing array of diverse tools, your productivity can be increased in many fields. Built by a team of passionate
				and creative developers around the world who love helping others solve interesting problems.
			</p>

			<b-form-input
				class="Website__filter"
				v-model="filterText"
				size="sm"
				placeholder="Filter" />

			<div class="Website__tools">

				<tool-preview
					class="Website__tools__tool"
					v-for="tool in filteredTools"
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
			filterText: '',
			tools: [
				{
					name: 'Image Comparer',
					description: 'Finds the differences between images',
					link: 'https://image-comparer.holistic-toolbox.com',
					image: require('../assets/tools/image-comparer.png'),
					tags: []
				},
				{
					name: 'JSON Browser',
					description: 'Helps analyse JSON data',
					link: 'https://json-browser.holistic-toolbox.com',
					image: require('../assets/tools/json-browser.png'),
					tags: ['JSON']
				},
				{
					name: 'JSON Diff',
					description: 'Identifies difference between JSON objects',
					link: 'https://json-diff.holistic-toolbox.com',
					image: require('../assets/tools/json-diff.png'),
					tags: ['JSON']
				},
				{
					name: 'JSON Formatter',
					description: 'A simple, client side JSON formatter.',
					link: 'https://json-formatter.holistic-toolbox.com',
					image: require('../assets/tools/json-formatter.png'),
					tags: ['JSON']
				},
				{
					name: 'Markdown Renderer',
					description: 'A browser based markdown renderer.',
					link: 'https://markdown-renderer.holistic-toolbox.com',
					image: require('../assets/tools/markdown-renderer.png'),
					tags: ['TEST']
				},
				{
					name: 'NLP Toolkit',
					description: 'This is a tool to to perform NLP operations using the library compromise.',
					link: 'https://nlp-toolkit.holistic-toolbox.com',
					image: require('../assets/tools/number-converter.png')
				},
				{
					name: 'Number Converter',
					description: 'A simple number converter from decimal to binary, octal and hexadecimal.',
					link: 'https://number-converter.holistic-toolbox.com',
					image: require('../assets/tools/number-converter.png')
				},
				{
					name: 'JavaScript Formatter',
					description: 'A simple, client side JavaScript formatter.',
					link: 'https://js-formatter.holistic-toolbox.com',
					image: require('../assets/tools/js-formatter.png')
				}
			]
		};
	},
	computed: {
		filteredTools() {
			return this.tools.filter(tool => {
				const matchName = tool.name.toLowerCase().match(this.filterText.toLowerCase());
				let matchTags = false;
				if (tool.tags) matchTags = tool.tags.includes(this.filterText.toLowerCase());
				return matchName || matchTags;
			});
		}
	}
};
</script>

<style lang="scss">
@import '@holistic-web/el-layout/src/styles/theme';

.Website {

	&__content {
		padding: $el-padding-desktop;

		// all direct descendents
		> * {
			margin-bottom: 2rem;
		}
	}

	&__filter {
		max-width: 300px;
	}

	&__tools {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 0 -1rem;

		&__tool {
			width: calc(25% - 2rem);
			margin: 1rem;
		}
	}
}
</style>
