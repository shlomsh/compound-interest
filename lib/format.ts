/**
 * Formatting Utilities for Currency and Numbers
 * US English format only ($1,234.56)
 */

/**
 * Format a number as US currency
 * @param amount - The amount to format
 * @param options - Optional formatting options
 * @returns Formatted currency string (e.g., "$1,234.56")
 */
export function formatCurrency(
  amount: number,
  options?: {
    decimals?: number;
    showSign?: boolean;
  }
): string {
  const { decimals = 2, showSign = false } = options || {};

  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Math.abs(amount));

  if (showSign && amount > 0) {
    return `+${formatted}`;
  }

  if (amount < 0) {
    return `-${formatted}`;
  }

  return formatted;
}

/**
 * Format a number with thousands separators
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 0)
 * @returns Formatted number string (e.g., "1,234.56")
 */
export function formatNumber(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format a number as a percentage
 * @param value - The percentage value (e.g., 7 for 7%)
 * @param decimals - Number of decimal places (default: 1)
 * @returns Formatted percentage string (e.g., "7.0%")
 */
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${formatNumber(value, decimals)}%`;
}

/**
 * Format a large number with K/M/B suffix
 * @param value - The number to format
 * @returns Abbreviated number (e.g., "1.2M")
 */
export function formatCompact(value: number): string {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(1)}B`;
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(1)}K`;
  }
  return formatCurrency(value, { decimals: 0 });
}

/**
 * Format years in a friendly way
 * @param years - Number of years
 * @returns Formatted string (e.g., "1 year", "5 years")
 */
export function formatYears(years: number): string {
  return years === 1 ? '1 year' : `${years} years`;
}

/**
 * Format a difference in currency with + or - sign
 * @param difference - The difference amount
 * @returns Formatted difference (e.g., "+$10,000")
 */
export function formatDifference(difference: number): string {
  return formatCurrency(difference, { showSign: true });
}
