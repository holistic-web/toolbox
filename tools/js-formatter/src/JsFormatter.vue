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


		<tool-taskbar>
			It can be a good idea to add buttons to the taskbar...
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
			minifiedOrig: 'p{font:normal 14px/20px helvetica,arial,sans-serif;color:#333;}.woot{font-weight:bold}',
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

	},
	methods: {

	},
}
</script>
