<template>
	<div class="NumberConverter">

		<tool-markdown :markdown="`
Enter a number to convert:
		`"/>

		<tool-error
			:disabled="!!converted"
			v-if="errorMessage"
			class="NumberConverter__errorMessage"
			:message="errorMessage"/>

		<b-form-input
			v-model="inputNumber"
			type="number"
			size="lg"
			placeholder="E.g. 100" />

		<b-form-input
			disabled
			v-if="converted"
			v-model="result"
			size="lg" />

		<tool-taskbar v-if="inputNumber">

			<template v-if="!converted">
				<tool-button
					size="lg"
					class="NumberConverter__button"
					v-text="'Convert'"
					@click.native="convert"/>
				<b-form-radio-group
					class="NumberConverter__button"
					v-model="base"
					:options="baseOptions"
					buttons
					button-variant="outline-secondary"
					size="sm"/>
			</template>

			<template v-else>
				<tool-button
					size="lg"
					class="NumberConverter__button"
					v-text="'Copy Output'"
					v-clipboard="inputNumber"/>
				<tool-button
					size="sm"
					class="NumberConverter__button"
					variant="secondary"
					v-text="'Reset'"
					@click.native="reset"/>
			</template>
		</tool-taskbar>

	</div>
</template>

<script>
export default {
	data() {
		return {
			converted: false,
			errorMessage: null,
			inputNumber: 0,
			result: null,
			base: 0,
			baseOptions: [
				{ text: 'Binary', value: 2 },
				{ text: 'Octal', value: 8 },
				{ text: 'Hexadecimal', value: 16 }
			]
		};
	},
	computed: {
		codeOptions() {
			return {
				readOnly: !!this.formatted,
				lineNumbers: false
			};
		}
	},
	methods: {
		convert() {
			try {
				switch (this.base) {
					case 2:
						console.log('input:', this.inputNumber);
						this.result = this.convertToBin(this.inputNumber);
						console.log('result:', this.result);
						this.converted = true;
						break;
					case 8:
						this.result = this.convertToOct(this.inputNumber);
						this.converted = true;
						break;
					case 16:
						this.result = this.convertToHex(this.inputNumber);
						this.converted = true;
						break;
					default:
						throw new Error('Base not supported');
				}
			} catch (err) {
				this.errorMessage = err.message;
			}
		},
		convertToBin(number) {
			const result = number.toString(2);
			return result;
		},
		convertToOct(number) {
			const result = number.toString(8);
			return result;
		},
		convertToHex(number) {
			const hex = '0x';
			const answer = (number).toString(16);
			const hexAnswer = hex.concat(answer.toUpperCase());
			return hexAnswer;
		},
		reset() {
			this.converted = false;
			this.errorMessage = null;
			this.inputNumber = 0;
			this.base = null;
		}
	}
};
</script>


<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.NumberConverter {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__button {
		margin-left: 1rem;
		height: fit-content;
	}
}
</style>
