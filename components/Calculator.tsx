'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { calculateCompoundInterest } from '@/lib/compound';
import { formatCurrency, formatPercentage } from '@/lib/format';
import Slider from './ui/Slider';
import Card from './ui/Card';
import { GrowthChart } from './GrowthChart';
import { ResultsDisplay } from './ResultsDisplay';
import StaggerReveal from './ui/StaggerReveal';

export function Calculator() {
  // State for calculator inputs (defaults from CLAUDE.md)
  const [startingAmount, setStartingAmount] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [years, setYears] = useState(30);
  const [interestRate, setInterestRate] = useState(7);

  // Calculate results (memoized for performance)
  const results = useMemo(() => {
    return calculateCompoundInterest(
      startingAmount,
      monthlyContribution,
      years,
      interestRate
    );
  }, [startingAmount, monthlyContribution, years, interestRate]);

  return (
    <section id="calculator" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerReveal>
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2 className="text-4xl md:text-5xl font-bold text-mauve mb-4">
              Try It Yourself
            </motion.h2>
            <motion.p className="text-lg text-taupe max-w-2xl mx-auto">
              Adjust the sliders below to see how your money can grow over time.
              Every change updates the chart in real-time.
            </motion.p>
          </div>

          {/* Calculator Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Controls */}
            <motion.div className="space-y-6">
              <Card className="p-5 md:p-8" elevation="high">
                <h3 className="text-2xl font-bold text-mauve mb-6">
                  Your Investment Plan
                </h3>

                {/* Starting Amount Slider */}
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-taupe uppercase tracking-wide">
                      Starting Amount
                    </label>
                    <span className="text-2xl font-bold text-mauve font-mono">
                      {formatCurrency(startingAmount)}
                    </span>
                  </div>
                  <Slider
                    value={startingAmount}
                    onChange={setStartingAmount}
                    min={0}
                    max={10000}
                    step={100}
                    aria-label="Starting amount"
                  />
                  <div className="flex justify-between text-xs text-taupe mt-1">
                    <span>$0</span>
                    <span>$10,000</span>
                  </div>
                </div>

                {/* Monthly Contribution Slider */}
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-taupe uppercase tracking-wide">
                      Monthly Contribution
                    </label>
                    <span className="text-2xl font-bold text-mauve font-mono">
                      {formatCurrency(monthlyContribution)}
                    </span>
                  </div>
                  <Slider
                    value={monthlyContribution}
                    onChange={setMonthlyContribution}
                    min={0}
                    max={500}
                    step={10}
                    aria-label="Monthly contribution"
                  />
                  <div className="flex justify-between text-xs text-taupe mt-1">
                    <span>$0</span>
                    <span>$500</span>
                  </div>
                </div>

                {/* Years Slider */}
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-taupe uppercase tracking-wide">
                      Time Period
                    </label>
                    <span className="text-2xl font-bold text-mauve font-mono">
                      {years} {years === 1 ? 'year' : 'years'}
                    </span>
                  </div>
                  <Slider
                    value={years}
                    onChange={setYears}
                    min={1}
                    max={50}
                    step={1}
                    aria-label="Investment time period in years"
                  />
                  <div className="flex justify-between text-xs text-taupe mt-1">
                    <span>1 year</span>
                    <span>50 years</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-taupe uppercase tracking-wide">
                      Expected Return
                    </label>
                    <span className="text-2xl font-bold text-mauve font-mono">
                      {formatPercentage(interestRate)}
                    </span>
                  </div>
                  <Slider
                    value={interestRate}
                    onChange={setInterestRate}
                    min={1}
                    max={12}
                    step={0.5}
                    aria-label="Expected annual return rate"
                  />
                  <div className="flex justify-between text-xs text-taupe mt-1">
                    <span>1%</span>
                    <span>12%</span>
                  </div>
                  {interestRate === 7 && (
                    <p className="text-xs text-taupe mt-2 italic">
                      7% is the historical average of the S&amp;P 500
                    </p>
                  )}
                </div>

                {/* Annual Compounding Notice */}
                <div className="mt-6 p-4 bg-rose/20 rounded-lg">
                  <p className="text-xs text-taupe">
                    <span className="font-semibold">Note:</span> This calculator
                    uses annual compounding for simpler math. Real investments may
                    compound more frequently.
                  </p>
                </div>

                {/* Reset Button */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => {
                      setStartingAmount(1000);
                      setMonthlyContribution(100);
                      setYears(30);
                      setInterestRate(7);
                    }}
                    className="text-sm text-taupe hover:text-mauve transition-colors underline underline-offset-2"
                  >
                    ↻ Reset to defaults
                  </button>
                </div>
              </Card>
            </motion.div>

            {/* Right Column: Results */}
            <motion.div className="space-y-4 md:space-y-6">
              {/* Growth Chart */}
              <Card className="p-4 md:p-6" elevation="high">
                <h3 className="text-xl font-bold text-mauve mb-4">
                  Growth Over Time
                </h3>
                <GrowthChart data={results.yearData} />
              </Card>

              {/* Results Display */}
              <Card className="p-4 md:p-6" elevation="high">
                <ResultsDisplay
                  totalValue={results.finalValue}
                  totalContributed={results.totalContributed}
                  interestEarned={results.totalInterestEarned}
                />
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div className="mt-12 text-center">
            <p className="text-lg text-mauve max-w-3xl mx-auto">
              The earlier you start investing, the more time your money has to grow.
              Even small amounts can turn into substantial wealth over time.{' '}
              <span className="font-bold">That&apos;s the magic of compound interest!</span>
            </p>
          </motion.div>
        </StaggerReveal>
      </div>
    </section>
  );
}
