<template>
	<header class="AppHeader">
		<b-navbar type="dark" variant="dark">

			<!-- left partition -->
			<b-navbar-nav>
				<b-nav-item href="#">{{name}}</b-nav-item>

				<!-- Navbar dropdowns #TODO: implement once we have other services! -->
				<!-- <b-nav-item-dropdown text="" right>
					<b-dropdown-item href="#">Other Service</b-dropdown-item>
					<b-dropdown-item href="#">Other Service</b-dropdown-item>
				</b-nav-item-dropdown> -->

			</b-navbar-nav>

			<!-- right partition-->
			<b-navbar-nav class="ml-auto">
				<img alt="Vue logo" src="../assets/logo.png">
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