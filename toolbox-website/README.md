# Toolbox Website

This is the homepage for all Holistic Toolbox tools

Hosted at: https://holistic-toolbox.com

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

## Roadmap:
- a little more text about what the toolbox is
- choose a better picture (or remove it)
- add consistency to tool picture and button sizes
- some kind of link to this github repository (maybe?)
- a contact us form, or perhaps just an email address
- the main website should be mobile friendly
- audit with google lighthouse