import type { Meta, StoryObj } from '@storybook/react';

import DataTable from './DataTable';

const sampleData = [
  {
    customer: 'OpenAI',
    revenue: '$1200',
    status: 'Active',
  },
  {
    customer: 'Google',
    revenue: '$950',
    status: 'Pending',
  },
  {
    customer: 'Microsoft',
    revenue: '$2400',
    status: 'Active',
  },
  {
    customer: 'Stripe',
    revenue: '$1700',
    status: 'Paused',
  },
  {
    customer: 'Netflix',
    revenue: '$800',
    status: 'Cancelled',
  },
  {
    customer: 'Amazon',
    revenue: '$5000',
    status: 'Active',
  },
];

const largeData = Array.from({ length: 10000 }).map((_, index) => ({
  customer: `Customer ${index + 1}`,
  revenue: `$${(index + 1) * 100}`,
  status: index % 2 === 0 ? 'Active' : 'Pending',
}));

const meta: Meta<typeof DataTable> = {
  title: 'Molecules/DataTable',

  component: DataTable,

  parameters: {
    layout: 'padded',
  },

  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DataTable>;

const columns = [
  {
    key: 'customer',
    header: 'Customer',
  },
  {
    key: 'revenue',
    header: 'Revenue',
  },
  {
    key: 'status',
    header: 'Status',
  },
];

export const Default: Story = {
  args: {
    columns,
    data: sampleData,
    pageSize: 3,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: sampleData,
    loading: true,
    pageSize: 3,
  },
};

export const EmptyState: Story = {
  args: {
    columns,
    data: [],
    pageSize: 3,
    emptyMessage: 'No customers found.',
  },
};

export const LargeDataset: Story = {
  args: {
    columns,
    data: largeData,
    pageSize: 20,
  },
};

export const Virtualized: Story = {
  args: {
    columns,
    data: largeData,
    virtualized: true,
  },
};