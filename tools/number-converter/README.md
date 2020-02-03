# Number converter

This tool converts numbers to binary and hexadecimal as well as dealing with signed and unsigned integers.

Number converting done via: [int.toString(Base)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

Hosted at: https://number-converter.web.app/

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

## Road Map
- add more conversion features
- allow converting to decimal from other formats
- make better ui