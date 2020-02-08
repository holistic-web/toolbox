# Image Comparer

A tool to provide a visual comparison of two image files. The comparison is powered by the [pixelmatch](https://www.npmjs.com/package/pixelmatch) package.

Hosted at http://image-comparer.holistic-toolbox.com

## Development
To develop for this project:
1. Install dependencies
	```
	npm install
	```
2. Host the project locally in development mode
	```
	npm run serve
	```

## Deployment
Deployment for this project is handled by our [Github workflow](/.gitub/workflows/deploy-on-push-to-master) on merge into the master branch.

Manual deployment is not recommended but in case we ever need to do the following on a machine with the firebase cli installed.

1. Build the project
	```
	npm run build
	```
2. Deploy the project
	```
	firebase deploy
	```

## Road Map
- allow comparing images from URL
- show image previews in a size that fits on the screen, and use in memory images for the comparison
- show the original image previews alongside the final difference
- allow customising the diff colours with a colourwheel