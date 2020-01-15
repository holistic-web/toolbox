<template>
	<div class="JsonFormatter">

		<p>
			JSON Formatter is a tool to provide quick and easy JSON formatting. Enjoy!
		</p>

		<div class="JsonFormatter__toolbar">

			<template v-if="!formatted">

				<div class="JsonFormatter__toolbar--left">
					<p>Add your JSON data here</p>
				</div>

				<div class="JsonFormatter__toolbar--right">
					<b-form-group>
						<b-form-radio-group
							class="JsonFormatter__toolbar__button"
							v-model="whitespace"
							:options="whitespaceOptions"
							buttons
							button-variant="outline-primary"
							size="sm"/>
					</b-form-group>

					<app-button
						class="JsonFormatter__toolbar__button"
						v-text="'Format'"
						size="sm"
						@click.native="formatJSON"/>
				</div>
			</template>

			<template v-else>
				<div class="JsonFormatter__toolbar--left"/>
				<div class="JsonFormatter__toolbar--right">
					<app-button
						size="sm"
						class="JsonFormatter__toolbar__button"
						v-text="'Copy Output'"
						v-clipboard="jsonString"/>
					<app-button
						size="sm"
						class="JsonFormatter__toolbar__button"
						v-text="'Reset'"
						@click.native="reset"/>
				</div>
			</template>

		</div>

		<b-jumbotron
			v-if="errorMessage"
			class="JsonFormatter__errorMessage"
			:lead="errorMessage"
			bg-variant="danger"
			text-variant="light"/>

		<codemirror
			class="JsonFormatter__input"
			v-model="jsonString"
			:options="codemirrorOptions"/>


	</div>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';

export default {
	components: {
		codemirror
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
		}
	},
	computed: {
		codemirrorOptions() {
			return {
				readOnly: !!this.formatted,
				lineNumbers: true,
				mode: 'JSON',
				viewportMargin: Infinity
			}
		}
	},
	methods: {
		formatJSON() {
			try {
				this.errorMessage = false;
				const jsonData = JSON.parse(this.jsonString);
				this.jsonString = JSON.stringify(
					jsonData,
					null,
					this.whitespace
				);
				this.formatted = true;
			} catch (err) {
				this.errorMessage = err;
				throw err;
			}
		},
		reset() {
			this.formatted = false;
			this.errorMessage = null;
			this.jsonString = '';
		}
	}
}
</script>

<style lang="scss">

.JsonFormatter {
	display: flex;
	flex-direction: column;
	height: 100%;

	&__toolbar {
		margin-bottom: 1rem;
		display: flex;
		flex-direction: row;

		&--left {
			display: flex;
			flex-direction: row;
			flex-grow: 1;
		}

		&--right {
			display: flex;
			flex-direction: row;
		}

		&__button {
			justify-self: flex-end;
			margin-left: 1rem;
		}
	}

	&__errorMessage {
		margin-bottom: 1rem;
	}

	&__input {
		.CodeMirror {
			height: auto;
		}
	}

}
</style>