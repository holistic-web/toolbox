<template>
	<div class="NlpToolkit">

		<div class="ToolWrapper">

			<tool-markdown :markdown="`
This is a tool to to perform NLP operations using the library [compromise](https://www.npmjs.com/package/compromise). \
Enter text below:
			`"/>

			<tool-error
				v-if="errorMessage"
				ref="error"
				class="NlpToolkit__errorMessage"
				:message="errorMessage"/>

			<section class="NlpToolkit__content">

				<tool-code
					ref="NlpToolkit__input"
					class="NlpToolkit__content__half"
					v-model="inputText"
					:autoSize="true"
					:options="codeOptions"/>

				<p v-text="resultText"/>
			</section>

		</div>

		<tool-taskbar v-if="!!inputText">

			<tool-button
				class="NlpToolkit__button"
				size="lg"
				v-text="'Compute'"
				@click.native="onComputeClick"/>

			<b-form-group
				class="NlpToolkit__button"
				label="NLP Operation"
				label-for="NlpTookit__operation"
				label-size="sm">
				<b-form-select
					id="NlpTookit__operation"
					v-model="selectedOperation"
					:options="nlpOptions"/>
			</b-form-group>

			<tool-button
				size="sm"
				class="NlpToolkit__button"
				variant="secondary"
				v-text="'Reset'"
				@click.native="reset"/>

		</tool-taskbar>

	</div>
</template>
<script>
import { ToolButton, ToolCode, ToolError, ToolMarkdown, ToolTaskbar } from '@holistic-web/toolbox-layout';
import nlp from 'compromise';

const nlpMethods = {

	toPastTense: text => {
		const doc = nlp(text);
		doc.verbs().toPastTense();
		return doc.text();
	},

	toFutureTense: text => {
		const doc = nlp(text);
		doc.verbs().toFutureTense();
		return doc.text();
	},

	negate: text => {
		const doc = nlp(text);
		doc.verbs().toNegative();
		return doc.text();
	}
};

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
			errorMessage: null,
			inputText: '',
			resultText: '',
			selectedOperation: 'toPastTense',
			nlpOptions: [
				{ value: 'toPastTense', text: 'To past tense' },
				{ value: 'toFutureTense', text: 'To future tense' },
				{ value: 'negate', text: 'Negate' }
			]
		};
	},
	computed: {
		codeOptions() {
			return {
				readOnly: !!this.resultText
			};
		}
	},
	methods: {
		reset() {
			this.inputText = '';
			this.resultText = '';
		},
		async onComputeClick() {
			this.errorMessage = null;
			try {
				const nlpFunction = nlpMethods[this.selectedOperation];
				this.resultText = nlpFunction(this.inputText);
			} catch (err) {
				this.errorMessage = err;
				await this.$nextTick();
				this.$scrollTo(this.$refs.error);
			}
		}
	},
	mounted() {
		this.$refs.NlpToolkit__input.focus();
	}
};
</script>


<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.NlpToolkit {

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__content {
		display: flex;
		flex-direction: row;
		margin: 0 -1rem;


		&__half {
			margin: 0 1rem;
			width: 50%;
		}

	}

	&__button {
		margin-left: 1rem;
	}
}
</style>
