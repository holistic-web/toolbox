# JSON Diff

This is tool compares two JSON objects using the library [jsondiffpatch](https://www.npmjs.com/package/jsondiffpatch).

Hosted at https://json-diff.holistic-toolbox.com

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

## Roadmap
- show the diff for both the left and right half, rather than just the left