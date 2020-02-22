import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolHeader from '../../src/components/ToolHeader.vue';
import Doc from './doc.md';

export default {
	title: 'ToolHeader',
	component: ToolHeader,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const Default = () => ({
	components: { ToolHeader },
	props: {
		name: { default: text('name', 'Example App') }
	},
	methods: { onChange: action('updated') },
	template: `
		<tool-header :name="name"/>
	`
});
