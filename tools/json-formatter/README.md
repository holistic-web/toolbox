# JSON Formatter

This tool validates and formats JSON entered by a developer. It is written in Vue.js.

The JSON rendering is done with the built in [`JSON.stringify(...)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method.

Hosted at https://json-formatter.holistic-toolbox.com

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
Some ideas for the future of this tool are:
- allow custom values for the numbers of spaces used
- use a nicer editor than bootstrap textarea for entering and displaying text