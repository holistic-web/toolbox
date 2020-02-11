<template>
	<div class="JsonDiff">

		<tool-markdown :markdown="`
This is tool compares two JSON objects using the library [json-diff](https://www.npmjs.com/package/json-diff).
		`"/>


		<tool-taskbar>
			It can be a good idea to add buttons to the taskbar...
		</tool-taskbar>

	</div>
</template>


<style lang="scss">
@import '@holistic-web/toolbox-layout/src/styles/theme';

.JsonDiff {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;
}
</style>
