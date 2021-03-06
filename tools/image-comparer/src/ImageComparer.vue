<template>
	<div ref="ImageComparer" class="ImageComparer">

		<div class="ElWrapper">

			<el-markdown :markdown="`
This is a tool to compare two images with the same dimensions using the library \
[pixelmatch](https://www.npmjs.com/package/pixelmatch). Any differring pixels will \
be flagged in red.
				`"/>

			<template v-if="!compared">

				<p>Select two images with the same dimensions to continue:</p>

				<!-- invisible images used in "compareImages" method -->
				<img
					ref="ImageComparer__image1"
					class="ImageComparer__hidden"
					:src="imageSrc1"/>
				<img
					ref="ImageComparer__image2"
					class="ImageComparer__hidden"
					:src="imageSrc2"/>

				<inputs
					ref="ImageComparer__inputs"
					@imageSrc1Update="handleImage1Update"
					@imageSrc2Update="handleImage2Update"/>

			</template>

			<template v-else>

				<section v-if="!errorMessage" class="ImageComparer__result">

					<p>Number of different pixels: {{numberOfDifferentPixels}}</p>

					<canvas ref="ImageComparer__resultCanvas"/>
				</section>

				<el-error ref="error" v-else :message="errorMessage"/>

			</template>

		</div>

		<el-taskbar v-if="showTaskbar">

			<template v-if="!compared">

				<el-button
					id="Action"
					class="ImageComparer__taskbarItem"
					size="lg"
					v-text="'Compare'"
					@click.native="compareImages"/>

				<settings
					class="ImageComparer__taskbarItem"
					v-model="pixelmatchOptions"/>

			</template>

			<el-button
				v-else
				class="ImageComparer__taskbarItem"
				size="sm"
				variant="secondary"
				v-text="'Reset'"
				@click.native="reset"/>

		</el-taskbar>

	</div>
</template>

<script>
import { ElButton, ElError, ElMarkdown, ElTaskbar } from '@holistic-web/toolbox-layout';
import pixelmatch from 'pixelmatch';
import Inputs from './components/Inputs.vue';
import Settings from './components/Settings.vue';

const pixelmatchDefaults = {
	threshold: 0.1,
	alpha: 0.1,
	includeAA: false
};

export default {
	components: {
		ElButton,
		ElError,
		ElMarkdown,
		Inputs,
		Settings,
		ElTaskbar
	},
	data() {
		return {
			compared: false,
			errorMessage: null,
			imageSrc1: null,
			imageSrc2: null,
			numberOfDifferentPixels: null,
			pixelmatchOptions: { ...pixelmatchDefaults }
		};
	},
	computed: {
		showTaskbar() {
			return !!this.imageSrc1 && !!this.imageSrc2;
		}
	},
	methods: {
		reset() {
			this.$refs.ImageComparer__inputs.reset();
			this.compared = false;
			this.errorMessage = null;
			this.imageSrc1 = null;
			this.imageSrc2 = null;
			this.numberOfDifferentPixels = null;
			this.pixelmatchOptions = { ...pixelmatchDefaults };
		},
		handleImage1Update(imageSrc1) {
			this.imageSrc1 = imageSrc1;
		},
		handleImage2Update(imageSrc2) {
			this.imageSrc2 = imageSrc2;
		},
		convertImageToCanvas(imageElement) {
			const canvas = document.createElement('canvas');
			canvas.width = imageElement.width;
			canvas.height = imageElement.height;
			canvas.getContext('2d').drawImage(imageElement, 0, 0);
			return canvas;
		},
		async compareImages() {
			this.errorMessage = null;
			try {
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
				resultCanvas.style.width = '100%';
			} catch (err) {
				this.errorMessage = err;
				await this.$nextTick();
				this.$scrollTo(this.$refs.error);
			}
		}
	}
};
</script>

<style lang="scss">
.ImageComparer {

	&__hidden {
		display: none;
	}

	&__result {
		display: flex;
		flex-direction: column;
	}

	&__taskbarItem {
		margin-left: 1rem;
	}
}
</style>
