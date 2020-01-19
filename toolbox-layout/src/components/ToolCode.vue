<template>
	<codemirror
		:value="value"
		:options="options"
		@input="onInput"/>
</template>

<script>
import codemirror from 'codemirror';

export default {
	components: {
		codemirror
	},
	props: {
		value: {
			type: String,
			required: true
		},
		options: {
			type: Object,
			default: () => {}
		}
	},
	methods: {
		onInput(data) {
			this.$emit('input', data);
		}
	}
}
</script>