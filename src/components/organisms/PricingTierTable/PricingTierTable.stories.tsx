import type { Meta, StoryObj } from '@storybook/react';
import PricingTierTable from './PricingTierTable';

const meta: Meta<typeof PricingTierTable> = {
  title: 'Organisms/PricingTierTable',
  component: PricingTierTable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PricingTierTable>;

export const Default: Story = {
  args: {
    title: 'API Usage Pricing',
    tiers: [
      {
        upto: '0 - 1,000 requests',
        price: '$0.10 / request',
      },
      {
        upto: '1,001 - 10,000 requests',
        price: '$0.08 / request',
      },
      {
        upto: '10,001+ requests',
        price: '$0.05 / request',
      },
    ],
  },
};

export const GraduatedPricing: Story = {
  args: {
    title: 'Graduated Pricing',
    tiers: [
      {
        upto: 'First 100 GB',
        price: '$0.12 / GB',
      },
      {
        upto: 'Next 400 GB',
        price: '$0.09 / GB',
      },
      {
        upto: '500+ GB',
        price: '$0.05 / GB',
      },
    ],
  },
};
