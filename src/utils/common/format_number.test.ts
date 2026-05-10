import { describe, it, expect } from 'vitest';
import formatNumber, { formatCompactNumber } from './format_number';

describe('formatNumber', () => {
  it('formats numbers correctly', () => {
    expect(formatNumber(1000)).toBe('1,000');
  });

  it('formats decimals correctly', () => {
    expect(formatNumber(1234.56, 2)).toBe('1,234.56');
  });
});

describe('formatCompactNumber', () => {
  it('formats compact values', () => {
    expect(formatCompactNumber(10000)).toBe('10k');
  });
});
