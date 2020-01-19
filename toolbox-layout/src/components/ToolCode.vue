<template>
	<codemirror
		:value="value"
		:options="optionsWithDefaults"
		@input="onInput"/>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/cobalt.css';

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
	computed: {
		optionsWithDefaults() {
			const defaults = {
				theme: 'cobalt'
			};
			return {
				...defaults,
				...this.options
			}
		}
	},
	methods: {
		onInput(data) {
			this.$emit('input', data);
		}
	}
}
</script>