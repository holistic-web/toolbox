import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolLayout from '../../src/components/ToolLayout.vue';
import ToolMarkdown from '../../src/components/ToolMarkdown.vue';
import Doc from './doc.md';

export default {
	title: 'ToolMarkdown',
	component: ToolMarkdown,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const simple = () => ({
	components: { ToolMarkdown, ToolLayout },
	data() {
		return { value: 'Check out this ToolMarkdown component!' };
	},
	methods: { onChange: action('updated') },
	template: `
		<tool-layout name="Demo">
			<tool-markdown
				v-model="value"
				@change="onChange"/>
		</tool-layout>
	`
});
