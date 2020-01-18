<template>
	<div class="JsonFormatter">

		<p>
			JSON Formatter is a tool to provide quick and easy JSON formatting. Enjoy!
		</p>

		<tool-error
			v-if="errorMessage"
			class="JsonFormatter__errorMessage"
			:message="errorMessage"/>

		<codemirror
			class="JsonFormatter__input"
			v-model="jsonString"
			:options="codemirrorOptions"/>

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
					size="sm"
					class="JsonFormatter__button"
					variant="outline-secondary"
					v-text="'Reset'"
					@click.native="reset"/>
			</template>

		</tool-taskbar>

	</div>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';

export default {
	components: {
		codemirror
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
		}
	},
	computed: {
		codemirrorOptions() {
			return {
				readOnly: !!this.formatted,
				lineNumbers: true,
				mode: 'JSON',
				viewportMargin: Infinity
			}
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
		}
	}
}
</script>

<style lang="scss">
@import 'toolbox-layout/src/styles/theme';

.JsonFormatter {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__input {
		margin-bottom: 150px; // to allow for the taskbar

		.CodeMirror {
			height: auto;
		}
	}

	&__button {
		margin-left: 1rem;
		height: fit-content;
	}

}
</style>