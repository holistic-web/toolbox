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
import ToolPreview from './components/ToolPreview';

export default {
	components: {
		ToolPreview
	},
	data() {
		return {
			tools: [
				{
					name: 'JSON Formatter',
					description: 'A simple, client side JSON formatter.',
					link: 'http://json-formatter.holistic-toolbox.com',
					image: require('../assets/tools/json-formatter.png')
				}
			]
		};
	}
};
</script>

<style lang="scss">
@import 'toolbox-layout/src/styles/theme';

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

		&__tool {
			width: 300px;
		}
	}
}
</style>
