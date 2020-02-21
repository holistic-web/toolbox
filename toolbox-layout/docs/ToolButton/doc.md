# ToolButton

## Usage
Use this component wherever we have method to call on click in our UIs. The buttons should typically be contained within a `ToolTaskbar`.

## Props
| name    | type   | default             | description     |
|---------|--------|---------------------|-----------------|
| size    | String | `null`              | button size     |
| variant | String | `'outline-primary'` | bootstrap theme |
_All props on boostrap-vue's [b-button](https://bootstrap-vue.js.org/docs/components/button) are available thanks to binding._

## Events
- `@click.native` handles the click event
	_We aren't sure why we need to apprend `.native` currently._