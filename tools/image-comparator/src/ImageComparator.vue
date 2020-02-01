<template>
	<div class="ImageComparator">

		<template v-if="!compared">

			<p>Please select two images:</p>

			<b-form-file
				class="ImageComparator__input"
				v-model="image1"
				placeholder="Choose a file or drop it here..."
				drop-placeholder="Drop file here..."/>

			<b-form-file
				class="ImageComparator__input"
				v-model="image2"
				placeholder="Choose a file or drop it here..."
				drop-placeholder="Drop file here..."/>

		</template>

		<template v-else>

			<p>Results:</p>

		</template>

	</div>
</template>

<script>
export default {
	data() {
		return {
			compared: false,
			image1: null,
			image2: null
		};
	}
};
</script>

<style lang="scss">
@import 'toolbox-layout/src/styles/theme';

.ImageComparator {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;

	&__input {
		margin-bottom: 1rem;
	}
}
</style>
