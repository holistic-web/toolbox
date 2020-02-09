# Toolbox Linting

This folder provides eslint configuration for all our projects.

### Publishing
Publishing for this project is handled by our [Github workflow](/.gitub/workflows/publish-on-push-to-master) on merge into the master branch.

Manual publishing is not recommended but if we need to try the following (provided you are logged into npm and authorized):
```
npm publish --access public
```
_Remember to increment the version number in package.json_