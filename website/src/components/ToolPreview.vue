<template>
	<b-link class="ToolPreview" :href="tool.link">
		<div class="ToolPreview__card">
			<img v-bind:src="tool.image" class="ToolPreview__card__image"/>
			<p class="ToolPreview__card__name" v-text="tool.name"/>
			<p class="ToolPreview__card__text" v-text="tool.description" />
			<b-badge
					v-for="tag in tool.tags"
					:key="tag"
					v-text="tag"
					class="ToolPreview__card__badge"/>
		</div>
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
		border: solid grey;
		border-width: .1rem;
		background-color: grey;

			&__name {
				margin-top: 2rem;
				margin-left: 2rem;
				color: black;
				font-size: large;
				}

			&__text {
				margin-top: 1rem;
				margin-left: 2rem;
				margin-bottom: .5rem;
				padding-right: .5rem;
				color: black;
			}

			&__image {
				width:  100%;
				height: 30vmin;
				background-size: cover;
			}

			&__badge {
				margin-left: 2rem;
				margin-bottom: .5rem;
			}
	}
}
</style>
