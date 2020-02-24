# Toolbox Layout

This is a shared [Vue.js](https://vuejs.org) component library for use in the Toolbox. [Boostrap Vue](https://bootstrap-vue.js.org/) is used to drive the core of the functionality.

It is published on npm at: https://www.npmjs.com/package/@holistic-web/toolbox-layout

A demo can be found here: https://toolbox-layout-stories.firebaseapp.com

## Usage
To use this library in a Vue app, simply include:
```
import 'layout';
import 'layout/dist/layout.css';
```
in your main.js file to make the components available.

The following SCSS variables can also be accessed with: `@import 'layout/src/theme'`.
```
$primary: $colour-orange-dark;
$highlight: $colour-blue;
$secondary: $colour-blue-light;
$dark: $colour-blue-dark;
$light: $colour-white;
$warning: $colour-pink;
$danger: $colour-red;
$success: $colour-green;
$info: $colour-cream;
```

## Development

## Testing
Run the following command to open up a demo of the components:
```
npm run storybook
```
_Be sure to update this demo in the `/docs` folder as we improve the library._

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
_Remember to increment the version number in package.json_

### Analytics
Firebase analytics have been added to index.js of layout
Navigate to the analytics dashboard through the firebase console for the project
The docs are here:
https://firebase.google.com/docs/analytics/get-started?platform=web&authuser=0
For specific events:
https://firebase.google.com/docs/analytics/events?authuser=0&platform=web

### Notes and Caveats
- This project uses [storybook](https://storybook.js.org/) to provide visual documentation. This storybook deployment is released automatically by the  `/.github/workflows/deploy-layout-stories` action.

## Roadmap
- allowing individual components to be imported rather then all or nothing
- use storyboard to create a demo / documentation resource for this component library
- allow including a reset / main action button with configuration rather than slots
- swap the tool name and toolbox branding positions in the header
- see about resolving the scroll issue, if at all possible
- add breakpoints to the storybook examples
- rename to just be called toolbox