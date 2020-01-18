<template>
	<div class="ToolError" v-text="message"/>
</template>

<script>
export default {
	props:{
		message: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="scss">
@import '../styles/theme';

.ToolError {
	background-color: $danger;
	color: $light;
	$padding: 1rem;
}
</style>