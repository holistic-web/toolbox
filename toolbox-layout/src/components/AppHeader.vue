<template>
	<header class="AppHeader">
		<b-navbar>

			<!-- left partition -->
			<b-navbar-nav>
				<h1 class="AppHeader__name" v-text="name"/>

				<!-- Navbar dropdowns #TODO: implement once we have other services! -->
				<!-- <b-nav-item-dropdown text="" right>
					<b-dropdown-item href="#">Other Service</b-dropdown-item>
					<b-dropdown-item href="#">Other Service</b-dropdown-item>
				</b-nav-item-dropdown> -->

			</b-navbar-nav>

			<!-- right partition-->
			<b-navbar-nav class="ml-auto">
				<h2 class="AppHeader__branding">Holistic Toolbox</h2>
			</b-navbar-nav>

		</b-navbar>
	</header>
</template>

<script>
export default {
	props: {
		name: { type: String, required: true }
	}
}
</script>

<style lang="scss">
@import '../styles/theme';

.AppHeader {
	background-color: $dark;

	&__name {
		color: $primary;
	}

	&__branding {
		color: $secondary;
	}
}
</style>