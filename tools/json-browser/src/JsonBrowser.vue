<template>
	<div class="JsonBrowser">

		<div class="ElWrapper">

			<el-markdown :markdown="`
A tool to assist with JSON analysis, rendered with [vue-json-pretty](https://www.npmjs.com/package/vue-json-pretty):
			`"/>

			<el-error
				v-if="errorMessage"
				ref="error"
				class="JsonBrowser__errorMessage"
				:message="errorMessage"/>

			<el-code-input
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

		</div>

		<el-taskbar v-if="jsonString">
			<el-button
				id="Action"
				class="JsonBrowser__taskbarButton"
				v-if="!browsing"
				size="lg"
				v-text="'Browse'"
				@click.native="enterBrowseMode"/>
			<el-button
				class="JsonBrowser__taskbarButton"
				v-if="browsing"
				size="lg"
				v-text="'Get shareable link'"
				v-clipboard="`https://json-browser.holistic-toolbox.com?JSON=${this.jsonString}`"/>
			<el-button
				class="JsonBrowser__taskbarButton"
				size="sm"
				variant="secondary"
				v-text="'Reset'"
				@click.native="reset"/>
		</el-taskbar>

	</div>
</template>

<script>
import { ElButton, ElCodeInput, ElError, ElMarkdown, ElTaskbar } from '@holistic-web/toolbox-layout';
import VueJsonPretty from 'vue-json-pretty';

export default {
	components: {
		ElButton,
		ElCodeInput,
		ElError,
		ElMarkdown,
		ElTaskbar,
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
			this.jsonObject = null;
			this.jsonString = '';
			this.selectedNodes = [];
			this.errorMessage = null;
			this.browsing = false;
			await this.$nextTick();
			this.$refs.JsonBrowser__input.focus();
		},
		async enterBrowseMode() {
			this.errorMessage = null;
			try {
				this.jsonObject = JSON.parse(this.jsonString);
				this.browsing = true;
			} catch (err) {
				this.errorMessage = err;
				await this.$nextTick();
				this.$scrollTo(this.$refs.error);
			}
		}
	},
	mounted() {
		if (this.$refs.JsonBrowser__input) this.$refs.JsonBrowser__input.focus();
	},
	watch: {
		$route: {
			immediate: true,
			async handler() {
				if (this.$route.query.JSON) {
					this.jsonString = this.$route.query.JSON;
					this.$router.replace({ query: undefined });
					this.enterBrowseMode();
				}
			}
		}
	}
};
</script>

<style lang="scss">
@import '@holistic-web/el-layout/src/styles/theme';

.JsonBrowser {

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

	&__taskbarButton {
		margin-left: 1rem;
	}
}
</style>
