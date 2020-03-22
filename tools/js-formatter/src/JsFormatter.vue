<template>
	<div class="JsFormatter">

		<div class="ElWrapper">

			<el-markdown :markdown="`
Formatting is done with [UglifyJS](https://www.npmjs.com/package/uglifyjs-browser) use the \
options to select your prefered spacing or Select none to minify Enter your JavaScript below:
			`"/>

			<el-error
				v-if="errorMessage"
				ref="error"
				class="JsFormatter__errorMessage"
				:message="errorMessage"/>

			<el-code-input
				ref="JsFormatter__input"
				v-model="jsString"
				:options="codeOptions"
				:autoSize="true"/>

		</div>

		<el-taskbar v-if="jsString">

			<template v-if="!formatted">
				<el-button
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
				<el-button
					size="lg"
					class="JsFormatter__button"
					v-text="'Copy Output'"
					v-clipboard="jsString"/>
				<el-button
					size="sm"
					class="JsFormatter__button"
					variant="secondary"
					v-text="'Reset'"
					@click.native="reset"/>
			</template>
		</el-taskbar>

	</div>
</template>

<script>
import { ElButton, ElCodeInput, ElError, ElMarkdown, ElTaskbar } from '@holistic-web/toolbox-layout';

const uglify = require('uglifyjs-browser');

export default {
	components: {
		ElButton,
		ElCodeInput,
		ElError,
		ElMarkdown,
		ElTaskbar
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
		async formatJS() {
			this.errorMessage = null;
			try {
				const options = {
					output: {
						beautify: this.whitespace === 'spaces',
						comments: true,
						quote_style: 1
					}
				};
				const { code, error } = uglify.minify(this.jsString, options);
				if (error) throw new Error(error);
				this.jsString = code;
				this.formatted = true;
			} catch (err) {
				this.errorMessage = err.message;
				await this.$nextTick();
				this.$scrollTo(this.$refs.error);
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
.JsFormatter {

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__button {
		margin-left: 1rem;
		height: fit-content;
	}
}
</style>
