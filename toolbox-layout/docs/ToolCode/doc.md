# ToolCode

## Usage
Use this component wherever we have a large programmatic text field. It provides some standard formatting and allows us to use the tab character in our inputs.

This component is powered by vue-codemirror.

## Props
| name     | type    | default           | description         |
|----------|---------|-------------------|---------------------|
| autoSize | Boolean | `false`           | grow with content   |
| options  | Object  | `{}`              | codemirror settings |
| value    | String  | **required**      | the input's value   |

## Events
- `@input` is fired whenever value is updated.