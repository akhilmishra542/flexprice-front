import type { Meta, StoryObj } from '@storybook/react';
import UsageBar from './UsageBar';

const meta: Meta<typeof UsageBar> = {
	title: 'Molecules/UsageBar',
	component: UsageBar,

	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UsageBar>;

export const Default: Story = {
	args: {
		label: 'API Usage',
		used: 350,
		total: 1000,
	},
};

export const NearlyFull: Story = {
	args: {
		label: 'Credits',
		used: 920,
		total: 1000,
	},
};

export const Full: Story = {
	args: {
		label: 'Storage',
		used: 1000,
		total: 1000,
	},
};
