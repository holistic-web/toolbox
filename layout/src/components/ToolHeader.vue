<template>
	<header class="ToolHeader">
		<b-navbar class="ToolHeader__navbar">

			<!-- left partition -->
			<b-navbar-nav class="ToolHeader__section">
				<b-link class="ToolHeader__branding" href="https://holistic-toolbox.com">
					<h2
						class="ToolHeader__branding__text"
						v-text="'Holistic Toolbox'"/>
				</b-link>
				<lottie-player :src="floatingNinjaAnimation" :options="animationOptions"/>
			</b-navbar-nav>

			<!-- right partition-->
			<b-navbar-nav class="ToolHeader__section ToolHeader__section--right">
					<h1 class="ToolHeader__name" v-text="name"/>
			</b-navbar-nav>

		</b-navbar>
	</header>
</template>

<script>
import { LottiePlayer } from 'lottie-player-vue';
import floatingNinjaAnimation from '../assets/animations/floating-ninja.json';

export default {
	components: {
		LottiePlayer
	},
	props: {
		name: { type: String, required: true }
	},
	data() {
		return {
			floatingNinjaAnimation,
			animationOptions: {
				autoplay: true,
				loop: true,
				width: '55px'
			}
		};
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

	&__section {
		display: flex;
		align-items: center;

		&--right {
			margin-left: auto;
		}
	}

	&__branding {
		color: $success;
		display: flex;
		height: fit-content;
		margin-right: 1rem;

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


	&__name {
		color: $highlight;
		font-size: $tool-text-larger;
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
