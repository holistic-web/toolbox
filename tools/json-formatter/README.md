# JSON Formatter

This tool validates and formats JSON entered by a developer. It is written in Vue.js.

The JSON rendering is done with the built in [`JSON.stringify(...)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method.

Hosted at https://json-formatter.holistic-toolbox.com

## Functionality
Along with JSON formatting, this tool supports:
- browsing the formatted JSON with a link to json-formatter

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

## Running Locally
To run this project locally follow the guide in the [main readme](https://github.com/holistic-web/toolbox#running-tools-locally) and then run `npm run json-formatter`

## Deployment
Deployment of this project is automated on merge into the master branch thanks to our [workflows](/.github/workflows/)To deploy this tool you must ensure you have the [firebase CLI](https://firebase.google.com/docs/cli) set up on your machine.

1. Navigate to this directory in your terminal
	```bash
	cd tools/json-formatter
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
Some ideas for the future of this tool are:
- allow custom values for the numbers of spaces used
- use a nicer editor than bootstrap textarea for entering and displaying text