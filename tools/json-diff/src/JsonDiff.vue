<template>
	<div class="JsonDiff">

		<tool-markdown :markdown="`
This is tool compares two JSON objects using the library [jsondiffpatch](https://www.npmjs.com/package/jsondiffpatch).
Enter two JSON files below:
		`"/>

		<tool-error
			v-if="errorMessage"
			class="JsonDiff__errorMessage"
			:message="errorMessage"/>

		<section
				class="JsonDiff__result"
				v-html="diff"/>

		<section class="JsonDiff__container">

			<div class="JsonDiff__container__half">
				<tool-code
					v-model="json1"
					:options="inputCodeOptions"
					:autoSize="true"/>
			</div>

			<div class="JsonDiff__container__half">
				<tool-code
					v-model="json2"
					:options="inputCodeOptions"
					:autoSize="true"/>
			</div>

		</section>

		<tool-taskbar v-if="showTaskbar">

			<tool-button
				v-if="!diff"
				id="Action"
				class="JsonDiff__button"
				v-text="'Diff JSONs'"
				size="lg"
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
// disable eslint to allow some weird imports required by jsondiffpatch
/* eslint-disable */
import 'jsondiffpatch/dist/formatters-styles/html.css';
const jsondiffpatch = require('jsondiffpatch');
const diffInstance = jsondiffpatch.create();
/* eslint-enable */

const defaultCodeOptions = {
	lineNumbers: true,
	mode: 'JSON'
};

export default {
	data() {
		return {
			json1: '',
			json2: '',
			diff: null,
			errorMessage: null
		};
	},
	computed: {
		inputCodeOptions() {
			return { ...defaultCodeOptions, readOnly: !!this.diff };
		},
		showTaskbar() {
			return this.json1 && this.json2;
		}
	},
	methods: {
		reset() {
			this.json1 = '';
			this.json2 = '';
			this.diff = null;
			this.errorMessage = null;
		},
		doComparison() {
			this.errorMessage = null;
			try {
				const jsonObject1 = JSON.parse(this.json1);
				const jsonObject2 = JSON.parse(this.json2);
				const delta = diffInstance.diff(jsonObject1, jsonObject2);
				this.diff = jsondiffpatch.formatters.html.format(delta, jsonObject1);
				if (!this.diff) throw new Error('the objects match');
			} catch (err) {
				this.errorMessage = err.message;
			}
		}
	}
};
</script>

<style lang="scss">
@import '@holistic-web/layout/src/styles/theme';

.JsonDiff {
	display: flex;
	flex-direction: column;
	padding: $tool-padding;
	margin-bottom: calc(114px + 1rem); // to account for the taskbar

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__result {
		width: 100%;
		margin-bottom: 1rem;
		background-color: $info;
		border-radius: $tool-border-radius;

		* {
			color: $dark;
		}
	}

	&__container {
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
