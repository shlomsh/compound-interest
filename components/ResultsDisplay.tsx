'use client';

import { formatCurrency } from '@/lib/format';
import AnimatedNumber from './ui/AnimatedNumber';
import Card from './ui/Card';

interface ResultsDisplayProps {
  totalValue: number;
  totalContributed: number;
  interestEarned: number;
}

export function ResultsDisplay({
  totalValue,
  totalContributed,
  interestEarned,
}: ResultsDisplayProps) {
  // Calculate percentages for visual split
  const contributedPercent = totalValue > 0 ? (totalContributed / totalValue) * 100 : 0;
  const interestPercent = totalValue > 0 ? (interestEarned / totalValue) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Main Total */}
      <div className="text-center">
        <h3 className="text-sm font-medium text-taupe uppercase tracking-wide mb-2">
          Final Value
        </h3>
        <div className="text-5xl md:text-6xl font-bold text-mauve font-mono">
          <AnimatedNumber value={totalValue} format={formatCurrency} />
        </div>
      </div>

      {/* Visual Split Bar */}
      <div className="relative h-12 rounded-full overflow-hidden bg-rose/30">
        {/* Your Money portion */}
        <div
          className="absolute left-0 top-0 h-full bg-success transition-all duration-500 ease-out flex items-center justify-start px-4"
          style={{ width: `${contributedPercent}%` }}
        >
          {contributedPercent > 15 && (
            <span className="text-xs font-semibold text-white">Your Money</span>
          )}
        </div>

        {/* Interest Earned portion */}
        <div
          className="absolute right-0 top-0 h-full bg-peach transition-all duration-500 ease-out flex items-center justify-end px-4"
          style={{ width: `${interestPercent}%` }}
        >
          {interestPercent > 15 && (
            <span className="text-xs font-semibold text-mauve-dark">Interest</span>
          )}
        </div>
      </div>

      {/* Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Your Money */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-4 h-4 rounded-full bg-success" />
            <h4 className="text-sm font-medium text-taupe uppercase tracking-wide">
              Your Money
            </h4>
          </div>
          <div className="text-3xl font-bold text-mauve font-mono">
            <AnimatedNumber value={totalContributed} format={formatCurrency} />
          </div>
          <p className="text-xs text-taupe mt-1">
            {contributedPercent.toFixed(0)}% of total
          </p>
        </Card>

        {/* Interest Earned */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-4 h-4 rounded-full bg-peach" />
            <h4 className="text-sm font-medium text-taupe uppercase tracking-wide">
              Interest Earned
            </h4>
          </div>
          <div className="text-3xl font-bold text-mauve font-mono">
            <AnimatedNumber value={interestEarned} format={formatCurrency} />
          </div>
          <p className="text-xs text-taupe mt-1">
            {interestPercent.toFixed(0)}% of total
          </p>
        </Card>
      </div>

      {/* Key Insight */}
      {interestEarned > totalContributed && (
        <div className="text-center p-4 bg-peach/20 rounded-lg border border-peach">
          <p className="text-sm font-medium text-mauve">
            Your money earned more than you put in!{' '}
            <span className="font-bold">
              That&apos;s the power of compound interest.
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
