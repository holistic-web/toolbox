<template>
	<div class="NumberConverter">

		<div class="ToolWrapper">

			<tool-markdown :markdown="`
Converting is done with \
[Number.prototype.toString(Base)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString). \
Enter a number to convert:
			`"/>

			<tool-error
				v-if="errorMessage"
				ref="error"
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

		</div>

		<tool-taskbar v-if="inputNumber">

			<template v-if="!converted">
				<tool-button
					size="lg"
					class="NumberConverter__button"
					v-text="'Convert'"
					id="Action"
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
					id="Action"
					class="NumberConverter__button"
					v-text="'Copy Output'"
					v-clipboard="result"
					size="lg"/>
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
import { ToolButton, ToolError, ToolMarkdown, ToolTaskbar } from '@holistic-web/toolbox-layout';

const fromBaseToBase = (number, fromBase, toBase) => {
	let result = null;
	if (toBase === 8) {
		const oct = '0o';
		result = oct.concat(parseInt(number, fromBase).toString(toBase));
	} else if (toBase === 16) {
		const hex = '0x';
		result = hex.concat(parseInt(number, fromBase).toString(toBase).toUpperCase());
	} else {
		result = parseInt(number, fromBase).toString(toBase);
	}
	return result;
};

export default {
	components: {
		ToolButton,
		ToolError,
		ToolMarkdown,
		ToolTaskbar
	},
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
		async convert() {
			this.errorMessage = null;
			try {
				this.result = fromBaseToBase(this.inputNumber, this.fromBase, this.toBase);
				this.converted = true;
			} catch (err) {
				this.errorMessage = err;
				await this.$nextTick();
				this.$scrollTo(this.$refs.error);
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
