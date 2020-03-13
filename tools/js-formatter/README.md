# JS Formatter
This is a tool to format JS code.

## Factsheet
| **Category**            | **Value**                                  |
|-------------------------|--------------------------------------------|
| **Project Type**        | Tool: Web App                              |
| **Live URL**            | https://js-formatter.holistic-toolbox.com  |
| **Firebase Site Name**  | js-formatter                               |
| **Unique Dependencies** | vue-clipboard, uglifyjs-browser            |

Site is hosted at https://js-formatter.holistic-toolbox.com

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
- Allow the user to set more formatting options, possibly provide a small description against each option
- Support ES6 JS, such as `const a = 'test';`