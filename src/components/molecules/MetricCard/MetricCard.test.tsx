import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MetricCard from './MetricCard';

describe('MetricCard', () => {
	it('renders metric data correctly', () => {
		render(<MetricCard label='Revenue' value='$12,450' trend='+12%' trendDirection='up' />);

		expect(screen.getByText('Revenue')).toBeInTheDocument();
		expect(screen.getByText('$12,450')).toBeInTheDocument();
		expect(screen.getByText('+12%')).toBeInTheDocument();
	});
});
