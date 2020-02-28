# Number converter

This tool converts numbers to binary and hexadecimal as well as dealing with signed and unsigned integers.

Number converting done via: [int.toString(Base)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

Hosted at: https://number-converter.web.app

## Running Locally
To run this project locally follow the guide in the [main readme](https://github.com/holistic-web/toolbox#running-tools-locally) and then run `npm run number-converter`

## Deployment
Deployment of this project is automated on merge into the master branch thanks to our [workflows](/.github/workflows/)To deploy this tool you must ensure you have the [firebase CLI](https://firebase.google.com/docs/cli) set up on your machine.

1. Navigate to this directory in your terminal
	```bash
	cd tools/number-converter
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
- add more conversion features
- allow converting to decimal from other formats
- make better ui