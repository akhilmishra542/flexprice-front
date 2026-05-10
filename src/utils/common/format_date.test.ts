import { describe, it, expect } from 'vitest';
import formatDate from './format_date';

describe('formatDate', () => {
  it('formats valid date', () => {
    expect(formatDate('2025-01-01')).toContain('2025');
  });

  it('handles invalid date', () => {
    expect(formatDate('wrong-date')).toBe('Invalid Date');
  });
});
