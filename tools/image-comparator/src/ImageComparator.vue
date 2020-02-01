<template>
	<div ref="ImageComparator" class="ImageComparator">

		<template v-if="!compared">

			<p>Please select two images:</p>

				<section class="ImageComparator__input">
					<b-form-file
						class="ImageComparator__input"
						v-model="file1"
						placeholder="Choose a file or drop it here..."
						drop-placeholder="Drop file here..."/>
					<canvas ref="ImageComparator__canvas1"/>
				</section>

				<section class="ImageComparator__input">
					<b-form-file
						class="ImageComparator__input"
						v-model="file2"
						placeholder="Choose a file or drop it here..."
						drop-placeholder="Drop file here..."/>
					<canvas ref="ImageComparator__canvas2"/>
				</section>

		</template>

		<template v-else>

			<p>Results:</p>

			<canvas ref="ImageComparator__resultCanvas"/>

		</template>

		<tool-taskbar v-if="showTaskbar">

			<tool-button
				v-if="!compared"
				size="lg"
				v-text="'Compare'"
				@click.native="compareImages"/>

			<tool-button
				v-else
				size="sm"
				variant="secondary"
				v-text="'Reset'"
				@click.native="reset"/>

		</tool-taskbar>

	</div>
</template>

<script>
const pixelmatch = require('pixelmatch');

export default {
	data() {
		return {
			compared: false,
			file1: null,
			file2: null,
			image1: null // we only store image1 to get the size of image to compare
		};
	},
	computed: {
		showTaskbar() {
			return !!this.file1 && !!this.file2;
		}
	},
	methods: {
		renderImageFromFile(file, canvas) {
			const context = canvas.getContext('2d');
			const fileReader = new FileReader();
			const image = new Image();
			const containerWidth = canvas.clientWidth;
			image.onload = () => {
				const height = (containerWidth / image.width) * image.height;
				context.canvas.width = containerWidth;
				context.canvas.height = height;
				context.drawImage(
					image,
					0,
					0,
					containerWidth,
					height
				);
			};
			fileReader.onloadend = () => {
				image.src = fileReader.result;
			};
			fileReader.readAsDataURL(file);
			return image;
		},
		async compareImages() {
			const { clientHeight: height, clientWidth: width } = this.$refs.ImageComparator__canvas1;
			const image1 = this.$refs.ImageComparator__canvas1.getContext('2d').getImageData(0, 0, width, height);
			const image2 = this.$refs.ImageComparator__canvas2.getContext('2d').getImageData(0, 0, width, height);
			this.compared = true;
			await this.$nextTick();
			const canvas = this.$refs.ImageComparator__resultCanvas;
			const context = canvas.getContext('2d');
			const diff = context.createImageData(width, height);
			pixelmatch(
				image1.data,
				image2.data,
				diff.data,
				width,
				height,
				{ threshold: 0.3 }
			);
			context.putImageData(diff, 0, 0, 0, 0, width, height);
		},
		reset() {
			this.file1 = null;
			this.file2 = null;
			this.image1 = null;
			this.compared = false;
		}
	},
	watch: {
		file1() {
			if (!this.file1) return;
			this.image1 = this.renderImageFromFile(this.file1, this.$refs.ImageComparator__canvas1);
		},
		file2() {
			if (!this.file2) return;
			this.renderImageFromFile(this.file2, this.$refs.ImageComparator__canvas2);
		}
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
	margin-bottom: calc(114px + 1rem); // to account for the taskbar

	&__input {
		margin-bottom: 1rem;
	}
}
</style>
