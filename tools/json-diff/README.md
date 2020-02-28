# JSON Diff

This is tool compares two JSON objects using the library [jsondiffpatch](https://www.npmjs.com/package/jsondiffpatch).

Hosted at https://json-diff.holistic-toolbox.com

## Running Locally
To run this project locally follow the guide in the [main readme](https://github.com/holistic-web/toolbox#running-tools-locally) and then run `npm run json-diff`

## Deployment
Deployment of this project is automated on merge into the master branch thanks to our [workflows](/.github/workflows/)To deploy this tool you must ensure you have the [firebase CLI](https://firebase.google.com/docs/cli) set up on your machine.

1. Navigate to this directory in your terminal
	```bash
	cd tools/json-diff
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

## Roadmap
- show the diff for both the left and right half, rather than just the left