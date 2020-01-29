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

		<tool-taskbar v-if="num">
			<template v-if="!converted">
				<tool-button
					size="lg"
					class="NumberConverter__button"
					v-text="'To Hexadecimal'"
					v-clipboard="num"/>
				<tool-button
					size="lg"
					class="NumberConverter__button"
					v-text="'To Octal'"
					v-clipboard="num"/>
				<tool-button
					size="lg"
					class="NumberConverter__button"
					v-text="'To Binary'"
					v-clipboard="num"/>
			</template>

			<template v-else>
				<tool-button
					size="lg"
					class="NumberConverter__button"
					v-text="'Copy Output'"
					v-clipboard="jsonString"/>
				<tool-button
					size="sm"
					class="NumberConverter__button"
					variant="secondary"
					v-text="'Reset'"
					@click.native="reset"/>
			</template>
		</tool-taskbar>

	</div>
</template>

<script>
export default {
	data() {
		return {
			converted: false,
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

	&__button {
		margin-left: 1rem;
		height: fit-content;
	}
}
</style>
