import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolLayout from '../../src/components/ToolLayout.vue';
import Doc from './doc.md';

export default {
	title: 'ToolHeader',
	component: ToolLayout,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const simple = () => ({
	components: { ToolLayout },
	data() {
		return { value: 'Check out this ToolHeader component!' };
	},
	methods: { onChange: action('updated') },
	template: `
		<tool-layout name="Demo">

		</tool-layout>
	`
});
