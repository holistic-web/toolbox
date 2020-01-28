<template>
	<div class="NumberConverter">

		<tool-markdown :markdown="`
Enter a number:
		`"/>

		<tool-code
			class="NumberConverter__input"
			v-model="num"
			:options="codeOptions"
			:autoSize="true"/>

		<tool-taskbar>
			<tool-button
				size="lg"
				class="NumberConverter__button"
				v-text="'Copy Output'"
				v-clipboard="jsonString"/>
		</tool-taskbar>

	</div>
</template>

<script>
export default {
	data() {
		return {
			num: 0
		}
	}
}
</script>


<style lang="scss">
@import 'toolbox-layout/src/styles/theme';

.NumberConverter {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: $tool-padding;
}
</style>
