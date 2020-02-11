<template>
	<div class="JsonDiff">

		<tool-markdown :markdown="`
This is tool compares two JSON objects using the library [json-diff](https://www.npmjs.com/package/json-diff).
Enter two JSON files below:
		`"/>

		<tool-error
			v-if="errorMessage"
			class="JsonDiff__errorMessage"
			:message="errorMessage"/>

		<code
			v-if="result"
			class="JsonDiff__result"
			v-html="result"/>

		<section class="JsonDiff__inputs">

			<div class="JsonDiff__inputs__half">
				<tool-code
					v-model="json1"
					:options="codeOptions"
					:autoSize="true"/>
			</div>

			<div class="JsonDiff__inputs__half">
				<tool-code
					v-model="json2"
					:options="codeOptions"
					:autoSize="true"/>
			</div>

		</section>

		<tool-taskbar v-if="showTaskbar">

			<tool-button
				size="lg"
				class="JsonDiff__button"
				v-text="'Diff JSONs'"
				@click.native="doComparison"/>

			<tool-button
				class="JsonDiff__button"
				size="sm"
				variant="secondary"
				v-text="'Reset'"
				@click.native="reset"/>

		</tool-taskbar>

	</div>
</template>

<script>
export default {
	data() {
		return {
			json1: '',
			json2: '',
			result: null,
			errorMessage: null
		};
	},
	computed: {
		codeOptions() {
			return {
				readOnly: !!this.result,
				lineNumbers: true,
				mode: 'JSON'
			};
		},
		showTaskbar() {
			return this.json1 && this.json2;
		}
	},
	methods: {
		reset() {
			this.json1 = '';
			this.json2 = '';
			this.result = null;
		},
		doComparison() {

			this.result = 'wut';
		}
	}
};
</script>

<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.JsonDiff {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__result {
		width: auto;
		align-self: center;
		margin-bottom: 1rem;
	}

	&__inputs {
		display: flex;
		flex-direction: row;
		margin: 0 -1rem;

		&__half {
			width: 50%;
			margin: 0 1rem;
		}
	}

	&__button {
		margin-left: 1rem;
	}
}
</style>
