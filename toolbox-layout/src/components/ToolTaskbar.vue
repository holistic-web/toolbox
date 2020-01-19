<template>
	<section class="ToolTaskbar">
		<slot/>
	</section>
</template>s

<style lang="scss">
@import '../styles/theme';

.ToolTaskbar {
	background-color: $dark;
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
	z-index: 10;
	padding: $tool-padding;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	border-top: 2px solid $primary;
}
</style>
