import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolLayout from '../../src/components/ToolLayout.vue';
import ToolCode from '../../src/components/ToolCode.vue';
import Doc from './doc.md';

export default {
	title: 'ToolCode',
	component: ToolCode,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const simple = () => ({
	components: { ToolCode, ToolLayout },
	data() {
		return { value: 'Check out this ToolCode component!' };
	},
	methods: { onChange: action('updated') },
	template: `
		<tool-layout name="Demo">
			<tool-code
				v-model="value"
				@change="onChange"/>
		</tool-layout>
	`
});
