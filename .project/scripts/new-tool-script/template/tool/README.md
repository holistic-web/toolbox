# {{tool-name-human}}

#TODO: add a brief description of this tool and any key packages it uses

#TODO: provide a link to the live url of this tool

## Setup Guide
_This has updated a little since this was written. After following this steps make sure to set up this project using Lerna. (see the top level README)_

- [ ] run `npm install` on this folder to generate package-lock.json and node_modules
- [ ] build your tool =D
- [ ] set up a new website for the tool here: https://console.firebase.google.com/u/0/project/holistic-toolbox/hosting/main
- [ ] update firebase.json to point towards the ID of this newly created site
- [ ] ensure any remaining #TODOs in this folder / file have been completed
- [ ] update the website to include your tool in the list of tools
- [ ] update /tools README.md to include your tool in the list of tools
- [ ] add the script to run the tool to the main package.json
- [ ] submit as a PR for review =D
- [ ] add the completed tool as a subdomain in Google hosting panel. We want to configure entries for both `tool-name.holistic-toolbox.com` and `www.tool-name.holistic-toolbox.com`.
- [ ] in the firebase console, configure the new site to use these new domains
- finally, delete this section from the readme when the above is all complete

## Running Locally
To run this project locally follow the guide in the [main readme](https://github.com/holistic-web/toolbox#running-tools-locally) and then run `npm run {{tool-name}}`

## Deployment
Deployment of this project is automated on merge into the master branch thanks to our [workflows](/.github/workflows/)To deploy this tool you must ensure you have the [firebase CLI](https://firebase.google.com/docs/cli) set up on your machine.

1. Navigate to this directory in your terminal
	```bash
	cd tools/{{tool-name}}
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

## Road Map
#TODO: list ideas for the future here, or delete this section