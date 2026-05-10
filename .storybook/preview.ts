import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import '../src/index.css';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			staleTime: 0,
		},
	},
});

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: 'padded',
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'gray', value: '#f4f4f5' },
				{ name: 'dark', value: '#09090b' },
			],
		},
	},

	decorators: [
		(Story) =>
			React.createElement(
				QueryClientProvider,
				{ client: queryClient },
				React.createElement(Story),
			),
	],
};

export default preview;
