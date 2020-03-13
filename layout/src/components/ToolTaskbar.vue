<template>
	<section class="ToolTaskbar">
		<slot/>
	</section>
</template>s

<style lang="scss">
@import '../styles/theme';

.ToolTaskbar {
	background-color: $dark;
	width: 100%;
	z-index: 10;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	border-top: 2px solid $primary;
	padding: ($tool-padding-mobile / 2) $tool-padding-mobile;

	@media all and (min-width: $breakpoint-tablet) {
		padding: ($tool-padding-tablet / 2) $tool-padding-tablet;
	}
	@media all and (min-width: $breakpoint-desktop) {
		padding: ($tool-padding-desktop / 2) $tool-padding-desktop;
	}
}
</style>
