<template>
	<div ref="ImageComparer" class="ImageComparer">

		<tool-markdown :markdown="`
This is a tool to compare two images with the same dimensions using the library [pixelmatch](https://www.npmjs.com/package/pixelmatch).
Any differring pixels will be flagged in red.
			`"/>

		<template v-if="!compared">

			<p>Select two images with the same dimensions to continue:</p>

			<section class="ImageComparer__content">

				<section class="ImageComparer__half">
					<b-form-file
						class="ImageComparer__half__item"
						v-model="file1"
						placeholder="Choose a file or drop it here..."
						drop-placeholder="Drop file here..."/>
					<img
						ref="ImageComparer__image1"
						class="ImageComparer__hidden"
						:src="imageData1"/>
					<img
						class="ImageComparer__image"
						:style="{ 'background-image': `url('${imageData1}')` }"/>
				</section>

				<section class="ImageComparer__half">
					<b-form-file
						class="ImageComparer__half__item"
						v-model="file2"
						placeholder="Choose a file or drop it here..."
						drop-placeholder="Drop file here..."/>
					<img
						ref="ImageComparer__image2"
						class="ImageComparer__hidden"
						:src="imageData2"/>
					<img
						class="ImageComparer__image"
						:style="{ 'background-image': `url('${imageData2}')` }"/>
				</section>

			</section>
		</template>

		<template v-else>

			<section
				v-if="!error"
				class="ImageComparer__content ImageComparer__content--column">

				<p>Number of different pixels: {{numberOfDifferentPixels}}</p>

				<canvas ref="ImageComparer__resultCanvas"/>
			</section>

			<tool-error v-else :message="error"/>

		</template>

		<tool-taskbar v-if="showTaskbar">

			<template v-if="!compared">

				<tool-button
					class="ImageComparer__taskbarItem"
					size="lg"
					v-text="'Compare'"
					@click.native="compareImages"/>

				<settings
					class="ImageComparer__taskbarItem"
					v-model="pixelmatchOptions"/>

			</template>

			<tool-button
				v-else
				class="ImageComparer__taskbarItem"
				size="sm"
				variant="secondary"
				v-text="'Reset'"
				@click.native="reset"/>

		</tool-taskbar>

	</div>
</template>

<script>
import pixelmatch from 'pixelmatch';
import Settings from './components/Settings.vue';

const pixelmatchDefaults = {
	threshold: 0.1,
	alpha: 0.1,
	includeAA: false
};

export default {
	components: {
		Settings
	},
	data() {
		return {
			compared: false,
			file1: null,
			file2: null,
			imageData1: null,
			imageData2: null,
			pixelmatchOptions: { ...pixelmatchDefaults },
			numberOfDifferentPixels: null,
			error: null
		};
	},
	computed: {
		showTaskbar() {
			return !!this.file1 && !!this.file2;
		}
	},
	methods: {
		convertImageToCanvas(imageElement) {
			const canvas = document.createElement('canvas');
			canvas.width = imageElement.width;
			canvas.height = imageElement.height;
			canvas.getContext('2d').drawImage(imageElement, 0, 0);
			return canvas;
		},
		async compareImages() {
			const canvas1 = this.convertImageToCanvas(this.$refs.ImageComparer__image1);
			const canvas2 = this.convertImageToCanvas(this.$refs.ImageComparer__image2);

			const context1 = canvas1.getContext('2d');
			const context2 = canvas2.getContext('2d');

			const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
			const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);

			// use the first image's size for the comparison
			const { width, height } = imageData1;

			const resultImageData = new ImageData(width, height);

			// set compared to true so we have access to the result canvas
			this.compared = true;
			await this.$nextTick();

			const resultCanvas = this.$refs.ImageComparer__resultCanvas;
			resultCanvas.width = width;
			resultCanvas.height = height;

			// get the difference
			try {
				this.numberOfDifferentPixels = pixelmatch(
					imageData1.data,
					imageData2.data,
					resultImageData.data,
					width,
					height,
					{ ...this.pixelmatchOptions }
				);

				// draw the output
				const resultContext = resultCanvas.getContext('2d');
				resultContext.putImageData(resultImageData, 0, 0);
			} catch (err) {
				this.error = err.message;
			}
		},
		reset() {
			this.file1 = null;
			this.file2 = null;
			this.imageData1 = null;
			this.imageData2 = null;
			this.compared = false;
			this.pixelmatchOptions = { ...pixelmatchDefaults };
		},
		handleImageInput(imageFile, imageDataKey) {
			if (!imageFile) return;
			const fileReader = new FileReader();
			fileReader.onload = () => {
				this[imageDataKey] = fileReader.result;
			};
			fileReader.readAsDataURL(imageFile);
		}
	},
	watch: {
		file1() {
			this.handleImageInput(this.file1, 'imageData1');
		},
		file2() {
			this.handleImageInput(this.file2, 'imageData2');
		}
	}
};
</script>

<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.ImageComparer {
	display: flex;
	flex-direction: column;
	height: fit-content;
	padding: $tool-padding;
	margin-bottom: calc(177px + 1rem); // to account for the taskbar

	&__hidden {
		display: none;
	}

	&__content {
		display: flex;
		flex-direction: row;
		margin: 0 -1rem;

		&--column {
			flex-direction: column;
		}
	}

	&__half {
		margin: 0 1rem;
		width: 50%;
		display: flex;
		flex-direction: column;

		&__item {
			margin-bottom: 1rem;
		}
	}

	&__image {
		width: 100%;
		height: 400px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}

	&__taskbarItem {
		margin-left: 1rem;
	}
}
</style>
