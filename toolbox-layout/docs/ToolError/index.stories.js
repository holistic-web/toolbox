import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolLayout from '../../src/components/ToolLayout.vue';
import ToolError from '../../src/components/ToolError.vue';
import Doc from './doc.md';

export default {
	title: 'ToolError',
	component: ToolError,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const simple = () => ({
	components: { ToolError, ToolLayout },
	data() {
		return { value: 'Check out this ToolError component!' };
	},
	methods: { onChange: action('updated') },
	template: `
		<tool-layout name="Demo">
			<tool-error
				v-model="value"
				@change="onChange"/>
		</tool-layout>
	`
});
