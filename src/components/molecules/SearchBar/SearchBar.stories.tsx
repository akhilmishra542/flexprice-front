import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';

const meta: Meta<typeof SearchBar> = {
	title: 'Molecules/SearchBar',
	component: SearchBar,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
	args: {
		placeholder: 'Search customers...',
	},
};

export const WithText: Story = {
	args: {
		value: 'FlexPrice',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Disabled search...',
	},
};
