<template>
	<section class="Inputs">

		<section class="Inputs__half">
			<b-form-file
				class="Inputs__half__item"
				v-model="file1"
				placeholder="Choose a file or drop it here..."
				drop-placeholder="Drop file here..."
				@input="handleImageInput(file1, 'imageSrc1')"/>
			<img
				class="Inputs__image"
				:style="{ 'background-image': `url('${imageSrc1}')` }"/>
		</section>

		<section class="Inputs__half">
			<b-form-file
				class="Inputs__half__item"
				v-model="file2"
				placeholder="Choose a file or drop it here..."
				drop-placeholder="Drop file here..."
				@input="handleImageInput(file2, 'imageSrc2')"/>
			<img
				class="Inputs__image"
				:style="{ 'background-image': `url('${imageSrc2}')` }"/>
		</section>

	</section>
</template>

<script>
export default {
	data() {
		return {
			file1: null,
			file2: null,
			imageSrc1: null,
			imageSrc2: null
		};
	},
	methods: {
		reset() {
			this.file1 = null;
			this.file2 = null;
			this.imageSrc1 = null;
			this.imageSrc2 = null;
		},
		handleImageInput(imageFile, imageDataKey) {
			if (!imageFile) return;
			const fileReader = new FileReader();
			fileReader.onload = () => {
				this[imageDataKey] = fileReader.result;
				this.$emit(`${imageDataKey}Update`, fileReader.result);
			};
			fileReader.readAsDataURL(imageFile);
		}
	}
};
</script>

<style lang="scss">

.Inputs {
	display: flex;
	flex-direction: row;
	margin: 0 -1rem;

	&__half {
		margin: 0 1rem;
		width: 50%;
		display: flex;
		flex-direction: column;

		&__item {
			margin-bottom: 1rem !important;
		}
	}

	&__image {
		width: 100%;
		height: 400px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
}
</style>
