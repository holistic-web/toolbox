<template>
	<div class="JsFormatter">

		<tool-markdown :markdown="`
Documentation for your new tool and any relevant links go here...
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
export default {
	data() {
		return {
			formatted: false,
			errorMessage: null,
			jsString: '',
			whitespace: '\t',
			whitespaceOptions: [
				{ text: 'Tabs', value: '\t' },
				{ text: 'Spaces', value: 4 },
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
			let tab = 4;
			let space = '';
			let code;

			try {
				tab = (/^\d+$/.test(tab) ? parseInt(tab, 10) : 4);
				code = this.jsString
					.split('{').join(' {\n    ')
					.split(';').join(';\n    ')
					.split(',')
					.join(', ')
					.split('    }')
					.join('}\n')
					.replace(/\}(.+)/g, '}\n$1')
					.replace(/\n {4}([^:]+):/g, '\n    $1: ')
					.replace(/([A-z0-9)])}/g, '$1;\n}');
				if (tab !== 4) {
					for (;tab !== 0; tab--) { space += ' '; }
					code = code.replace(/\n {4}/g, `\n${space}`);
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
