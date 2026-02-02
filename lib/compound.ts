/**
 * Compound Interest Calculation Utilities
 * Uses annual compounding (not monthly/daily) for simpler math visualization
 */

export interface YearData {
  year: number;
  totalValue: number;
  totalContributed: number;
  interestEarned: number;
}

export interface CompoundResult {
  yearData: YearData[];
  finalValue: number;
  totalContributed: number;
  totalInterestEarned: number;
}

/**
 * Calculate compound interest with annual compounding and monthly contributions
 *
 * @param principal - Initial starting amount
 * @param monthlyContribution - Amount contributed each month
 * @param years - Number of years to calculate
 * @param annualRate - Annual interest rate as a percentage (e.g., 7 for 7%)
 * @returns Calculation results including year-by-year data
 */
export function calculateCompoundInterest(
  principal: number,
  monthlyContribution: number,
  years: number,
  annualRate: number
): CompoundResult {
  const rate = annualRate / 100;
  const annualContribution = monthlyContribution * 12;
  const yearData: YearData[] = [];

  let currentValue = principal;
  let totalContributed = principal;

  // Year 0 (starting point)
  yearData.push({
    year: 0,
    totalValue: principal,
    totalContributed: principal,
    interestEarned: 0,
  });

  // Calculate year by year
  for (let year = 1; year <= years; year++) {
    // Add annual contribution at beginning of year
    currentValue += annualContribution;
    totalContributed += annualContribution;

    // Apply interest at end of year (annual compounding)
    currentValue = currentValue * (1 + rate);

    const interestEarned = currentValue - totalContributed;

    yearData.push({
      year,
      totalValue: Math.round(currentValue * 100) / 100,
      totalContributed,
      interestEarned: Math.round(interestEarned * 100) / 100,
    });
  }

  return {
    yearData,
    finalValue: Math.round(currentValue * 100) / 100,
    totalContributed,
    totalInterestEarned: Math.round((currentValue - totalContributed) * 100) / 100,
  };
}

/**
 * Calculate the difference between two investment scenarios
 * Useful for "Two Friends" comparison
 */
export function compareInvestments(
  scenario1: CompoundResult,
  scenario2: CompoundResult
): number {
  return Math.round((scenario1.finalValue - scenario2.finalValue) * 100) / 100;
}

/**
 * Calculate how much a daily expense costs over time when invested
 * Example: $5 coffee daily becomes how much in 30 years?
 */
export function dailyExpenseToInvestment(
  dailyAmount: number,
  years: number,
  annualRate: number
): number {
  const monthlyAmount = (dailyAmount * 365) / 12;
  const result = calculateCompoundInterest(0, monthlyAmount, years, annualRate);
  return result.finalValue;
}

/**
 * Calculate how long it takes for money to double
 * Using the Rule of 72 approximation
 */
export function yearsToDouble(annualRate: number): number {
  return Math.round((72 / annualRate) * 10) / 10;
}
