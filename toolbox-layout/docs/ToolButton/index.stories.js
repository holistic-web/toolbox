import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ToolLayout from '../../src/components/ToolLayout.vue';
import ToolButton from '../../src/components/ToolButton.vue';
import Doc from './doc.md';

export default {
	title: 'ToolButton',
	component: ToolButton,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const simple = () => ({
	components: { ToolButton, ToolLayout },
	props: {
		text: {
			default: text('text', 'Demo Button')
		}
	},
	methods: { action: action('clicked') },
	template: `
		<tool-layout name="Demo">
			<tool-button
				v-text="text"
				@click.native="action"/>
		</tool-layout>
	`
});

export const advanced = () => ({
	components: { ToolButton, ToolLayout },
	props: {
		text: {
			default: text('text', 'Demo Button')
		},
		size: {
			default: text('size', 'lg')
		},
		variant: {
			default: text('variant', 'outline-primary')
		}
	},
	methods: { action: action('clicked') },
	template: `
		<tool-layout name="Demo">
			<tool-button
				v-text="text"
				:size="size"
				:variant="variant"
				@click.native="action"/>
		</tool-layout>
	`
});

export const linkToNewTab = () => ({
	components: { ToolButton, ToolLayout },
	props: {
		text: { default: text('text', 'Demo Button') },
		href: { default: text('href', 'http://google.com') },
		target: { default: text('target', '_blank') }
	},
	methods: { action: action('clicked') },
	template: `
		<tool-layout name="Demo">
			<tool-button
				v-text="text"
				:href="href"
				:target="target"
				@click.native="action"/>
		</tool-layout>
	`
});
