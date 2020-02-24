<template>
	<div class="{{tool-name-uppercase}}">

		<tool-markdown :markdown="`
Documentation for your new tool and any relevant links go here...
		`"/>


		<tool-taskbar>
			It can be a good idea to add buttons to the taskbar...
		</tool-taskbar>

	</div>
</template>


<style lang="scss">
@import '@holistic-web/layout/src/styles/theme';

.{{tool-name-uppercase}} {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;
}
</style>
