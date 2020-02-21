import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolLayout from '../../src/components/ToolLayout.vue';
import ToolTaskbar from '../../src/components/ToolTaskbar.vue';
import Doc from './doc.md';

export default {
	title: 'ToolTaskbar',
	component: ToolTaskbar,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const simple = () => ({
	components: { ToolTaskbar, ToolLayout },
	data() {
		return { value: 'Check out this ToolTaskbar component!' };
	},
	methods: { onChange: action('updated') },
	template: `
		<tool-layout name="Demo">
			<tool-taskbar
				v-model="value"
				@change="onChange"/>
		</tool-layout>
	`
});
