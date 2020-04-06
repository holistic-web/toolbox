<template>
	<div class="JsonDiff">

		<div class="ElWrapper">

			<el-markdown :markdown="`
This is tool compares two JSON objects using the library [jsondiffpatch](https://www.npmjs.com/package/jsondiffpatch). \
Enter two JSON files below:
			`"/>

			<el-error
				v-if="errorMessage"
				ref="error"
				class="JsonDiff__errorMessage"
				:message="errorMessage"/>

			<section
					class="JsonDiff__result"
					v-html="diff"/>

			<section class="JsonDiff__container">

				<div class="JsonDiff__container__half">
					<el-code-input
						v-model="json1"
						:options="inputCodeOptions"
						:autoSize="true"/>
				</div>

				<div class="JsonDiff__container__half">
					<el-code-input
						v-model="json2"
						:options="inputCodeOptions"
						:autoSize="true"/>
				</div>

			</section>

		</div>

		<el-taskbar v-if="showTaskbar">

			<el-button
				v-if="!diff"
				id="Action"
				class="JsonDiff__button"
				v-text="'Diff JSONs'"
				size="lg"
				@click.native="doComparison"/>

			<el-button
				class="JsonDiff__button"
				size="sm"
				variant="secondary"
				v-text="'Reset'"
				@click.native="reset"/>

		</el-taskbar>

	</div>
</template>

<script>
import { ElButton, ElCodeInput, ElError, ElMarkdown, ElTaskbar } from '@holistic-web/toolbox-layout';
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
	components: {
		ElButton,
		ElCodeInput,
		ElError,
		ElMarkdown,
		ElTaskbar
	},
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
		async doComparison() {
			this.errorMessage = null;
			try {
				const jsonObject1 = JSON.parse(this.json1);
				const jsonObject2 = JSON.parse(this.json2);
				const delta = diffInstance.diff(jsonObject1, jsonObject2);
				this.diff = jsondiffpatch.formatters.html.format(delta, jsonObject1);
				if (!this.diff) throw new Error('the objects match');
			} catch (err) {
				this.errorMessage = err;
				await this.$nextTick();
				this.$scrollTo(this.$refs.error);
			}
		}
	}
};
</script>

<style lang="scss">
@import '@holistic-web/el-layout/src/styles/theme';

.JsonDiff {

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__result {
		width: 100%;
		margin-bottom: 1rem;
		background-color: $info;
		border-radius: $el-border-radius;

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
