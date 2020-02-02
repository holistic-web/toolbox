<template>
	<div class="JsonBrowser">

		<p>
			A tool to aid with JSON analysis:
		</p>

		<tool-error
			v-if="errorMessage"
			class="JsonBrowser__errorMessage"
			:message="errorMessage"/>

		<tool-code
			v-if="!browsing"
			ref="JsonBrowser__input"
			v-model="jsonString"
			:options="codeOptions"
			:autoSize="true"/>

		<vue-json-pretty
			v-if="browsing"
			class="JsonBrowser__browser"
			:data="jsonObject"
			v-model="selectedNodes"
			:showLength="true"
			:showDoubleQuotes="false"
			:highlightMouseoverNode="true"
			selectableType="single"
			:selectOnClickNode="true"
			:highlightSelectedNode="true"/>

		<tool-taskbar v-if="jsonString">
			<tool-button
				class="JsonBrowser__browseButton"
				v-if="!browsing"
				size="lg"
				v-text="'Browse'"
				@click.native="enterBrowseMode"/>
			<tool-button
				size="sm"
				variant="secondary"
				v-text="'Reset'"
				@click.native="reset"/>
		</tool-taskbar>

	</div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';

export default {
	components: {
		VueJsonPretty
	},
	data() {
		return {
			jsonString: '',
			jsonObject: {},
			selectedNodes: [],
			errorMessage: null,
			browsing: false,
			codeOptions: {
				lineNumbers: true,
				mode: 'JSON'
			}
		};
	},
	methods: {
		async reset() {
			this.errorMessage = null;
			this.jsonObject = null;
			this.browsing = false;
			await this.$nextTick();
			this.$refs.JsonBrowser__input.focus();
		},
		enterBrowseMode() {
			try {
				this.errorMessage = false;
				this.jsonObject = JSON.parse(this.jsonString);
				this.browsing = true;
			} catch (err) {
				this.errorMessage = err.message;
			}
		}
	},
	mounted() {
		this.$refs.JsonBrowser__input.focus();
	}
};
</script>

<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.JsonBrowser {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__browser {
		// vue-json-pretty customisation

		&.vjs-tree.is-mouseover, .vjs-tree.is-mouseover {
			background-color: lighten($warning, 50);
		}

		&.vjs-tree.is-highlight-selected, .vjs-tree.is-highlight-selected {
			background-color: $warning;
		}
	}

	&__browseButton {
		margin-left: 1rem;
	}
}
</style>
