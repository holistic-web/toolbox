<template>
	<b-link class="ToolPreview" :href="tool.link">
		<b-card
			class="ToolPreview__card"
			:title="tool.name"
			:img-src="tool.image"
			:img-alt="tool.name"
			img-top
			text-variant="dark"
			bg-variant="info">
			<b-card-text v-text="tool.description"/>
		</b-card>
	</b-link>
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
@import '@holistic-web/layout/src/styles/theme';

.ToolPreview {
	border-radius: $tool-border-radius;

	&:hover {
		text-decoration: none;
		outline: 1px solid $highlight;
	}

	&__card {
		border-radius: $tool-border-radius !important;
		height: 350px;
	}
}
</style>
