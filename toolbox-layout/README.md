# Toolbox Layout

This is a shared [Vue.js](https://vuejs.org) component library for use in the Toolbox. [Boostrap Vue](https://bootstrap-vue.js.org/) is used to drive the core of the functionality.

It is published on npm at: https://www.npmjs.com/package/toolbox-layout

A demo can be found here: https://toolbox-layout-stories.firebaseapp.com

## Usage
To use this library in a Vue app, simply include:
```
import 'toolbox-layout';
import 'toolbox-layout/dist/toolbox-layout.css';
```
in your main.js file to make the components available.

The following SCSS variables can also be accessed with: `@import 'toolbox-layout/src/theme'`.
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
Analytics are being implemented through [Google Tag Manager](https://tagmanager.google.com/#/home) (GTM)

The main benefit of GTM is that we can implement analytics through a console rather than programatically

Using a simple GTM Tag on the index.html of each site, we can implement analytics events (and much more) across the project 

Here are some useful links:
- [GTM Quick Start](https://developers.google.com/tag-manager/quickstart)
- [Analytics Events through GTM](https://support.google.com/tagmanager/answer/6106716?hl=en)

### Notes and Caveats
- This project uses [storybook](https://storybook.js.org/) to provide visual documentation. This storybook deployment is released automatically by the  `/.github/workflows/deploy-toolbox-layout-stories` action.

## Roadmap
- allowing individual components to be imported rather then all or nothing
- use storyboard to create a demo / documentation resource for this component library
- allow including a reset / main action button with configuration rather than slots
- swap the tool name and toolbox branding positions in the header
- see about resolving the scroll issue, if at all possible
- add breakpoints to the storybook examples
- rename to just be called toolbox
