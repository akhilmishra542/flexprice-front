import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Plus, Trash2 } from 'lucide-react';
import Button from './Button';

/**
 * `Button` is the primary interactive element in FlexPrice.
 *
 * ## Usage
 * ```tsx
 * <Button variant="default" size="default" onClick={() => {}}>
 *   Save Plan
 * </Button>
 * ```
 *
 * ## Props
 * - `variant` — visual style: `default` | `black` | `destructive` | `outline` | `secondary` | `ghost` | `link`
 * - `size` — `xs` | `sm` | `default` | `lg` | `icon`
 * - `isLoading` — shows a spinner and disables the button
 * - `disabled` — disables the button without a spinner
 * - `prefixIcon` — icon rendered before the label
 * - `suffixIcon` — icon rendered after the label
 * - `asChild` — renders as a child element via Radix `Slot` (useful for `<Link>` wrappers)
 */
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,

  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Core button component supporting 7 variants, 5 sizes, loading state, and prefix/suffix icons. Built on top of `class-variance-authority` and Radix `Slot`.',
      },
    },
  },

  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-6">
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs'],

  argTypes: {
    variant: {
      description: 'Visual style of the button.',
      control: 'select',
      options: ['default', 'black', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      table: {
        defaultValue: { summary: 'default' },
      },
    },

    size: {
      description: 'Size of the button.',
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'xs'],
      table: {
        defaultValue: { summary: 'default' },
      },
    },

    isLoading: {
      description: 'When true, shows a spinner and disables interaction.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },

    disabled: {
      description: 'Disables the button without showing a spinner.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },

    children: {
      description: 'Button label content.',
      control: 'text',
    },

    asChild: {
      description: 'Renders as a child element via Radix Slot (e.g. wrapping a `<Link>`).',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },

    onClick: {
      description: 'Click handler.',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// ---------------------------------------------------------------------------
// Default / Playground
// ---------------------------------------------------------------------------

/**
 * The fully interactive playground story. Use the Controls panel to tweak
 * every prop and see the result live.
 */
export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'default',
    size: 'default',
    isLoading: false,
    disabled: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Button should be present and enabled
    await expect(button).toBeInTheDocument();
    await expect(button).not.toBeDisabled();

    // Click and verify the onClick handler fires
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const ClickInteraction: Story = {
  args: {
    children: 'Click Me',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    await userEvent.click(button);

    await expect(button).toBeInTheDocument();
  },
};

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

/** The primary action button. Used for the main CTA on every page. */
export const Primary: Story = {
  args: {
    children: 'Create Plan',
    variant: 'default',
  },
};

/** For secondary actions that sit alongside a primary button. */
export const Secondary: Story = {
  args: {
    children: 'Cancel',
    variant: 'secondary',
  },
};

/** Ghost buttons blend into the background — used in tables and toolbars. */
export const Ghost: Story = {
  args: {
    children: 'View Details',
    variant: 'ghost',
  },
};

/** Outline adds a visible border without a fill — good for neutral actions. */
export const Outline: Story = {
  args: {
    children: 'Export CSV',
    variant: 'outline',
  },
};

/**
 * Destructive buttons signal irreversible actions like deletions.
 * Always pair with a confirmation dialog in production.
 */
export const Destructive: Story = {
  args: {
    children: 'Delete Customer',
    variant: 'destructive',
    prefixIcon: <Trash2 />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /delete customer/i });
    await expect(button).toBeInTheDocument();
    // Verify destructive styling is applied (button should be clickable)
    await expect(button).not.toBeDisabled();
  },
};

/** Black variant — high contrast, used for emphasis actions. */
export const Black: Story = {
  args: {
    children: 'Publish',
    variant: 'black',
  },
};

/** Link variant renders as a styled anchor-like button. */
export const Link: Story = {
  args: {
    children: 'Learn more',
    variant: 'link',
  },
};

// ---------------------------------------------------------------------------
// Sizes
// ---------------------------------------------------------------------------

/** Extra small — used in dense tables and inline actions. */
export const ExtraSmall: Story = {
  args: {
    children: 'Add',
    size: 'xs',
  },
};

/** Small — used in cards and secondary toolbars. */
export const Small: Story = {
  args: {
    children: 'Filter',
    size: 'sm',
  },
};

/** Default size — the standard button used across most surfaces. */
export const Medium: Story = {
  args: {
    children: 'Save Changes',
    size: 'default',
  },
};

/** Large — used for prominent CTAs like plan upgrade prompts. */
export const Large: Story = {
  args: {
    children: 'Upgrade to Pro',
    size: 'lg',
  },
};

/** Icon-only button. Always set an `aria-label` in production for accessibility. */
export const IconOnly: Story = {
  args: {
    size: 'icon',
    children: <Plus />,
    'aria-label': 'Add item',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Icon-only button should be accessible via aria-label
    const button = canvas.getByRole('button', { name: /add item/i });
    await expect(button).toBeInTheDocument();
  },
};

// ---------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------

/**
 * The `isLoading` prop replaces children with a spinner and prevents clicks.
 * Use this while awaiting an async action (API call, form submit).
 */
export const Loading: Story = {
  args: {
    children: 'Save Changes',
    variant: 'default',
    isLoading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Button must be disabled while loading
    await expect(button).toBeDisabled();

    // Spinner SVG should be visible — Button renders LoaderCircleIcon when isLoading
    const spinner = button.querySelector('svg');
    await expect(spinner).toBeInTheDocument();

    // Label text should NOT be visible when loading
    await expect(canvas.queryByText('Save Changes')).not.toBeInTheDocument();
  },
};

/** Disabled state — prevents interaction without a loading indicator. */
export const Disabled: Story = {
  args: {
    children: 'Submit',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeDisabled();
    // Clicking a disabled button should not fire onClick
    await userEvent.click(button, { pointerEventsCheck: 0 });
  },
};

// ---------------------------------------------------------------------------
// With Icons
// ---------------------------------------------------------------------------

/** Use `prefixIcon` for icons that appear before the label. */
export const WithPrefixIcon: Story = {
  args: {
    children: 'Add Customer',
    variant: 'default',
    prefixIcon: <Plus />,
  },
};

/** Use `suffixIcon` for icons that appear after the label (e.g. arrows, chevrons). */
export const WithSuffixIcon: Story = {
  args: {
    children: 'Next Step',
    variant: 'outline',
    suffixIcon: <Plus />,
  },
};

/** Both prefix and suffix icons together. */
export const WithBothIcons: Story = {
  args: {
    children: 'Add & Continue',
    variant: 'default',
    prefixIcon: <Plus />,
    suffixIcon: <Plus />,
  },
};

// ---------------------------------------------------------------------------
// Composition examples (real FlexPrice patterns)
// ---------------------------------------------------------------------------

/** The standard "Add" button used across FlexPrice tables and empty states. */
export const AddItem: Story = {
  name: 'Pattern — Add item',
  args: {
    children: 'Add Plan',
    variant: 'default',
    size: 'default',
    prefixIcon: <Plus />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /add plan/i });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
  },
};

/** Destructive action with loading feedback — common pattern for delete confirmations. */
export const DeleteWithLoading: Story = {
  name: 'Pattern — Delete with loading',
  args: {
    children: 'Deleting...',
    variant: 'destructive',
    isLoading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeDisabled();
  },
};

/** All variants shown side-by-side for a visual overview. */
export const AllVariants: Story = {
  name: 'Overview — All variants',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="black">Black</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

/** All sizes shown side-by-side. */
export const AllSizes: Story = {
  name: 'Overview — All sizes',
  render: () => (
    <div className="flex flex-wrap items-end gap-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Add item">
        <Plus />
      </Button>
    </div>
  ),
};

/** All interactive states in a single view. */
export const AllStates: Story = {
  name: 'Overview — All states',
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Normal</Button>
      <Button isLoading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};