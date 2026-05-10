import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

/**
 * Spinner loading indicator component.
 *
 * Supports:
 * - custom sizes
 * - custom class names
 * - loading states
 */
const meta: Meta<typeof Spinner> = {
	title: 'Atoms/Spinner',
	component: Spinner,
	tags: ['autodocs'],

	argTypes: {
		size: {
			control: 'number',
		},

		className: {
			control: 'text',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
	args: {
		size: 24,
	},
};

export const Small: Story = {
	args: {
		size: 16,
	},
};

export const Large: Story = {
	args: {
		size: 48,
	},
};

export const CustomClass: Story = {
	args: {
		size: 32,
		className: 'text-blue-500',
	},
};
