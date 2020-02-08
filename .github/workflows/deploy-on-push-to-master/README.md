# Deploy on push to master

This workflow affects all our Vue apps, so `toolbox-website` and all tools. The logic for this automation is:

1. increment the version in package.json
2. push the new version to the master branch
3. build the project
4. deploy the project

It relies on the `FIREBASE_TOKEN` secret being available in this repo.