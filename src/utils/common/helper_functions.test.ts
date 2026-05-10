import { describe, it, expect } from 'vitest';
import { formatBillingPeriodForPrice } from './helper_functions';

describe('formatBillingPeriodForPrice', () => {
	it('formats monthly correctly', () => {
		expect(formatBillingPeriodForPrice('MONTHLY')).toBe('month');
	});
});
