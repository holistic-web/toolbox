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

						<div class="ImageComparer__overflowBox">
							<img ref="ImageComparer__image1" class="ImageComparer__image"/>
						</div>

					</section>

					<section class="ImageComparer__half">

						<b-form-file
							class="ImageComparer__half__item"
							v-model="file2"
							placeholder="Choose a file or drop it here..."
							drop-placeholder="Drop file here..."/>

						<div class="ImageComparer__overflowBox">
							<img ref="ImageComparer__image2" class="ImageComparer__image"/>
						</div>

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

			<div v-if="!compared" class="ImageComparer__taskbar">

				<tool-button
					v-if="!compared"
					size="lg"
					v-text="'Compare'"
					@click.native="compareImages"/>

				<b-form-group
					class="ImageComparer__taskbar__setting"
					description="A number between 0-1"
					label="Threshold"
					label-for="ImageComparer__threshold"
					label-size="sm">
					<b-form-input
						id="ImageComparer__threshold"
						v-model="pixelmatchOptions.threshold"
						size="sm"
						type="number"
						min="0"
						max="1"
						step="0.1"
						number/>
				</b-form-group>

				<b-form-group
					class="ImageComparer__taskbar__setting"
					description="Blending factor of unchanged pixels in the diff output. 0 - 1"
					label="Alpha"
					label-for="ImageComparer__alpha"
					label-size="sm">
					<b-form-input
						id="ImageComparer__alpha"
						v-model="pixelmatchOptions.alpha"
						size="sm"
						type="number"
						min="0"
						max="1"
						step="0.1"
						number/>
				</b-form-group>

				<b-form-group
					class="ImageComparer__taskbar__setting"
					description="Ignore anti-aliased pixels"
					label="Include AA"
					label-for="ImageComparer__includeAA"
					label-size="sm">
					<b-form-checkbox
						id="ImageComparer__includeAA"
						v-model="pixelmatchOptions.includeAA"
						size="sm"
						switch/>
				</b-form-group>

			</div>

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
			pixelmatchOptions: {
				threshold: 0.1,
				alpha: 0.1,
				includeAA: false
			},
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
			this.compared = false;
		}
	},
	watch: {
		file1() {
			if (!this.file1) return;
			const fileReader = new FileReader();
			fileReader.onload = () => {
				this.$refs.ImageComparer__image1.src = fileReader.result;
			};
			fileReader.readAsDataURL(this.file1);
		},
		file2() {
			if (!this.file2) return;
			const fileReader = new FileReader();
			fileReader.onload = () => {
				this.$refs.ImageComparer__image2.src = fileReader.result;
			};
			fileReader.readAsDataURL(this.file2);
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

	&__overflowBox {
		overflow-y: auto;
	}

	&__image {
		width: fit-content;
		height: fit-content;
	}

	&__taskbar {
		display: flex;
		flex-direction: row-reverse;

		> * {
			margin-left: 1rem;
		}

		&__setting {
			max-width: 250px;
		}
	}
}
</style>