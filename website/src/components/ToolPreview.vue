<template>
	<b-link class="ToolPreview" :href="tool.link">
		<div class="ToolPreview_card"  :style="{'background-image': `url(${require(tool.image)})`}">
			<p class="ToolPreview__card__text" v-text="tool.description" />
			<b-badge
					v-for="tag in tool.tags"
					:key="tag"
					v-text="tag"/>
		</div>
		<!-- <b-card
			class="ToolPreview__card"
			:title="tool.name"
			:img-src="tool.image"
			:img-alt="tool.name"
			img-top
			text-variant="dark"
			bg-variant="info">
			<b-card-text class="ToolPreview__card__text" v-text="tool.description"/>
			<section class="ToolPreview__card__tags">
				<b-badge
					v-for="tag in tool.tags"
					:key="tag"
					v-text="tag"/>
			</section>
		</b-card> -->
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
@import '@holistic-web/toolbox-layout/src/styles/theme';

.ToolPreview {
	border-radius: $tool-border-radius;
	display: flex;

	&:hover {
		text-decoration: none;
		outline: 1px solid $highlight;
	}

	.card-body {
		display: flex;
		flex-direction: column;
	}

	&__card {
		border-radius: $tool-border-radius !important;

			&__text {
				margin-bottom: auto;
			}
	}
}
</style>
