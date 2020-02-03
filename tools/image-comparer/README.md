# Image Comparer

A tool to provide a visual comparison of two image files.

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
To deploy this tool you must ensure you have the firebase CLI set up on your machine.
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
- allow customisation of comparison with settings in https://www.npmjs.com/package/pixelmatch