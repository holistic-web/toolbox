# Toolbox Layout
This libary is a customised wrapper for [@holistic-web/el-layout](https://www.npmjs.com/package/@holistic-web/el-layout). It also includes firebase and configures our [analytics](/.project/analytics.md).

**N.B.** When updating this project, remember all usages will automatically update to the latest version. We should ensure all consumers of this project are up to date before releasing.

## Factsheet
| **Category**     | **Value**                             |
|------------------|---------------------------------------|
| **Project Type** | Component Library                     |
| **Package Name** | @holistic-web/toolbox-layout          |
| **Demo URL**     | https://el-layout-stories.web.app     |
| **Dependencies** | El Layout, Bootstrap Vue, Firebase    |

## Usage
To use this library in a Vue app, simply include:
```
import '@holistic-web/toolbox-layout';
import '@holistic-web/el-layout/dist/el-layout.css';
```
in your main.js file and then import the components as you would if they were local.

## Development

### Building
This project can be built as a library with the following commands
```
npm install
npm run build-bundle
```

### Publishing
Publishing for this project is handled by our [Github workflow](/.github/workflows/publish-on-push-to-master) on merge into the master branch.

Manual publishing is not recommended but if we need to try the following (provided you are logged into npm and authorized):
```
npm publish --access public
```
_Remember to increment the version number in package.json and package-lock.json._