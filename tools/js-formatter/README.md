# JS Formatter

This tool validates and formats JavaScript using [`UglifyJS`](https://www.npmjs.com/package/uglifyjs-browser)

Site is hosted at https://js-formatter.holistic-toolbox.com

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
- Allow the user to set more formatting options, possibly provide a small description against each option