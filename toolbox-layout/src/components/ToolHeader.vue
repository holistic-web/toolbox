<template>
	<header class="ToolHeader">
		<b-navbar class="ToolHeader__navbar">

			<!-- left partition -->
			<b-navbar-nav>
				<h1 class="ToolHeader__name" v-text="name"/>

				<!-- Navbar dropdowns #TODO: implement once we have other services! -->
				<!-- <b-nav-itesm-dropdown text="" right>
					<b-dropdown-item href="#">Other Service</b-dropdown-item>
					<b-dropdown-item href="#">Other Service</b-dropdown-item>
				</b-nav-itesm-dropdown> -->

			</b-navbar-nav>

			<!-- right partition-->
			<b-navbar-nav class="ml-auto">
				<b-link class="ToolHeader__branding" href="https://holistic-toolbox.com">
					<h2
						class="ToolHeader__branding__text"
						v-text="'Holistic Toolbox'"/>
				</b-link>
			</b-navbar-nav>

		</b-navbar>
	</header>
</template>

<script>
export default {
	props: {
		name: { type: String, required: true }
	}
};
</script>

<style lang="scss">
@import '../styles/theme';

.ToolHeader {
	background-color: $dark;
	padding: ($tool-padding-mobile / 2) $tool-padding-mobile;

	@media all and (min-width: $breakpoint-tablet) {
		padding: ($tool-padding-tablet / 2) $tool-padding-tablet;
	}
	@media all and (min-width: $breakpoint-desktop) {
		padding: ($tool-padding-desktop / 2) $tool-padding-desktop;
	}

	&__navbar {
		padding: 0 !important;
	}

	&__name {
		color: $highlight;
		font-size: $tool-text-larger;
	}

	&__branding {
		color: $success;

		&:hover {
			color: $success;
			text-decoration: none;
			animation-name: wiggle;
			animation-duration: 500ms;
			animation-timing-function: ease-in-out;
			animation-iteration-count: 1;
		}

		&__text {
			font-size: $tool-text-large;
			font-weight: lighter;
			letter-spacing: 1.5px;
			text-transform: uppercase;
			text-align: right;
		}
	}
}

// wiggle animation: https://codepen.io/theDeanH/pen/zBZXLN
@keyframes wiggle {
	0% {transform: rotate(1deg);}
	25% {transform: rotate(-2deg);}
	50% {transform: rotate(5deg);}
	75% {transform: rotate(-1deg);}
	100% {transform: rotate(0deg);}
}
</style>
