import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { Building2, CreditCard, Globe, Tag, User } from 'lucide-react';

import FlexPriceSelect from './Select';
import SearchableSelect from './SearchableSelect';
import AsyncSearchableSelect from './AsyncSearchableSelect';
import AsyncMultiSearchableSelect from './AsyncMultiSearchableSelect';
import type { SelectOption } from './Select';

const PLAN_OPTIONS: SelectOption[] = [
	{ value: 'free', label: 'Free', description: '$0 / month' },
	{ value: 'starter', label: 'Starter', description: '$20 / month' },
	{ value: 'pro', label: 'Pro', description: '$99 / month' },
	{ value: 'enterprise', label: 'Enterprise', description: 'Custom pricing' },
];

const STATUS_OPTIONS: SelectOption[] = [
	{ value: 'active', label: 'Active', prefixIcon: <span className='h-2 w-2 rounded-full bg-green-500 inline-block' /> },
	{ value: 'archived', label: 'Archived', prefixIcon: <span className='h-2 w-2 rounded-full bg-gray-400 inline-block' /> },
	{ value: 'draft', label: 'Draft', prefixIcon: <span className='h-2 w-2 rounded-full bg-yellow-400 inline-block' /> },
];

const INVOICE_STATUS_OPTIONS: SelectOption[] = [
	{ value: 'paid', label: 'Paid' },
	{ value: 'pending', label: 'Pending' },
	{ value: 'draft', label: 'Draft' },
	{ value: 'void', label: 'Void', disabled: true },
	{ value: 'failed', label: 'Failed' },
];

const FEATURE_OPTIONS: SelectOption[] = [
	{ value: 'api_calls', label: 'API Calls', description: 'Per request metering', prefixIcon: <Globe className='h-4 w-4' /> },
	{ value: 'seats', label: 'Seats', description: 'Per user metering', prefixIcon: <User className='h-4 w-4' /> },
	{ value: 'storage', label: 'Storage', description: 'GB consumed', prefixIcon: <CreditCard className='h-4 w-4' /> },
	{ value: 'orgs', label: 'Orgs', description: 'Per org metering', prefixIcon: <Building2 className='h-4 w-4' /> },
	{ value: 'events', label: 'Events', description: 'Event stream metering', prefixIcon: <Tag className='h-4 w-4' /> },
];

const CURRENCY_OPTIONS: SelectOption[] = [
	{ value: 'usd', label: 'USD', suffixIcon: <span className='text-xs text-muted-foreground'>$</span> },
	{ value: 'eur', label: 'EUR', suffixIcon: <span className='text-xs text-muted-foreground'>€</span> },
	{ value: 'gbp', label: 'GBP', suffixIcon: <span className='text-xs text-muted-foreground'>£</span> },
	{ value: 'inr', label: 'INR', suffixIcon: <span className='text-xs text-muted-foreground'>₹</span> },
];

interface CustomerData {
	id: string;
	name: string;
	email: string;
}

const MOCK_CUSTOMERS: CustomerData[] = [
	{ id: 'c1', name: 'Acme Corp', email: 'billing@acme.com' },
	{ id: 'c2', name: 'Stripe Inc', email: 'billing@stripe.com' },
	{ id: 'c3', name: 'Vercel Ltd', email: 'billing@vercel.com' },
	{ id: 'c4', name: 'Linear GmbH', email: 'billing@linear.app' },
	{ id: 'c5', name: 'Notion AI', email: 'billing@notion.so' },
];

const mockSearchCustomers = (query: string) =>
	new Promise<Array<SelectOption & { data: CustomerData }>>((resolve) =>
		setTimeout(() => {
			const filtered = MOCK_CUSTOMERS.filter(
				(c) => !query.trim() || c.name.toLowerCase().includes(query.toLowerCase()) || c.email.toLowerCase().includes(query.toLowerCase()),
			);
			resolve(
				filtered.map((c) => ({
					value: c.id,
					label: c.name,
					description: c.email,
					data: c,
				})),
			);
		}, 400),
	);

const customerExtractors = {
	valueExtractor: (c: CustomerData) => c.id,
	labelExtractor: (c: CustomerData) => c.name,
	descriptionExtractor: (c: CustomerData) => c.email,
};

const selectMeta: Meta<typeof FlexPriceSelect> = {
	title: 'Atoms/Select',
	component: FlexPriceSelect,
	parameters: { layout: 'padded' },
	decorators: [
		(Story) => (
			<div className='w-[320px] p-4'>
				<Story />
			</div>
		),
	],
	tags: ['autodocs'],
	argTypes: {
		options: { control: false },
		value: { control: 'text' },
		placeholder: { control: 'text' },
		label: { control: 'text' },
		description: { control: 'text' },
		error: { control: 'text' },
		disabled: { control: 'boolean' },
		isRadio: { control: 'boolean' },
		required: { control: 'boolean' },
		hideSelectedTick: { control: 'boolean' },
	},
};

export default selectMeta;
type SelectStory = StoryObj<typeof FlexPriceSelect>;

/** Default controlled select — the standard FlexPrice dropdown. */
export const Default: SelectStory = {
	render: (args) => {
		const [value, setValue] = useState('');
		return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: PLAN_OPTIONS,
		placeholder: 'Select a plan',
		label: 'Billing Plan',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox');
		await expect(trigger).toBeInTheDocument();
		await expect(trigger).not.toBeDisabled();
	},
};

/** With a description and required indicator — used in forms. */
export const WithLabelAndDescription: SelectStory = {
	render: (args) => {
		const [value, setValue] = useState('');
		return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: PLAN_OPTIONS,
		label: 'Billing Plan',
		description: 'Choose the plan to assign this customer.',
		placeholder: 'Select a plan',
		required: true,
	},
};

/** Error state — shown after failed validation (e.g. form submit). */
export const WithError: SelectStory = {
	render: (args) => {
		const [value, setValue] = useState('');
		return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: STATUS_OPTIONS,
		label: 'Status',
		placeholder: 'Select status',
		error: 'Please select a status to continue.',
	},
};

/** Pre-selected value — simulates an edit form with existing data. */
export const WithPreselectedValue: SelectStory = {
	render: (args) => {
		const [value, setValue] = useState('pro');
		return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: PLAN_OPTIONS,
		label: 'Current Plan',
		placeholder: 'Select a plan',
	},
};

/** Disabled — read-only view, e.g. locked subscription fields. */
export const Disabled: SelectStory = {
	render: (args) => {
		const [value, setValue] = useState('active');
		return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: STATUS_OPTIONS,
		label: 'Status',
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox');
		await expect(trigger).toBeDisabled();
	},
};

/** Options with icons — used for feature selects and currency pickers. */
export const WithIcons: SelectStory = {
	render: (args) => {
		const [value, setValue] = useState('');
		return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: FEATURE_OPTIONS,
		label: 'Feature',
		placeholder: 'Select a feature',
	},
};

/** Currency picker with suffix icons — seen in pricing tier forms. */
export const CurrencyPicker: SelectStory = {
	name: 'Pattern — Currency picker',
	render: (args) => {
		const [value, setValue] = useState('usd');
		return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: CURRENCY_OPTIONS,
		label: 'Currency',
		placeholder: 'Select currency',
	},
};

/** Radio-style indicators — used in filter panels and settings forms. */
export const RadioStyle: SelectStory = {
	render: (args) => {
		const [value, setValue] = useState('');
		return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: INVOICE_STATUS_OPTIONS,
		label: 'Invoice Status',
		placeholder: 'Filter by status',
		isRadio: true,
	},
};

/** With a disabled option — e.g. "Void" invoices cannot be re-selected. */
export const WithDisabledOption: SelectStory = {
	render: (args) => {
		const [value, setValue] = useState('');
		return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: INVOICE_STATUS_OPTIONS,
		label: 'Invoice Status',
		placeholder: 'Select status',
	},
};

/** Empty options list — graceful no-data state. */
export const NoOptions: SelectStory = {
	render: (args) => {
		const [value, setValue] = useState('');
		return <FlexPriceSelect {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: [],
		label: 'Customer',
		placeholder: 'No customers yet',
		noOptionsText: 'No customers found.',
	},
};

export const Searchable: StoryObj<typeof SearchableSelect> = {
	name: 'SearchableSelect / Default',
	render: (args) => {
		const [value, setValue] = useState('');
		return (
			<div className='w-[320px] p-4'>
				<SearchableSelect {...args} value={value} onChange={setValue} />
			</div>
		);
	},
	args: {
		options: FEATURE_OPTIONS,
		label: 'Feature',
		placeholder: 'Select a feature',
		searchPlaceholder: 'Search features...',
		description: 'Choose the metering feature for this plan.',
	},
};

export const SearchableWithError: StoryObj<typeof SearchableSelect> = {
	name: 'SearchableSelect / With error',
	render: (args) => {
		const [value, setValue] = useState('');
		return (
			<div className='w-[320px] p-4'>
				<SearchableSelect {...args} value={value} onChange={setValue} />
			</div>
		);
	},
	args: {
		options: PLAN_OPTIONS,
		label: 'Plan',
		placeholder: 'Select a plan',
		error: 'A plan selection is required.',
	},
};

export const SearchableDisabled: StoryObj<typeof SearchableSelect> = {
	name: 'SearchableSelect / Disabled',
	render: (args) => {
		const [value, setValue] = useState('starter');
		return (
			<div className='w-[320px] p-4'>
				<SearchableSelect {...args} value={value} onChange={setValue} />
			</div>
		);
	},
	args: {
		options: PLAN_OPTIONS,
		label: 'Plan',
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button');
		await expect(trigger).toBeDisabled();
	},
};

export const SearchableRadio: StoryObj<typeof SearchableSelect> = {
	name: 'SearchableSelect / Radio style',
	render: (args) => {
		const [value, setValue] = useState('');
		return (
			<div className='w-[320px] p-4'>
				<SearchableSelect {...args} value={value} onChange={setValue} />
			</div>
		);
	},
	args: {
		options: INVOICE_STATUS_OPTIONS,
		label: 'Invoice Status',
		placeholder: 'Filter by status',
		isRadio: true,
		searchPlaceholder: 'Search status...',
	},
};

export const Async: StoryObj<typeof AsyncSearchableSelect<CustomerData>> = {
	name: 'AsyncSearchableSelect / Default',
	render: () => {
		const [value, setValue] = useState<CustomerData | undefined>(undefined);
		return (
			<div className='w-[320px] p-4'>
				<AsyncSearchableSelect<CustomerData>
					search={{ searchFn: mockSearchCustomers, placeholder: 'Search customers...' }}
					extractors={customerExtractors}
					display={{
						label: 'Customer',
						placeholder: 'Select a customer',
						description: 'Search by name or email.',
					}}
					value={value}
					onChange={setValue}
				/>
				{value && (
					<p className='mt-2 text-xs text-muted-foreground'>
						Selected: <strong>{value.name}</strong> ({value.email})
					</p>
				)}
			</div>
		);
	},
};

export const AsyncWithError: StoryObj<typeof AsyncSearchableSelect<CustomerData>> = {
	name: 'AsyncSearchableSelect / With error',
	render: () => {
		const [value, setValue] = useState<CustomerData | undefined>(undefined);
		return (
			<div className='w-[320px] p-4'>
				<AsyncSearchableSelect<CustomerData>
					search={{ searchFn: mockSearchCustomers }}
					extractors={customerExtractors}
					display={{
						label: 'Customer',
						placeholder: 'Select a customer',
						error: 'A customer selection is required.',
					}}
					value={value}
					onChange={setValue}
				/>
			</div>
		);
	},
};

export const AsyncDisabled: StoryObj<typeof AsyncSearchableSelect<CustomerData>> = {
	name: 'AsyncSearchableSelect / Disabled',
	render: () => {
		const [value] = useState<CustomerData>({ id: 'c1', name: 'Acme Corp', email: 'billing@acme.com' });
		return (
			<div className='w-[320px] p-4'>
				<AsyncSearchableSelect<CustomerData>
					search={{ searchFn: mockSearchCustomers }}
					extractors={customerExtractors}
					display={{ label: 'Customer', placeholder: 'Select a customer' }}
					value={value}
					onChange={() => {}}
					disabled
				/>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button');
		await expect(trigger).toBeDisabled();
	},
};

export const AsyncRadio: StoryObj<typeof AsyncSearchableSelect<CustomerData>> = {
	name: 'AsyncSearchableSelect / Radio style',
	render: () => {
		const [value, setValue] = useState<CustomerData | undefined>(undefined);
		return (
			<div className='w-[320px] p-4'>
				<AsyncSearchableSelect<CustomerData>
					search={{ searchFn: mockSearchCustomers }}
					extractors={customerExtractors}
					display={{ label: 'Customer', placeholder: 'Select a customer' }}
					options={{ isRadio: true }}
					value={value}
					onChange={setValue}
				/>
			</div>
		);
	},
};

export const AsyncMulti: StoryObj<typeof AsyncMultiSearchableSelect<CustomerData>> = {
	name: 'AsyncMultiSearchableSelect / Default',
	render: () => {
		const [value, setValue] = useState<CustomerData[]>([]);
		return (
			<div className='w-[400px] p-4'>
				<AsyncMultiSearchableSelect<CustomerData>
					search={{ searchFn: mockSearchCustomers, placeholder: 'Search customers...' }}
					extractors={customerExtractors}
					display={{
						label: 'Customers',
						placeholder: 'Select customers',
						description: 'Select one or more customers to assign.',
					}}
					value={value}
					onChange={setValue}
				/>
				{value.length > 0 && (
					<p className='mt-2 text-xs text-muted-foreground'>
						{value.length} selected: {value.map((c) => c.name).join(', ')}
					</p>
				)}
			</div>
		);
	},
};

export const AsyncMultiPreselected: StoryObj<typeof AsyncMultiSearchableSelect<CustomerData>> = {
	name: 'AsyncMultiSearchableSelect / Pre-selected values',
	render: () => {
		const [value, setValue] = useState<CustomerData[]>([
			{ id: 'c1', name: 'Acme Corp', email: 'billing@acme.com' },
			{ id: 'c2', name: 'Stripe Inc', email: 'billing@stripe.com' },
			{ id: 'c3', name: 'Vercel Ltd', email: 'billing@vercel.com' },
			{ id: 'c4', name: 'Linear GmbH', email: 'billing@linear.app' },
		]);
		return (
			<div className='w-[400px] p-4'>
				<AsyncMultiSearchableSelect<CustomerData>
					search={{ searchFn: mockSearchCustomers }}
					extractors={customerExtractors}
					display={{ label: 'Customers', placeholder: 'Select customers' }}
					options={{ maxCount: 3 }}
					value={value}
					onChange={setValue}
				/>
				<p className='mt-2 text-xs text-muted-foreground'>4 selected — 3 shown as badges, 1 in +N overflow</p>
			</div>
		);
	},
};

export const AsyncMultiDisabled: StoryObj<typeof AsyncMultiSearchableSelect<CustomerData>> = {
	name: 'AsyncMultiSearchableSelect / Disabled',
	render: () => {
		const [value] = useState<CustomerData[]>([{ id: 'c1', name: 'Acme Corp', email: 'billing@acme.com' }]);
		return (
			<div className='w-[400px] p-4'>
				<AsyncMultiSearchableSelect<CustomerData>
					search={{ searchFn: mockSearchCustomers }}
					extractors={customerExtractors}
					display={{ label: 'Customers', placeholder: 'Select customers' }}
					value={value}
					onChange={() => {}}
					disabled
				/>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button');
		await expect(trigger).toBeDisabled();
	},
};

export const AsyncMultiEmpty: StoryObj<typeof AsyncMultiSearchableSelect<CustomerData>> = {
	name: 'AsyncMultiSearchableSelect / Empty state',
	render: () => {
		const [value, setValue] = useState<CustomerData[]>([]);
		return (
			<div className='w-[400px] p-4'>
				<AsyncMultiSearchableSelect<CustomerData>
					search={{ searchFn: mockSearchCustomers }}
					extractors={customerExtractors}
					display={{
						label: 'Customers',
						placeholder: 'No customers selected',
						error: 'Select at least one customer.',
					}}
					options={{ emptyText: 'No customers match your search.' }}
					value={value}
					onChange={setValue}
				/>
			</div>
		);
	},
};

export const AllVariantsOverview: StoryObj = {
	name: 'Overview — All Select variants',
	render: () => {
		const [v1, setV1] = useState('');
		const [v2, setV2] = useState('');
		const [v3, setV3] = useState<CustomerData | undefined>(undefined);
		const [v4, setV4] = useState<CustomerData[]>([]);

		return (
			<div className='grid grid-cols-2 gap-6 p-4 w-[700px]'>
				<div>
					<p className='text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide'>Select (Radix)</p>
					<FlexPriceSelect options={PLAN_OPTIONS} value={v1} onChange={setV1} label='Plan' placeholder='Select a plan' />
				</div>
				<div>
					<p className='text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide'>SearchableSelect</p>
					<SearchableSelect options={FEATURE_OPTIONS} value={v2} onChange={setV2} label='Feature' placeholder='Select a feature' />
				</div>
				<div>
					<p className='text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide'>AsyncSearchableSelect</p>
					<AsyncSearchableSelect<CustomerData>
						search={{ searchFn: mockSearchCustomers }}
						extractors={customerExtractors}
						display={{ label: 'Customer', placeholder: 'Search & select' }}
						value={v3}
						onChange={setV3}
					/>
				</div>
				<div>
					<p className='text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide'>AsyncMultiSearchableSelect</p>
					<AsyncMultiSearchableSelect<CustomerData>
						search={{ searchFn: mockSearchCustomers }}
						extractors={customerExtractors}
						display={{ label: 'Customers', placeholder: 'Search & multi-select' }}
						value={v4}
						onChange={setV4}
					/>
				</div>
			</div>
		);
	},
};
