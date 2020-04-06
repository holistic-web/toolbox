<template>
	<b-link class="ToolPreview" :href="tool.link">
		<div class="ToolPreview__card">
			<span :style="{ 'background-image': backgroundImageCSS }" class="ToolPreview__card__image"/>

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
	},
	computed: {
		backgroundImageCSS() {
			return `url("${this.tool.image}")`;
		}
	}
};
</script>

<style lang="scss">
@import '@holistic-web/el-layout/src/styles/theme';

.ToolPreview {
	border-radius: $el-border-radius;
	display: flex;
	width: 100%;

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
		width: 100%;

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
				display: flex;
				width: 100%;
				height: 280px;
				background-size: cover;
				background-repeat: no-repeat;
				background-position: top;
			}

			&__badge {
				margin-left: 2rem;
				margin-bottom: .5rem;
			}
	}
}
</style>
