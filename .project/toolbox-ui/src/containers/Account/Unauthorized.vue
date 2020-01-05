<template>
	<section class="Unauthorized">

		<b-container class="Unauthorized__inner">

			<b-btn
				class="Unauthorized__button"
				variant="info"
				size="lg"
				v-text="'Log In'"
				@click="logIn"/>

			<a
				class="p-3"
				href="https://github.com/michaelfitzhavey/home-orchestrator"
				v-text="'https://github.com/michaelfitzhavey/home-orchestrator'"/>

		</b-container>

	</section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	methods: {
		...mapActions({
			logIn: 'account/logIn'
		})
	}
};
</script>


<style lang="scss">
.Unauthorized {

	&__inner {
		height: -webkit-fill-available;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		min-height: 100vh;
	}

	&__button {
		padding: 1rem 3rem;
		width: 100%;
	}
}

</style>
