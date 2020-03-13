# ToolLayout

## Usage
Standard layout component that is included inside of `ToolboxLayout`. This goes best as the root node of your app.

It renders a `ToolHeader` at the top followed by whatever is given in the component's default `<slot/>`.

## Props
| name | type   | default      | description |
|------|--------|--------------|-------------|
| name | String | **required** | page title  |

## Events
_None_

## Notes and Caveats
- The tool itself should go in an element with class `.ToolWrapper`, with the taskbar being the only element outside:
	```html
	<template>
		<div class="JsonFormatter">
			<div class="ToolWrapper">
				<!-- ... -->
			</div>
			<tool-taskbar/>
		</div>
	</template>
	```