import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolLayout from '../../src/components/ToolLayout.vue';
import ToolTaskbar from '../../src/components/ToolTaskbar.vue';
import ToolButton from '../../src/components/ToolButton.vue';
import Doc from './doc.md';

export default {
	title: 'ToolTaskbar',
	component: ToolTaskbar,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const Default = () => ({
	components: { ToolTaskbar, ToolLayout },
	template: `
		<tool-layout name="Demo">
			<tool-taskbar>
				<p>Simple taskbar content.</p>
			</tool-taskbar>
		</tool-layout>
	`
});


export const withButtons = () => ({
	components: { ToolTaskbar, ToolLayout, ToolButton },
	methods: {
		calculateButtonClick: action('calculateButtonClick'),
		resetButtonClick: action('resetButtonClick')
	},
	template: `
		<tool-layout name="Demo">
			<tool-taskbar>
				<tool-button
					class="ml-3"
					size="lg"
					v-text="'Calculate'"
					@click.native="calculateButtonClick"/>
				<tool-button
					class="ml-3"
					size="sm"
					variant="secondary"
					v-text="'reset'"
					@click.native="resetButtonClick"/>
			</tool-taskbar>
		</tool-layout>
	`
});
