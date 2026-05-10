import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Domain status types
// ---------------------------------------------------------------------------

export type PlanStatus = 'active' | 'archived' | 'draft';
export type InvoiceStatus = 'paid' | 'pending' | 'draft' | 'void' | 'failed' | 'refunded';
export type SubscriptionStatus = 'active' | 'cancelled' | 'expired' | 'trial' | 'paused';
export type EventStatus = 'processed' | 'failed' | 'pending';

export type StatusType = PlanStatus | InvoiceStatus | SubscriptionStatus | EventStatus;

// ---------------------------------------------------------------------------
// Status → visual config mapping
// ---------------------------------------------------------------------------

interface StatusConfig {
	label: string;
	className: string;
	dotColor: string;
}

const STATUS_CONFIG: Record<string, StatusConfig> = {
	// ── Plan / general ──────────────────────────────────────────────────────
	active: {
		label: 'Active',
		className: 'bg-green-50 text-green-700 border-green-200',
		dotColor: 'bg-green-500',
	},
	archived: {
		label: 'Archived',
		className: 'bg-zinc-100 text-zinc-600 border-zinc-200',
		dotColor: 'bg-zinc-400',
	},
	draft: {
		label: 'Draft',
		className: 'bg-yellow-50 text-yellow-700 border-yellow-200',
		dotColor: 'bg-yellow-400',
	},

	// ── Invoice ──────────────────────────────────────────────────────────────
	paid: {
		label: 'Paid',
		className: 'bg-green-50 text-green-700 border-green-200',
		dotColor: 'bg-green-500',
	},
	pending: {
		label: 'Pending',
		className: 'bg-orange-50 text-orange-700 border-orange-200',
		dotColor: 'bg-orange-400',
	},
	void: {
		label: 'Void',
		className: 'bg-zinc-100 text-zinc-500 border-zinc-200',
		dotColor: 'bg-zinc-400',
	},
	failed: {
		label: 'Failed',
		className: 'bg-red-50 text-red-700 border-red-200',
		dotColor: 'bg-red-500',
	},
	refunded: {
		label: 'Refunded',
		className: 'bg-blue-100 text-blue-700 border-blue-200',
		dotColor: 'bg-blue-500',
	},

	// ── Subscription ────────────────────────────────────────────────────────
	cancelled: {
		label: 'Cancelled',
		className: 'bg-red-50 text-red-700 border-red-200',
		dotColor: 'bg-red-500',
	},
	expired: {
		label: 'Expired',
		className: 'bg-zinc-100 text-zinc-500 border-zinc-200',
		dotColor: 'bg-zinc-400',
	},
	trial: {
		label: 'Trial',
		className: 'bg-blue-50 text-blue-700 border-blue-200',
		dotColor: 'bg-blue-500',
	},
	paused: {
		label: 'Paused',
		className: 'bg-yellow-50 text-yellow-700 border-yellow-200',
		dotColor: 'bg-yellow-400',
	},

	// ── Events ──────────────────────────────────────────────────────────────
	processed: {
		label: 'Processed',
		className: 'bg-green-50 text-green-700 border-green-200',
		dotColor: 'bg-green-500',
	},
};

const FALLBACK_CONFIG: StatusConfig = {
	label: 'Unknown',
	className: 'bg-zinc-100 text-zinc-500 border-zinc-200',
	dotColor: 'bg-zinc-400',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The domain status string. Maps to a preset color + label.
	 * Accepted values: active | archived | draft | paid | pending | void |
	 * failed | cancelled | expired | trial | paused | processed
	 */
	status: StatusType | string;
	/**
	 * When true, shows a small dot before the label.
	 * @default true
	 */
	showDot?: boolean;
	/**
	 * Override the label derived from `status`.
	 */
	label?: string;
	/** Additional className on the Badge wrapper */
	className?: string;
}

/**
 * `StatusBadge` maps FlexPrice domain status strings to coloured chips.
 *
 * Built on top of the shadcn `Badge` component. Color, label, and dot are
 * all derived automatically from the `status` prop — no manual styling needed.
 *
 * ## Usage
 * ```tsx
 * <StatusBadge status="active" />
 * <StatusBadge status="paid" showDot={false} />
 * <StatusBadge status="trial" label="On trial" />
 * ```
 */
const StatusBadge = ({ status, showDot = true, label, className, ...props }: StatusBadgeProps) => {
	const config = STATUS_CONFIG[status.toLowerCase()] ?? FALLBACK_CONFIG;
	const displayLabel = label ?? config.label;

	return (
		<Badge
			variant="outline"
			className={cn(
				'gap-1.5 font-medium capitalize border',
				config.className,
				className,
			)}
			{...props}
		>
			{showDot && (
				<span
					className={cn('h-1.5 w-1.5 rounded-full shrink-0', config.dotColor)}
					aria-hidden="true"
				/>
			)}
			{displayLabel}
		</Badge>
	);
};

export default StatusBadge;

