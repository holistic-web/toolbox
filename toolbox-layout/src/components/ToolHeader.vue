<template>
	<header class="ToolHeader">
		<b-navbar>

			<!-- left partition -->
			<b-navbar-nav>
				<h1 class="ToolHeader__name" v-text="name"/>

				<!-- Navbar dropdowns #TODO: implement once we have other services! -->
				<!-- <b-nav-item-dropdown text="" right>
					<b-dropdown-item href="#">Other Service</b-dropdown-item>
					<b-dropdown-item href="#">Other Service</b-dropdown-item>
				</b-nav-item-dropdown> -->

			</b-navbar-nav>

			<!-- right partition-->
			<b-navbar-nav class="ml-auto">
				<h2 class="ToolHeader__branding">Holistic Toolbox</h2>
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

.ToolHeader {
	background-color: $dark;
	padding: ($tool-padding / 2) $tool-padding;

	&__name {
		color: $primary;
	}

	&__branding {
		color: $secondary;
	}
}
</style>