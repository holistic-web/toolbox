import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolLayout from '../../src/components/ToolLayout.vue';
import ToolCode from '../../src/components/ToolCode.vue';
import Doc from './doc.md';
import jsonString from './jsonString';

export default {
	title: 'ToolCode',
	component: ToolCode,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const Default = () => ({
	components: { ToolCode, ToolLayout },
	data() {
		return { value: 'Check out this ToolCode component!' };
	},
	methods: { onInput: action('input') },
	template: `
		<tool-layout name="Demo">
			<tool-code
				v-model="value"
				@input="onInput"/>
		</tool-layout>
	`
});

export const JSON = () => ({
	components: { ToolCode, ToolLayout },
	props: {
		lineNumbers: { default: boolean('options.lineNumbers', true) },
		mode: { default: text('options.mode', 'JSON') }
	},
	data() {
		return { value: jsonString };
	},
	computed: {
		options() {
			return { lineNumbers: this.lineNumbers, mode: this.mode };

		}
	},
	methods: { onInput: action('input') },
	template: `
		<tool-layout name="Demo">
			<tool-code
				v-model="value"
				:options="options"
				@input="onInput"/>
		</tool-layout>
	`
});

export const AutoSize = () => ({
	components: { ToolCode, ToolLayout },
	props: {
		autoSize: { default: boolean('autoSize', true) }
	},
	data() {
		return { value: 'Check out this ToolCode component!' };
	},
	methods: { onInput: action('input') },
	template: `
		<tool-layout name="Demo">
			<tool-code
				v-model="value"
				:autoSize="autoSize"
				@input="onInput"/>
		</tool-layout>
	`
});
