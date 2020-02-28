# Website

This is the homepage for all Holistic Toolbox tools, hosted at: https://holistic-toolbox.com

## Running Locally
To run this project locally follow the guide in the [main readme](https://github.com/holistic-web/toolbox#running-tools-locally) and then run `npm run website`

## Deployment
Deployment of this project is automated on merge into the master branch thanks to our [workflows](/.github/workflows/)To deploy this tool you must ensure you have the [firebase CLI](https://firebase.google.com/docs/cli) set up on your machine.

1. Navigate to this directory in your terminal
	```bash
	cd tools/website
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

## Roadmap:
- a little more text about what the toolbox is
- choose a better picture (or remove it)
- add consistency to tool picture and button sizes
- some kind of link to this github repository (maybe?)
- a contact us form, or perhaps just an email address
- the main website should be mobile friendly
- audit with google lighthouse