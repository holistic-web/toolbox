# Publish on push to master

This workflow affects all our npm packages, so `toolbox-layout` and `toolbox-linting`.

1. increment the version in package.json
2. push the new version to the master branch
3. build the project (if applicable)
4. publish the project

It relies on the `NPM_TOKEN` secret being available in this repo.