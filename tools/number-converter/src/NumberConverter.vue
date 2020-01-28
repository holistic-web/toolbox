<template>
	<div class="NumberConverter">

		<tool-markdown :markdown="`
Documentation for your new tool goes here...
		`"/>


		<tool-taskbar>
			<tool-button
				size="lg"
				class="JsonFormatter__button"
				v-text="'Copy Output'"
				v-clipboard="jsonString"/>
		</tool-taskbar>

	</div>
</template>


<style lang="scss">
@import 'toolbox-layout/src/styles/theme';

.NumberConverter {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;
}
</style>
