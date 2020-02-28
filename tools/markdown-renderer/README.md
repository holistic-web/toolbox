# Markdown Renderer

This tool renders markdown using the [marked](https://www.npmjs.com/package/marked) package with some custom styling.

Hosted at: https://markdown-renderer.holistic-toolbox.com

## Running Locally
To run this project locally follow the guide in the [main readme](https://github.com/holistic-web/toolbox#running-tools-locally) and then run `npm run markdown-renderer`

## Deployment
Deployment of this project is automated on merge into the master branch thanks to our [workflows](/.github/workflows/)To deploy this tool you must ensure you have the [firebase CLI](https://firebase.google.com/docs/cli) set up on your machine.

1. Navigate to this directory in your terminal
	```bash
	cd tools/markdown-renderer
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
- There appears to be a bug where auto copy still happens even if not enabled
- Auto copy should be enabled / disabled by keyboard shortcut
- Both left and right half should be scrollable, maybe can scroll together as we can in vscode
- Code colour is wrong, let's use orange
- Should be able to tab through the inputs