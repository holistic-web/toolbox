# JSON Diff
This is tool to highlight the differences between two JSON objects.

## Factsheet
| **Category**            | **Value**                              |
|-------------------------|----------------------------------------|
| **Project Type**        | Tool: Web App                          |
| **Live URL**            | https://json-diff.holistic-toolbox.com |
| **Firebase Site Name**  | json-diff                              |
| **Unique Dependencies** | jsondiffpatch                          |

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

## Roadmap
- show the diff for both the left and right half, rather than just the left