<template>
	<div class="XMLFormatter">

		<b-form-group
			v-if="!alreadyFormatted"
			label="Add your XML here:"
			label-for="XMLFormatter-input">

			<b-form-textarea
				class="XMLFormatter__input"
				id="input-XML"
				rows="20"
				v-model="XMLString"/>

			<b-jumbotron
				v-if="errorMessage"
				:lead="errorMessage"
				bg-variant="danger"
				text-variant="light"/>

			<b-form-group>
				<b-form-radio-group
					class="XMLFormatter__options"
					v-model="whitespace"
					:options="whitespaceOptions"
					buttons
					button-variant="outline-dark"
					size="md"/>
			</b-form-group>

			<app-button
				class="XMLFormatter__button"
				v-text="'Format'"
				@click.native="formatXML"/>

		</b-form-group>

		<div v-else>

			<div class="mb-3">
				<app-button
					class="XMLFormatter__button ml-3"
					v-clipboard="formattedXML">
					Copy Ouput
					<img class="XMLFormatter__icon" src="../assets/icon-copy.svg"/>
				</app-button>

				<app-button
					class="XMLFormatter__button"
					v-text="'Format again'"
					@click.native="reset"/>
			</div>

			<b-form-textarea
				class="XMLFormatter__input"
				v-model="formattedXML"
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
			parsedXML: null,
			XMLString: null,
			formattedXML: null,
			whitespace: '\t',
			whitespaceOptions: [
				{ text: 'Tabs', value: '\t' },
				{ text: 'Spaces', value: 4 },
				{ text: 'None', value: 0 }
			]
		}
	},
	methods: {
		formatXML() {
			try {
				this.errorMessage = false;
				this.parsedXML = JSON.parse(this.XMLString);
				this.formattedXML = JSON.stringify(
					this.parsedXML,
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
			this.parsedXML = null;
			this.XMLString = null;
			this.formattedXML = null;
		}
	}
}
</script>

<style lang="scss">

.XMLFormatter {
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