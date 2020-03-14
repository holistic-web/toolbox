<template>
	<div class="JsonFormatter">

		<div class="ToolWrapper">

			<tool-markdown :markdown="`
	Formatting is done with
	[JSON.stringify(...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
	Enter your [JSON](https://www.json.org) below to get started:
			`"/>

			<tool-error
				v-if="errorMessage"
				ref="error"
				class="JsonFormatter__errorMessage"
				:message="errorMessage"/>

			<tool-code
				ref="JsonFormatter__input"
				v-model="jsonString"
				:options="codeOptions"
				:autoSize="true"/>

		</div>

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
import { ToolButton, ToolCode, ToolError, ToolMarkdown, ToolTaskbar } from '@holistic-web/toolbox-layout';

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
		async formatJSON() {
			this.errorMessage = null;
			try {
				const jsonData = JSON.parse(this.jsonString);
				this.jsonString = JSON.stringify(
					jsonData,
					null,
					this.whitespace
				);
				this.formatted = true;
			} catch (err) {
				this.errorMessage = err;
				await this.$nextTick();
				this.$scrollTo(this.$refs.error);
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
.JsonFormatter {

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__button {
		margin-left: 1rem;
		height: fit-content;
	}

}
</style>
