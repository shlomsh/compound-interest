'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
              נסו בעצמכם
            </motion.h2>
            <motion.p className="text-lg text-taupe max-w-2xl mx-auto">
              הזיזו את הסליידרים למטה כדי לראות איך הכסף שלכם יכול לצמוח לאורך זמן.
              כל שינוי מעדכן את הגרף בזמן אמת.
            </motion.p>
          </div>

          {/* Calculator Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Right Column: Controls (RTL) */}
            <motion.div className="space-y-6">
              <Card className="p-5 md:p-8" elevation="high">
                <h3 className="text-2xl font-bold text-mauve mb-6">
                  תוכנית ההשקעה שלכם
                </h3>

                {/* Quick Scenario Presets */}
                <div className="mb-6 pb-6 border-b border-taupe/20">
                  <h4 className="text-xs font-semibold text-taupe uppercase tracking-wide mb-3">
                    תרחישים מהירים:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setStartingAmount(500);
                        setMonthlyContribution(50);
                        setYears(47);
                        setInterestRate(7);
                      }}
                      className="px-3 py-2 text-xs bg-rose/30 hover:bg-rose/50 text-mauve rounded-full transition-colors font-medium"
                    >
                      🎓 תלמיד תיכון
                    </button>
                    <button
                      onClick={() => {
                        setStartingAmount(5000);
                        setMonthlyContribution(200);
                        setYears(43);
                        setInterestRate(7);
                      }}
                      className="px-3 py-2 text-xs bg-rose/30 hover:bg-rose/50 text-mauve rounded-full transition-colors font-medium"
                    >
                      🎓 בוגר אוניברסיטה
                    </button>
                    <button
                      onClick={() => {
                        setStartingAmount(10000);
                        setMonthlyContribution(300);
                        setYears(35);
                        setInterestRate(7);
                      }}
                      className="px-3 py-2 text-xs bg-rose/30 hover:bg-rose/50 text-mauve rounded-full transition-colors font-medium"
                    >
                      💼 תחילת קריירה
                    </button>
                    <button
                      onClick={() => {
                        setStartingAmount(25000);
                        setMonthlyContribution(500);
                        setYears(25);
                        setInterestRate(7);
                      }}
                      className="px-3 py-2 text-xs bg-rose/30 hover:bg-rose/50 text-mauve rounded-full transition-colors font-medium"
                    >
                      🚀 אמצע קריירה
                    </button>
                  </div>
                </div>

                {/* Starting Amount Slider */}
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-taupe uppercase tracking-wide">
                      סכום התחלתי
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
                    aria-label="סכום התחלתי"
                  />
                  <div className="flex justify-between text-xs text-taupe mt-1">
                    <span>₪0</span>
                    <span>₪10,000</span>
                  </div>
                </div>

                {/* Monthly Contribution Slider */}
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-taupe uppercase tracking-wide">
                      הפקדה חודשית
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
                    aria-label="הפקדה חודשית"
                  />
                  <div className="flex justify-between text-xs text-taupe mt-1">
                    <span>₪0</span>
                    <span>₪500</span>
                  </div>
                </div>

                {/* Years Slider */}
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-taupe uppercase tracking-wide">
                      תקופת זמן
                    </label>
                    <span className="text-2xl font-bold text-mauve font-mono">
                      {years} {years === 1 ? 'שנה' : 'שנים'}
                    </span>
                  </div>
                  <Slider
                    value={years}
                    onChange={setYears}
                    min={1}
                    max={50}
                    step={1}
                    aria-label="תקופת השקעה בשנים"
                  />
                  <div className="flex justify-between text-xs text-taupe mt-1">
                    <span>שנה</span>
                    <span>50 שנים</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-taupe uppercase tracking-wide">
                      תשואה צפויה
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
                    aria-label="שיעור תשואה שנתי צפוי"
                  />
                  <div className="flex justify-between text-xs text-taupe mt-1">
                    <span>1%</span>
                    <span>12%</span>
                  </div>
                  {interestRate === 7 && (
                    <p className="text-xs text-taupe mt-2 italic">
                      7% הוא הממוצע ההיסטורי של מדד S&amp;P 500
                    </p>
                  )}
                </div>

                {/* Annual Compounding Notice */}
                <div className="mt-6 p-4 bg-rose/20 rounded-lg">
                  <p className="text-xs text-taupe">
                    <span className="font-semibold">שימו לב:</span> מחשבון זה
                    משתמש בריבית דריבית שנתית לפשטות. השקעות אמיתיות עשויות
                    לצבור ריבית בתדירות גבוהה יותר.
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
                    ↻ איפוס לברירת מחדל
                  </button>
                </div>
              </Card>

              {/* Contextual Insights */}
              <AnimatePresence mode="wait">
                {years >= 40 && (
                  <motion.div
                    key="long-term"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-4 bg-success/10 border-2 border-success/20">
                      <p className="text-sm text-mauve">
                        💡 <span className="font-semibold">מסגרת זמן מצוינת!</span> להתחיל צעיר נותן לכם 40+ שנים של כוח ריבית דריבית. כך נבנה עושר אמיתי.
                      </p>
                    </Card>
                  </motion.div>
                )}

                {monthlyContribution >= 300 && (
                  <motion.div
                    key="high-contribution"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-4 bg-peach/20 border-2 border-peach/30">
                      <p className="text-sm text-mauve">
                        🌟 <span className="font-semibold">מחויבות מרשימה!</span> הפקדות עקביות כאלה יכולות לבנות עושר משמעותי לאורך זמן.
                      </p>
                    </Card>
                  </motion.div>
                )}

                {startingAmount >= 5000 && years >= 30 && (
                  <motion.div
                    key="strong-start"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-4 bg-gradient-to-r from-success/10 to-peach/10 border-2 border-success/20">
                      <p className="text-sm text-mauve">
                        🚀 <span className="font-semibold">בסיס חזק!</span> שילוב של סכום התחלתי טוב עם השקעה לטווח ארוך היא אסטרטגיה חזקה.
                      </p>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Left Column: Results (RTL) */}
            <motion.div className="space-y-4 md:space-y-6">
              {/* Growth Chart */}
              <Card className="p-4 md:p-6" elevation="high">
                <h3 className="text-xl font-bold text-mauve mb-4">
                  צמיחה לאורך זמן
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
              ככל שתתחילו להשקיע מוקדם יותר, כך לכסף שלכם יש יותר זמן לצמוח.
              גם סכומים קטנים יכולים להפוך לעושר משמעותי לאורך זמן.{' '}
              <span className="font-bold">זה הקסם של ריבית דריבית!</span>
            </p>
          </motion.div>
        </StaggerReveal>
      </div>
    </section>
  );
}
