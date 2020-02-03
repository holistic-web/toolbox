<template>
	<div class="NumberConverter">

		<tool-markdown :markdown="`
Enter a number to convert:
		`"/>

		<tool-error
			v-if="errorMessage"
			class="NumberConverter__errorMessage"
			:message="errorMessage"/>

		<b-form-input v-model="num" type="number" placeholder="E.g. 100"></b-form-input>

		<tool-taskbar v-if="num">

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
					v-clipboard="num"/>
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
			num: null,
			base: 10,
			baseOptions: [
				{ text: 'Binary', value: 2 },
				{ text: 'Octal', value: 8 },
				{ text: 'Hexadecimal', value: 16 }
			]
		}
	},
	computed: {
		codeOptions() {
			return {
				readOnly: !!this.formatted,
				lineNumbers: false,
			};
		}
	},
	methods: {
		convert() {
			try {
				this.errorMessage = false;
				const int = parseInt(this.num)
				const hex = '0x'
				const ans = int.toString(this.base)
				this.num = ans
				if(this.base == 16){
					this.num = hex.concat(this.num.toUpperCase())
				}
				this.converted = true
			} catch (err) {
				this.errorMessage = err.message;
			}
		},
		reset() {
			this.converted = false;
			this.errorMessage = null;
			this.num = '';
			this.base = 10;
		}
	}
}
</script>


<style lang="scss">
@import 'toolbox-layout/src/styles/theme';

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