# Image Comparer
This tool provides a visual comparison of two image files.

## Factsheet
| **Category**            | **Value**                                   |
|-------------------------|---------------------------------------------|
| **Project Type**        | Tool: Web App                               |
| **Live URL**            | https://image-comparer.holistic-toolbox.com |
| **Firebase Site Name**  | image-comparer                              |
| **Unique Dependencies** | pixelmatch                                  |

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
Deployment for this project is handled by our [Github workflow](/.github/workflows/deploy-on-push-to-master) on merge into the master branch.

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
- allow comparing images from URL
- show the original image previews alongside the final difference
- allow customising the diff colours with a colourwheel
- prompt user about image size issue before allowing them to compare the images