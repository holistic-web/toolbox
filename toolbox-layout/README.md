# Toolbox Layout

This is a shared Vue.js component library for use in the Holistic Toolbox. It was made following the steps outlined in [this article](https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3).

It is published on npm at: https://www.npmjs.com/package/toolbox-layout

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

### Building
This project can be built as a library with the following commands
```
npm install
npm run build-bundle
```

### Publishing
This project can be published with the following command if correctly authorised
```
npm publish --access public
```

## Roadmap
Some things we'd like to look into in the future are:
- publishing this library under the @holistics organisation
- allowing individual components to be imported rather then all or nothing