<template>
	<div class="JsFormatter">

		<tool-markdown :markdown="`
Formatting is done with [UglifyJS](https://www.npmjs.com/package/uglifyjs-browser)
use the options to select your prefered spacing or Select none to minify
Enter your JavaScript below:
		`"/>

		<tool-error
			v-if="errorMessage"
			class="JsFormatter__errorMessage"
			:message="errorMessage"/>

		<tool-code
			ref="JsFormatter__input"
			v-model="jsString"
			:options="codeOptions"
			:autoSize="true"/>

		<tool-taskbar v-if="jsString">

			<template v-if="!formatted">
				<tool-button
					id="Action"
					class="JsFormatter__button"
					v-text="'Format'"
					size="lg"
					@click.native="formatJS"/>
				<b-form-radio-group
					class="JsFormatter__button"
					v-model="whitespace"
					:options="whitespaceOptions"
					buttons
					button-variant="outline-secondary"
					size="sm"/>
			</template>

			<template v-else>
				<tool-button
					size="lg"
					class="JsFormatter__button"
					v-text="'Copy Output'"
					v-clipboard="jsString"/>
				<tool-button
					size="sm"
					class="JsFormatter__button"
					variant="secondary"
					v-text="'Reset'"
					@click.native="reset"/>
			</template>
		</tool-taskbar>

	</div>
</template>

<script>
import { ToolButton, ToolCode, ToolError, ToolMarkdown, ToolTaskbar } from '@holistic-web/toolbox-layout';

const uglify = require('uglifyjs-browser');

export default {
	components: {
		ToolButton,
		ToolCode,
		ToolError,
		ToolMarkdown,
		ToolTaskbar
	},
	data() {
		return {
			formatted: false,
			errorMessage: null,
			jsString: '',
			whitespace: 'spaces',
			whitespaceOptions: [
				'spaces',
				'none'
			]
		};
	},
	computed: {
		codeOptions() {
			return {
				readOnly: !!this.formatted,
				lineNumbers: true,
				mode: 'JS'
			};
		}
	},
	methods: {
		formatJS() {
			const options = {
				output: {
					beautify: this.whitespace === 'spaces',
					comments: true,
					quote_style: 1
				}
			};
			try {
				const { code, error } = uglify.minify(this.jsString, options);
				if (error) throw new Error(error);
				this.jsString = code;
				this.formatted = true;
			} catch (err) {
				this.errorMessage = err.message;
			}
		},
		reset() {
			this.formatted = false;
			this.errorMessage = null;
			this.jsString = '';
			this.$refs.JsFormatter__input.focus();
		}
	}
};
</script>


<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.JsFormatter {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding-desktop;

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__button {
		margin-left: 1rem;
		height: fit-content;
	}
}
</style>
