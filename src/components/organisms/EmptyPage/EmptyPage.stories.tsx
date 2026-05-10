import type { Meta, StoryObj } from '@storybook/react';
import EmptyPage from './EmptyPage';

const meta: Meta<typeof EmptyPage> = {
	title: 'Organisms/EmptyPage',
	component: EmptyPage,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmptyPage>;

export const Default: Story = {
	args: {
		heading: 'Customers',
		addButtonLabel: 'Create Customer',

		emptyStateCard: {
			heading: 'No customers found',
			description: 'Create your first customer to start managing subscriptions.',
			buttonLabel: 'Create Customer',
			buttonAction: () => alert('Create clicked'),
		},

		tutorials: [
			{
				title: 'How to create a customer',
				imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
			},
			{
				title: 'How billing works',
				imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
			},
			{
				title: 'Create subscriptions',
				imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
			},
		],
	},
};
