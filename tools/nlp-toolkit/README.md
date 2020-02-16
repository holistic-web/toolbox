# NLP Toolkit

This is a tool to to perform NLP operations using the library [compromise](https://www.npmjs.com/package/compromise). Currently supports past and future tense conversion plus a simple function to negate statements.

Hosted at https://nlp-toolkit.holistic-toolbox.com/

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