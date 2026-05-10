import type { Meta, StoryObj } from '@storybook/react';
import InvoiceStatusBadge from './InvoiceStatusBadge';

const meta: Meta<typeof InvoiceStatusBadge> = {
  title: 'Molecules/InvoiceStatusBadge',
  component: InvoiceStatusBadge,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InvoiceStatusBadge>;

export const Paid: Story = {
  args: {
    status: 'paid',
  },
};

export const Pending: Story = {
  args: {
    status: 'pending',
  },
};

export const Draft: Story = {
  args: {
    status: 'draft',
  },
};

export const Void: Story = {
  args: {
    status: 'void',
  },
};

export const Failed: Story = {
  args: {
    status: 'failed',
  },
};

export const Refunded: Story = {
  args: {
    status: 'refunded',
  },
};
