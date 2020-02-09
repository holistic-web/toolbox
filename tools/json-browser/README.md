# JSON Browser

This is a tool to view and browse json in a useful way. Good for those who need to analyse a lot of data stored in a JSON format.

It is powered by [vue-json-pretty](https://www.npmjs.com/package/vue-json-pretty).

Hosted at http://json-browser.holistic-toolbox.com

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
- load JSON data from http source
- allow a URL query to provide the JSON string so you can be linked here from another app