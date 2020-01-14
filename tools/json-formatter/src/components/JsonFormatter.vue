<template>
	<div class="JsonFormatter">

		<b-form-group
			v-if="!alreadyFormatted"
			label="Add your JSON here:"
			label-for="JsonFormatter-input">

			<b-form-textarea
				class="JsonFormatter__input"
				id="input-json"
				rows="20"
				v-model="jsonString"/>

			<b-jumbotron
				v-if="errorMessage"
				:lead="errorMessage"
				bg-variant="danger"
				text-variant="light"/>

			<b-form-group>
				<b-form-radio-group
					class="JsonFormatter__options"
					v-model="whitespace"
					:options="whitespaceOptions"
					buttons
					button-variant="outline-primary"
					size="md"/>
			</b-form-group>

			<app-button
				class="JsonFormatter__button"
				v-text="'Format'"
				@click.native="formatJSON"/>

		</b-form-group>

		<div v-else>

			<div class="mb-3">
				<app-button
					class="JsonFormatter__button ml-3"
					v-clipboard="formattedJSON">
					Copy Ouput
					<img class="JsonFormatter__icon" src="../assets/icon-copy.svg"/>
				</app-button>

				<app-button
					class="JsonFormatter__button"
					v-text="'Format again'"
					@click.native="reset"/>
			</div>

			<b-form-textarea
				class="JsonFormatter__input"
				v-model="formattedJSON"
				rows="20"
				disabled/>
		</div>

	</div>
</template>

<script>
// import { AppButton } from 'toolbox-layout';

export default {
	components: {
		// AppButton
	},
	data() {
		return {
			alreadyFormatted: false,
			errorMessage: null,
			parsedJSON: null,
			jsonString: null,
			formattedJSON: null,
			whitespace: '\t',
			whitespaceOptions: [
				{ text: 'Tabs', value: '\t' },
				{ text: 'Spaces', value: 4 },
				{ text: 'None', value: 0 }
			]
		}
	},
	methods: {
		formatJSON() {
			try {
				this.errorMessage = false;
				this.parsedJSON = JSON.parse(this.jsonString);
				this.formattedJSON = JSON.stringify(
					this.parsedJSON,
					null,
					this.whitespace
				);
				this.alreadyFormatted = true;
			} catch (err) {
				this.errorMessage = err;
				throw err;
			}
		},
		reset() {
			this.alreadyFormatted = false;
			this.errorMessage = null;
			this.parsedJSON = null;
			this.jsonString = null;
			this.formattedJSON = null;
		}
	}
}
</script>

<style lang="scss">

.JsonFormatter {
	display: flex;
	flex-direction: column;

	&__options {
		float: right;
	}

	&__input{
		margin-bottom: 1rem;
	}

	&__button {
		float: right;
	}

	&__icon {
		width: 1rem;
		height: 1rem;
	}
}
</style>