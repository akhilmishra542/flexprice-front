import { useState } from 'react';
import { Home, CreditCard, Settings, Menu } from 'lucide-react';

const items = [
	{
		label: 'Dashboard',
		icon: Home,
		active: true,
	},
	{
		label: 'Billing',
		icon: CreditCard,
	},
	{
		label: 'Settings',
		icon: Settings,
	},
];

const SidebarNav = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div className={`h-screen border-r bg-white transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
			<div className='p-4 flex items-center justify-between border-b'>
				{!collapsed && <h2 className='font-bold text-lg'>FlexPrice</h2>}

				<button onClick={() => setCollapsed(!collapsed)} className='p-2 rounded hover:bg-gray-100'>
					<Menu size={18} />
				</button>
			</div>

			<div className='p-2 space-y-2'>
				{items.map((item) => {
					const Icon = item.icon;

					return (
						<div
							key={item.label}
							className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
								item.active ? 'bg-black text-white' : 'hover:bg-gray-100'
							}`}>
							<Icon size={18} />

							{!collapsed && <span>{item.label}</span>}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SidebarNav;
