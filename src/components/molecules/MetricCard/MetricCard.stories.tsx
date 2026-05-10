import type { Meta, StoryObj } from '@storybook/react';
import MetricCard from './MetricCard';
import { DollarSign, Users, Activity } from 'lucide-react';

const meta: Meta<typeof MetricCard> = {
  title: 'Molecules/MetricCard',
  component: MetricCard,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
  args: {
    label: 'Revenue',
    value: '$12,450',
    trend: '+12%',
    trendDirection: 'up',
    icon: <DollarSign className="h-5 w-5" />,
  },
};

export const NegativeTrend: Story = {
  args: {
    label: 'Churn Rate',
    value: '4.2%',
    trend: '-8%',
    trendDirection: 'down',
    icon: <Activity className="h-5 w-5" />,
  },
};

export const UsersMetric: Story = {
  args: {
    label: 'Customers',
    value: '2,430',
    trend: '+24%',
    trendDirection: 'up',
    icon: <Users className="h-5 w-5" />,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: '',
    value: '',
  },
};
