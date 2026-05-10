import { FC, useState } from 'react';
import { Search, Menu, ChevronRight, LayoutDashboard, CreditCard, FileText } from 'lucide-react';

const breadcrumbItems = [
	{
		label: 'Dashboard',
		icon: LayoutDashboard,
		description: 'Overview of analytics and KPIs',
	},
	{
		label: 'Billing',
		icon: CreditCard,
		description: 'Manage invoices and subscriptions',
	},
	{
		label: 'Invoices',
		icon: FileText,
		description: 'Track customer invoices and payments',
	},
];

const BreadCrumbs: FC = () => {
	const [active, setActive] = useState('Invoices');
	const [collapsed, setCollapsed] = useState(false);

	const activeItem = breadcrumbItems.find((item) => item.label === active);

	return (
		<div className='w-full rounded-xl border bg-white shadow-sm'>
			{/* TOP NAV */}
			<header className='border-b'>
				<div className='flex items-center justify-between px-6 py-4'>
					{/* LEFT */}
					<div className='flex items-center gap-4'>
						<button onClick={() => setCollapsed(!collapsed)} className='rounded-lg border p-2 hover:bg-gray-100 transition'>
							<Menu className='h-5 w-5' />
						</button>

						<div className='h-6 w-px bg-gray-300' />

						<nav className='flex items-center gap-2 text-sm'>
							{breadcrumbItems.map((item, index) => {
								const Icon = item.icon;
								const isActive = active === item.label;

								return (
									<div key={item.label} className='flex items-center gap-2'>
										<button
											onClick={() => {
												setActive(item.label);
												alert(`${item.label} clicked`);
											}}
											className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all
                        ${isActive ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}
                      `}>
											<Icon className='h-4 w-4' />
											<span>{item.label}</span>
										</button>

										{index < breadcrumbItems.length - 1 && <ChevronRight className='h-4 w-4 text-gray-400' />}
									</div>
								);
							})}
						</nav>
					</div>

					{/* RIGHT */}
					<div className='flex items-center gap-3'>
						<button
							onClick={() => alert('Open search modal')}
							className='flex items-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-50 transition'>
							<Search className='h-4 w-4 text-gray-500' />

							<span className='hidden sm:block text-sm text-gray-500'>Search...</span>

							<kbd className='hidden md:flex rounded border bg-gray-100 px-1.5 py-0.5 text-xs'>⌘ K</kbd>
						</button>

						<div className='hidden md:block text-xs text-gray-500'>Sidebar: {collapsed ? 'Collapsed' : 'Expanded'}</div>
					</div>
				</div>
			</header>

			{/* PAGE CONTENT PREVIEW */}
			<div className='px-6 py-8'>
				<div className='max-w-3xl'>
					<p className='mb-2 text-sm font-medium text-gray-500'>CURRENT PAGE</p>

					<h1 className='text-3xl font-bold tracking-tight'>{activeItem?.label}</h1>

					<p className='mt-3 text-gray-600'>{activeItem?.description}</p>

					<div className='mt-6 rounded-xl border bg-gray-50 p-5'>
						<p className='text-sm text-gray-700'>
							This is a preview section for the <span className='font-semibold'>{activeItem?.label}</span> page.
						</p>

						<div className='mt-4 flex gap-3'>
							<button onClick={() => alert('Primary action')} className='rounded-lg bg-black px-4 py-2 text-white hover:opacity-90'>
								Primary Action
							</button>

							<button onClick={() => alert('Secondary action')} className='rounded-lg border px-4 py-2 hover:bg-gray-100'>
								Secondary Action
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadCrumbs;
