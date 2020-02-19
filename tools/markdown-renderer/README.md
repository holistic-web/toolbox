# Markdown Renderer

This tool renders markdown using the [marked](https://www.npmjs.com/package/marked) package with some custom styling.

Hosted at: https://markdown-renderer.holistic-toolbox.com

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

## Roadmap
- There appears to be a bug where auto copy still happens even if not enabled
- Auto copy should be enabled / disabled by keyboard shortcut
- Both left and right half should be scrollable, maybe can scroll together as we can in vscode
- Code colour is wrong, let's use orange
- Should be able to tab through the inputs