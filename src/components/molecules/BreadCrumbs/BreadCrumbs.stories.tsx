import type { Meta, StoryObj } from '@storybook/react';
import BreadCrumbs from './BreadCrumbs';

const meta: Meta<typeof BreadCrumbs> = {
  title: 'Molecules/BreadCrumbs',
  component: BreadCrumbs,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BreadCrumbs>;

export const Default: Story = {};

export const Dashboard: Story = {};

export const Billing: Story = {};

export const CustomerDetails: Story = {};