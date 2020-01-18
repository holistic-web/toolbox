<template>
	<section class="ToolTaskbar">
		<slot/>
	</section>
</template>s

<style lang="scss">
@import '../styles/theme';

.ToolTaskbar {
	background-color: $light;
	color: $dark;
	position: fixed;
	width: 100%;
	bottom: 0;
	z-index: 10;
}
</style>