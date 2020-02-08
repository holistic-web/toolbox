# Github Workflows

This folder contains our automated workflows for this project. We have 4 main workflows at the moment.

## Workflows:

### Deploy on push to master
This workflow affects all our Vue apps, so `toolbox-website` and all tools. The logic for this automation is:
1. increment the version in package.json
2. push the new version to the master branch
3. build the project
4. deploy the project
