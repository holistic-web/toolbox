<template>
	<b-container class="DefaultLayout">

		<section class="DefaultLayout__header">

			<h2>
				<slot name="title"/>
			</h2>

			<div class="DefaultLayout__header__buttons">

				<slot name="actions"/>

			</div>

		</section>

		<span
			v-if="isLoading"
			v-text="'Loading...'"/>

		<span
			v-if="isSubmitting"
			v-text="'Submitting...'"/>

		<section
			v-if="!isLoading && !isSubmitting"
			class="DefaultLayout__content">

			<slot name="content"/>

		</section>

	</b-container>
</template>

<script>
export default {
	props: {
		isLoading: {
			type: Boolean,
			default: false
		},
		isSubmitting: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss">
.DefaultLayout {
	padding-top: 1rem;
	display: flex;
	flex-direction: column;

	&__header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		@media all and (min-width: 768px) {
			flex-direction: row;
		}

		&__buttons {
			display: flex;
			flex-direction: column;

			@media all and (min-width: 768px) {
				flex-direction: row;
			}

			> * {
				margin-bottom: 1rem;

				@media all and (min-width: 768px) {
					margin-bottom: 0;
					height: fit-content;
					margin-left: 1rem;
				}
			}
		}
	}

	&__content {
		padding-top: 1rem;
		display: flex;
		flex-direction: column;
	}

}
</style>
