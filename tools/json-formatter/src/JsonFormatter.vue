<template>
	<div class="JsonFormatter">

		<div class="ElWrapper">

			<el-markdown :markdown="`
Formatting is done with [JSON.stringify(...)]\
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). \
Enter your [JSON](https://www.json.org) below to get started:
			`"/>

			<el-error
				v-if="errorMessage"
				ref="error"
				class="JsonFormatter__errorMessage"
				:message="errorMessage"/>

			<el-code-input
				ref="JsonFormatter__input"
				v-model="jsonString"
				:options="codeOptions"
				:autoSize="true"/>

		</div>

		<el-taskbar v-if="jsonString">

			<template v-if="!formatted">
				<el-button
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
				<el-button
					size="lg"
					class="JsonFormatter__button"
					v-text="'Copy Output'"
					v-clipboard="jsonString"/>
				<el-button
					id="Action"
					class="JsonFormatter__button"
					v-text="'Browse JSON'"
					:href="`https://json-formatter.holistic-toolbox.com?JSON=${jsonString}`"
					target="_blank"
					size="lg"/>
				<el-button
					size="sm"
					class="JsonFormatter__button"
					variant="secondary"
					v-text="'Reset'"
					@click.native="reset"/>
			</template>
		</el-taskbar>

	</div>
</template>

<script>
import { ElButton, ElCodeInput, ElError, ElMarkdown, ElTaskbar } from '@holistic-web/toolbox-layout';

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
