<template>
	<b-card
		:title="tool.name"
		:img-src="tool.image"
		:img-alt="tool.name"
		img-top
		text-variant="dark"
		bg-variant="info">

		<b-card-text v-text="tool.description"/>

		<tool-button
			class="ToolPreview__button"
			:href="tool.link"
			v-text="'Go'"
			variant="outline-secondary"/>

	</b-card>
</template>

<script>
export default {
	props: {
		tool: {
			type: Object,
			requied: true
		}
	}
};
</script>

<style lang="scss">
.ToolPreview {
	&__button {
		width: 100%;
	}
}
</style>
