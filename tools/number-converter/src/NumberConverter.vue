<template>
	<div class="NumberConverter">

		<tool-markdown :markdown="`
Converting is done with
[Number.prototype.toString(Base)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

Enter a number to convert:
		`"/>

		<tool-error
			:disabled="!!converted"
			v-if="errorMessage"
			class="NumberConverter__errorMessage"
			:message="errorMessage"/>

		<b-form-input
			v-model="inputNumber"
			size="lg"
			placeholder="E.g. 100" />

		<b-form-input
			disabled
			v-if="converted"
			v-model="result"
			size="lg"
			class="NumberConverter__result" />

		<tool-taskbar v-if="inputNumber">

			<template v-if="!converted">
				<tool-button
					size="lg"
					class="NumberConverter__button"
					v-text="'Convert'"
					@click.native="convert"/>
				<b-form-group label="To:">
					<b-form-radio-group
						class="NumberConverter__button"
						v-model="toBase"
						:options="baseOptions"
						buttons
						button-variant="outline-secondary"
						size="sm"/>
				</b-form-group>
				<b-form-group label="From:">
					<b-form-radio-group
						class="NumberConverter__button"
						label="From:"
						v-model="fromBase"
						:options="baseOptions"
						buttons
						button-variant="outline-secondary"
						size="sm"/>
				</b-form-group>
			</template>

			<template v-else>
				<tool-button
					size="lg"
					class="NumberConverter__button"
					v-text="'Copy Output'"
					v-clipboard="result"/>
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
			inputNumber: null,
			result: null,
			fromBase: 0,
			toBase: 0,
			baseOptions: [
				{ text: 'Decimal', value: 10 },
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
				switch (this.toBase) {
					case 10:
						this.result = this.convertToDec(this.inputNumber, this.fromBase);
						this.converted = true;
						break;
					case 2:
						this.result = this.convertToBin(this.inputNumber, this.fromBase);
						this.converted = true;
						break;
					case 8:
						this.result = this.convertToOct(this.inputNumber, this.fromBase);
						this.converted = true;
						break;
					case 16:
						this.result = this.convertToHex(this.inputNumber, this.fromBase);
						this.converted = true;
						break;
					default:
						throw new Error('Base not supported');
				}
			} catch (err) {
				this.errorMessage = err.message;
			}
		},
		convertToDec(number, fromBase) {
			switch (fromBase) {
				case 10:
					return number;
				case 2:
					return parseInt(number, 2).toString(10);
				case 8:
					return parseInt(number, 8).toString(10);
				case 16:
					return parseInt(number, 16).toString(10);
				default:
					throw new Error('Base not supported');
			}
		},
		convertToBin(number, fromBase) {
			switch (fromBase) {
				case 10:
					return parseInt(number, 10).toString(2);
				case 2:
					return number;
				case 8:
					return parseInt(number, 8).toString(2);
				case 16:
					return parseInt(number, 16).toString(2);
				default:
					throw new Error('Base not supported');
			}
		},
		convertToOct(number, fromBase) {
			switch (fromBase) {
				case 10:
					return parseInt(number, 10).toString(8);
				case 2:
					return parseInt(number, 2).toString(8);
				case 8:
					return number;
				case 16:
					return parseInt(number, 16).toString(8);
				default:
					throw new Error('Base not supported');
			}
		},
		convertToHex(number, fromBase) {
			const hex = '0x';
			switch (fromBase) {
				case 10:
					return hex.concat((parseInt(number, 10)).toString(16).toUpperCase());
				case 2:
					return hex.concat((parseInt(number, 2)).toString(16).toUpperCase());
				case 8:
					return hex.concat((parseInt(number, 8)).toString(16).toUpperCase());
				case 16:
					return hex.concat(number.toUpperCase());
				default:
					throw new Error('Base not supported');
			}
		},
		reset() {
			this.converted = false;
			this.errorMessage = null;
			this.inputNumber = null;
			this.base = 0;
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

	&__result {
		margin-top: 1rem;
	}
}
</style>
