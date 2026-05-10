import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import StatusBadge from './StatusBadge';
import type { StatusType } from './StatusBadge';


const meta: Meta<typeof StatusBadge> = {
	title: 'Atoms/StatusBadge',
	component: StatusBadge,

	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Domain-aware status chip built on top of the shadcn `Badge`. ' +
					'Pass any FlexPrice status string and the correct colour + label renders automatically.',
			},
		},
	},

	decorators: [
		(Story) => (
			<div className="flex items-center justify-center p-8">
				<Story />
			</div>
		),
	],

	tags: ['autodocs'],

	argTypes: {
		status: {
			description: 'Domain status string — drives color and default label.',
			control: 'select',
			options: [
				'active', 'archived', 'draft',
				'paid', 'pending', 'void', 'failed',
				'cancelled', 'expired', 'trial', 'paused',
				'processed',
			] satisfies StatusType[],
			table: { defaultValue: { summary: 'active' } },
		},
		showDot: {
			description: 'Show the coloured dot indicator before the label.',
			control: 'boolean',
			table: { defaultValue: { summary: 'true' } },
		},
		label: {
			description: 'Override the auto-derived label text.',
			control: 'text',
		},
		className: {
			control: 'text',
		},
	},
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;


/** Fully interactive playground — tweak every prop in the Controls panel. */
export const Default: Story = {
	args: {
		status: 'active',
		showDot: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Active');
		await expect(badge).toBeInTheDocument();
	},
};

// ---------------------------------------------------------------------------
// Plan statuses  (Product Catalog → Plans)
// ---------------------------------------------------------------------------

/** Active plan — green. The most common state in the Plans table. */
export const PlanActive: Story = {
	name: 'Plan / Active',
	args: { status: 'active' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText('Active')).toBeInTheDocument();
	},
};

/** Archived plan — gray. Shown when a plan is removed from the catalog. */
export const PlanArchived: Story = {
	name: 'Plan / Archived',
	args: { status: 'archived' },
};

/** Draft plan — yellow. Plan created but not yet published. */
export const PlanDraft: Story = {
	name: 'Plan / Draft',
	args: { status: 'draft' },
};

// ---------------------------------------------------------------------------
// Invoice statuses  (Billing → Invoices)
// ---------------------------------------------------------------------------

/** Paid invoice — green. Payment confirmed. */
export const InvoicePaid: Story = {
	name: 'Invoice / Paid',
	args: { status: 'paid' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText('Paid')).toBeInTheDocument();
	},
};

/** Pending invoice — orange. Awaiting payment collection. */
export const InvoicePending: Story = {
	name: 'Invoice / Pending',
	args: { status: 'pending' },
};

/** Draft invoice — yellow. Not yet finalized or sent. */
export const InvoiceDraft: Story = {
	name: 'Invoice / Draft',
	args: { status: 'draft' },
};

/** Void invoice — gray. Cancelled before payment. */
export const InvoiceVoid: Story = {
	name: 'Invoice / Void',
	args: { status: 'void' },
};

/** Failed invoice — red. Payment attempt failed. */
export const InvoiceFailed: Story = {
	name: 'Invoice / Failed',
	args: { status: 'failed' },
};

// ---------------------------------------------------------------------------
// Subscription statuses  (Billing → Subscriptions)
// ---------------------------------------------------------------------------

/** Active subscription — green. */
export const SubscriptionActive: Story = {
	name: 'Subscription / Active',
	args: { status: 'active' },
};

/** Trial subscription — blue. Customer in a free trial period. */
export const SubscriptionTrial: Story = {
	name: 'Subscription / Trial',
	args: { status: 'trial' },
};

/** Paused subscription — yellow. Billing temporarily halted. */
export const SubscriptionPaused: Story = {
	name: 'Subscription / Paused',
	args: { status: 'paused' },
};

/** Cancelled subscription — red. */
export const SubscriptionCancelled: Story = {
	name: 'Subscription / Cancelled',
	args: { status: 'cancelled' },
};

/** Expired subscription — gray. Past end date with no renewal. */
export const SubscriptionExpired: Story = {
	name: 'Subscription / Expired',
	args: { status: 'expired' },
};

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

/** No dot — for compact UIs where the color alone is sufficient. */
export const NoDot: Story = {
	args: { status: 'active', showDot: false },
};

/** Custom label override — useful when the API returns a different string. */
export const CustomLabel: Story = {
	args: { status: 'active', label: 'Live', showDot: true },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Should show the custom label, not the default "Active"
		await expect(canvas.getByText('Live')).toBeInTheDocument();
		await expect(canvas.queryByText('Active')).not.toBeInTheDocument();
	},
};

/** Unknown status — falls back to a neutral gray "Unknown" chip. */
export const UnknownStatus: Story = {
	args: { status: 'some-unknown-status' as StatusType },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText('Unknown')).toBeInTheDocument();
	},
};

// ---------------------------------------------------------------------------
// Overview — all statuses in a grid (great for the Docs page)
// ---------------------------------------------------------------------------

/** All statuses side by side — the full FlexPrice status vocabulary. */
export const AllStatuses: Story = {
	name: 'Overview — All statuses',
	render: () => (
		<div className="space-y-4 p-4">
			<div>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
					Plan
				</p>
				<div className="flex flex-wrap gap-2">
					<StatusBadge status="active" />
					<StatusBadge status="draft" />
					<StatusBadge status="archived" />
				</div>
			</div>

			<div>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
					Invoice
				</p>
				<div className="flex flex-wrap gap-2">
					<StatusBadge status="paid" />
					<StatusBadge status="pending" />
					<StatusBadge status="draft" />
					<StatusBadge status="void" />
					<StatusBadge status="failed" />
				</div>
			</div>

			<div>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
					Subscription
				</p>
				<div className="flex flex-wrap gap-2">
					<StatusBadge status="active" />
					<StatusBadge status="trial" />
					<StatusBadge status="paused" />
					<StatusBadge status="cancelled" />
					<StatusBadge status="expired" />
				</div>
			</div>

			<div>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
					Events
				</p>
				<div className="flex flex-wrap gap-2">
					<StatusBadge status="processed" />
					<StatusBadge status="pending" />
					<StatusBadge status="failed" />
				</div>
			</div>

			<div>
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
					Without dot
				</p>
				<div className="flex flex-wrap gap-2">
					<StatusBadge status="active" showDot={false} />
					<StatusBadge status="paid" showDot={false} />
					<StatusBadge status="failed" showDot={false} />
				</div>
			</div>
		</div>
	),
};

