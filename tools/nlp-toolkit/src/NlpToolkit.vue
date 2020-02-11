<template>
	<div class="NlpToolkit">

		<tool-markdown :markdown="`
This is a tool to to perform NLP operations using the library [compromise](https://www.npmjs.com/package/compromise).
Enter text below: 		`"/>

		<tool-code
			ref="NlpToolkit__input"
			class="NlpToolkit__item"
			v-model="inputText"
			:autoSize="true"
			:options="codeOptions"/>

		<p v-text="resultText"/>

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
	}

};

export default {
	data() {
		return {
			inputText: '',
			resultText: '',
			selectedOperation: 'toPastTense',
			nlpOptions: [
				{ value: 'toPastTense', text: 'To past tense' },
				{ value: 'toFutureTense', text: 'To future tense' }
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
		onComputeClick() {
			const nlpFunction = nlpMethods[this.selectedOperation];
			this.resultText = nlpFunction(this.inputText);
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
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;

	&__item {
		margin-bottom: 1rem;
	}

	&__button {
		margin-left: 1rem;
	}
}
</style>
