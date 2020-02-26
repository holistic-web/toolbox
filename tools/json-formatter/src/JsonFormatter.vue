<template>
	<div class="JsonFormatter">

		<tool-markdown :markdown="`
Formatting is done with
[JSON.stringify(...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
Enter your [JSON](https://www.json.org) below to get started:
		`"/>

		<tool-error
			v-if="errorMessage"
			class="JsonFormatter__errorMessage"
			:message="errorMessage"/>

		<tool-code
			ref="JsonFormatter__input"
			v-model="jsonString"
			:options="codeOptions"
			:autoSize="true"/>

		<tool-taskbar v-if="jsonString">

			<template v-if="!formatted">
				<tool-button
					class="JsonFormatter__button"
					v-text="'Format'"
					size="lg"
					@click.native="formatJSON"/>
				<b-form-radio-group
					class="JsonFormatter__button"
					v-model="whitespace"
					:options="whitespaceOptions"
					buttons
					button-variant="outline-secondary"
					size="sm"/>
			</template>

			<template v-else>
				<tool-button
					size="lg"
					class="JsonFormatter__button"
					v-text="'Copy Output'"
					v-clipboard="jsonString"/>
				<tool-button
					id="Action"
					class="JsonFormatter__button"
					v-text="'Browse JSON'"
					:href="`https://json-formatter.holistic-toolbox.com?JSON=${jsonString}`"
					target="_blank"
					size="lg"/>
				<tool-button
					size="sm"
					class="JsonFormatter__button"
					variant="secondary"
					v-text="'Reset'"
					@click.native="reset"/>
			</template>

		</tool-taskbar>

	</div>
</template>

<script>
import { ToolButton, ToolCode, ToolError, ToolMarkdown } from '@holistic-web/toolbox-layout';

export default {
	components: {
		ToolButton,
		ToolCode,
		ToolError,
		ToolMarkdown
	},
	data() {
		return {
			formatted: false,
			errorMessage: null,
			jsonString: '',
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
				mode: 'JSON'
			};
		}
	},
	methods: {
		formatJSON() {
			try {
				this.errorMessage = false;
				const jsonData = JSON.parse(this.jsonString);
				this.jsonString = JSON.stringify(
					jsonData,
					null,
					this.whitespace
				);
				this.formatted = true;
			} catch (err) {
				this.errorMessage = err.message;
			}
		},
		reset() {
			this.formatted = false;
			this.errorMessage = null;
			this.jsonString = '';
			this.$refs.JsonFormatter__input.focus();
		}
	},
	mounted() {
		this.$refs.JsonFormatter__input.focus();
	}
};
</script>

<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.JsonFormatter {
	display: flex;
	flex-direction: column;
	padding: $tool-padding;
	margin-bottom: 104px; // to account for the taskbar

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__button {
		margin-left: 1rem;
		height: fit-content;
	}

}
</style>
