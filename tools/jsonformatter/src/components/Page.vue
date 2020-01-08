<template>
	<div class="page" >
		<b-jumbotron lead="Please add your JSON to be formatted:">
            <b-form-textarea class="page__input"></b-form-textarea>
            <b-button class="page_input_submit" pill variant="outline-dark" @click="submit">Submit</b-button>
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
.page {
	&__input{
        margin-bottom: 1rem;
    }
}
</style>