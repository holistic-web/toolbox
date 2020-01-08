<template>
	<div class="page" >
		<b-jumbotron id="jumbotron">
			<b-form-group
				label-cols-sm="1"
				label="Add your JSON here:"
				label-align-sm="center"
				label-for="input-json">
				<b-form-textarea class="page__input" id="input-json" rows="12" max-rows="100"></b-form-textarea>
				<b-button pill variant="outline-dark" @click="submit">Submit</b-button>
			</b-form-group>
			<img class="page__arrow" alt="arrow" src="../assets/arrow.svg">
		</b-jumbotron>
	</div>
</template>

<script>
export default {
	name: 'Page',
	methods: {
		submit() {
 			alert("Form Submitted")
		}
	}
}
</script>

<style lang="scss">

#jumbotron{
	margin-bottom: 0rem;
}

.page {
	&__arrow{
		max-width: 2rem;
		margin-left: 2rem;
		transform: translate(0px,-300px);
	}

	&__input{
		margin-bottom: 1rem;
	}
}
</style>