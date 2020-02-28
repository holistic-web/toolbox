import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolLayout from '../../src/components/ToolLayout.vue';
import Doc from './doc.md';

export default {
	title: 'ToolLayout',
	component: ToolLayout,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const Default = () => ({
	components: { ToolLayout },
	props: {
		content: { default: text('content', 'Check out this ToolLayout component!') },
		name: { default: text('name', 'Demo') }
	},
	methods: { onChange: action('updated') },
	template: `
		<tool-layout name="Demo">
			{{ content }}
		</tool-layout>
	`
});
