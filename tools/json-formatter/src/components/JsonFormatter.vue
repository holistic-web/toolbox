<template>
	<div class="JsonFormatter">

		<b-form-group
			label="Add your JSON here:"
			label-for="JsonFormatter-input">

			<b-form-textarea
				class="JsonFormatter__input"
				id="input-json"
				rows="12"
				max-rows="100"/>

			<b-button
				class="JsonFormatter__button"
				variant="outline-dark"
				v-text="'Format'"
				pill
				@click="submit"/>

		</b-form-group>
	</div>
</template>

<script>
export default {
	methods: {
		submit() {
			alert("Form Submitted")
			/**
			 * #TODO:
			 *
			 * Use JSON.parse to attempt to parse their input and then hide the text input
			 * Use JSON.stringify to re format their input and show, maybe in a jumbotron?
			 * Make sure we add a button such as 'Format again' to reset the page to it's orginal state
			 */
		}
	}
}
</script>

<style lang="scss">

.JsonFormatter {
	display: flex;
	flex-direction: column;

	&__input{
		margin-bottom: 1rem;
	}

	&__button {
		float: right;
	}
}
</style>