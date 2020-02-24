<template>
	<div class="JsFormatter">

		<tool-markdown :markdown="`
Formatting is done with [UglifyJS](https://www.npmjs.com/package/uglify-js)
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
				<!-- Possible future tool/upgrade existing JSON browser to include all file types? -->
				<!-- <tool-button
					size="lg"
					class="JsFormatter__button"
					v-text="'Browse JavaScript'"
					:href="`https://js-formatter.holistic-toolbox.com?JS=${jsString}`"
					target="_blank"/> -->
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


<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.JsFormatter {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;
}
</style>

<script>
const uglifyJS = require('uglify-js');

export default {
	data() {
		return {
			formatted: false,
			errorMessage: null,
			jsString: '',
			whitespace: '1',
			whitespaceOptions: [
				{ text: 'Tabs', value: 1 },
				{ text: 'Spaces', value: 2 },
				{ text: 'None', value: 0 }
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
			// TODO: need to test
			// let tab = 4;
			// const space = '';
			let code;

			try {
				code = this.jsString;
				const options = {
					output: {
						beautify: false
					}
				};
				// code = UglifyJS.minify(this.jsString);

				if (this.whitespace === 2) {
					code = uglifyJS.minify(code, options);
				} else if (this.whitespace === 1) {
					code = uglifyJS.minify(code, options);
				} else {
					// Do minify stuff
					options.output.beautify = true;
					code = uglifyJS.minify(code, options);
				}
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
