# JSON Browser

This is a tool to view and browse json in a useful way. Good for those who need to analyse a lot of data stored in a JSON format.

It is powered by [vue-json-pretty](https://www.npmjs.com/package/vue-json-pretty).

Hosted at http://json-browser.holistic-toolbox.com

## Functionality
Along with JSON browsing, this tool supports:
- loading JSON in from the url query `JSON`
- routing, although still one page this tool using routing to access the url query

## Running Locally
To run this project locally follow the guide in the [main readme](https://github.com/holistic-web/toolbox#running-tools-locally) and then run `npm run json-browser`

## Deployment
Deployment of this project is automated on merge into the master branch thanks to our [workflows](/.github/workflows/)To deploy this tool you must ensure you have the [firebase CLI](https://firebase.google.com/docs/cli) set up on your machine.

1. Navigate to this directory in your terminal
	```bash
	cd tools/json-browser
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
- load JSON data from http source
- allow a URL query to provide the JSON string so you can be linked here from another app