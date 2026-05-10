import type { Meta, StoryObj } from '@storybook/react';
import SidebarNav from './SidebarNav';

const meta: Meta<typeof SidebarNav> = {
  title: 'Organisms/SidebarNav',
  component: SidebarNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SidebarNav>;

export const Default: Story = {};
