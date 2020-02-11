# NLP Toolkit

This is a tool to to perform NLP operations using the library [compromise](https://www.npmjs.com/package/compromise).

#TODO: provide a link to the live url of this tool

## Setup Guide
- [x] run `npm install` on this folder to generate package-lock.json and node_modules
- [ ] build your tool =D
- [ ] set up a new website for the tool here: https://console.firebase.google.com/u/0/project/holistic-toolbox/hosting/main
- [ ] update firebase.json to point towards the ID of this newly created site
- [ ] ensure any remaining #TODOs in this folder / file have been completed
- [ ] update toolbox-website to include your tool in the list of tools
- [ ] update /tools README.md to include your tool in the list of tools
- [ ] submit as a PR for review =D
- [ ] add the completed tool as a subdomain in Google hosting panel. We want to configure entries for both `tool-name.holistic-toolbox.com` and `www.tool-name.holistic-toolbox.com`.
- [ ] in the firebase console, configure the new site to use these new domains
- finally, delete this section from the readme when the above is all complete

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
#TODO: list ideas for the future here, or delete this section