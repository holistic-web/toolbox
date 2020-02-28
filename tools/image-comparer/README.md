# Image Comparer

This tool provides a visual comparison of two image files. The comparison is powered by the [pixelmatch](https://www.npmjs.com/package/pixelmatch) package.

Hosted at http://image-comparer.holistic-toolbox.com

## Running Locally
To run this project locally follow the guide in the [main readme](https://github.com/holistic-web/toolbox#running-tools-locally) and then run `npm run image-comparer`

## Deployment
Deployment of this project is automated on merge into the master branch thanks to our [workflows](/.github/workflows/)To deploy this tool you must ensure you have the [firebase CLI](https://firebase.google.com/docs/cli) set up on your machine.

1. Navigate to this directory in your terminal
	```bash
	cd tools/image-comparer
	```
2. Install dependencies directly into this project
	```bash
	npm ci
	```
3. Generate a build
	```bash
	npm run build
	```
4. Deploy the project
	```bash
	firebase deploy
	```

## Road Map
- allow comparing images from URL
- show the original image previews alongside the final difference
- allow customising the diff colours with a colourwheel
- prompt user about image size issue before allowing them to compare the images