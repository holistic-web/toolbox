import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolLayout from '../../src/components/ToolLayout.vue';
import ToolMarkdown from '../../src/components/ToolMarkdown.vue';
import Doc from './doc.md';
import exampleMarkdown from './example.md';

export default {
	title: 'ToolMarkdown',
	component: ToolMarkdown,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const Default = () => ({
	components: { ToolMarkdown, ToolLayout },
	props: {
		markdown: { default: text('markdown', exampleMarkdown) }
	},
	methods: { onChange: action('updated') },
	template: `
		<tool-layout name="Demo">
			<tool-markdown :markdown="markdown"/>
		</tool-layout>
	`
});
