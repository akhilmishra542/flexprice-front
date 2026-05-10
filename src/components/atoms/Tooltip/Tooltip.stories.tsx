import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,

  parameters: {
    layout: 'centered',
  },

  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-24">
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs'],

  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },

    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },

    delayDuration: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    side: 'top',
    align: 'center',
    delayDuration: 200,
    children: <Button>Hover Me</Button>,
  },
};

export const Informational: Story = {
  args: {
    content: 'Used to show additional information.',
    children: <Button variant="secondary">Info Tooltip</Button>,
  },
};

export const WithDelay: Story = {
  args: {
    content: 'This tooltip appears after 1 second.',
    delayDuration: 1000,
    children: <Button>Hover with Delay</Button>,
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    side: 'top',
    children: <Button>Top</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    side: 'bottom',
    children: <Button>Bottom</Button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    side: 'left',
    children: <Button>Left</Button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    side: 'right',
    children: <Button>Right</Button>,
  },
};

export const LongText: Story = {
  args: {
    content:
      'This is a longer tooltip message used to explain detailed information to the user.',
    children: <Button variant="ghost">Long Tooltip</Button>,
  },
};