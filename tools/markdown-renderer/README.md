# Markdown Renderer

This tool renders markdown using the [marked](https://www.npmjs.com/package/marked) package with a little custom styling.

Hosted at http://markdown-renderer.holistic-toolbox.com

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