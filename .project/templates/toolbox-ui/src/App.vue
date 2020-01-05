<template>
	<div id="app" class="App">

		<app-header v-if="isLoggedIn"/>

		<router-view class="App__content"/>

	</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
	components: {
		AppHeader
	},
	computed: {
		isLoggedIn() {
			return this.$route.name !== 'account.unauthorized';
		}
	}
};

</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';

.App {
	font-family: 'Nunito', 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100%;
	display: flex;
	flex-direction: column;

	&__content {
		width: 100%;
	}
}

/* Reusable classes */
.Table {

	&__actions {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		@media all and (min-width: 768px) {
			flex-direction: row-reverse;
			justify-content: flex-start;
		}

		&__item {
			margin-bottom: 1rem;

			@media all and (min-width: 768px) {
				margin-bottom: 0;
				margin-left: 1rem;
			}
		}
	}
}

/* Bootstrap Vue Customisation */

// radio buttons that are clickable have mouse cursor
.btn-group-toggle {
	> label:not(.active) {
		cursor: pointer;
	}
}

</style>
