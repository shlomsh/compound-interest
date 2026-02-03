'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';
import Slider from '@/components/ui/Slider';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import { calculateCompoundInterest } from '@/lib/compound';
import { formatCurrency } from '@/lib/format';
import StaggerReveal from '@/components/ui/StaggerReveal';

const PRESET_ITEMS = [
  { name: 'Daily Latte', emoji: '☕', amount: 5, description: '$5 coffee' },
  { name: 'Lunch Out', emoji: '🍔', amount: 12, description: '$12 lunch' },
  { name: 'Streaming Service', emoji: '📺', amount: 3, description: '$3/day subscription' },
  { name: 'Ride Share', emoji: '🚗', amount: 15, description: '$15 ride' },
  { name: 'Snack & Drink', emoji: '🍿', amount: 8, description: '$8 combo' },
];

export default function LatteCalculator() {
  const [dailyAmount, setDailyAmount] = useState(5);
  const [years, setYears] = useState(30);
  const [selectedItem, setSelectedItem] = useState(PRESET_ITEMS[0]);
  const [showComparison, setShowComparison] = useState(false);

  const interestRate = 7;

  // Calculate what investing this amount would yield
  const monthlyInvestment = dailyAmount * 30; // Approximate monthly from daily
  const investmentResult = useMemo(() => {
    return calculateCompoundInterest(0, monthlyInvestment, years, interestRate);
  }, [monthlyInvestment, years]);

  // Calculate total spent if you just spent it
  const totalSpent = dailyAmount * 365 * years;

  const difference = investmentResult.finalValue - totalSpent;

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-cream via-peach/5 to-rose/10">
      <div className="max-w-5xl mx-auto">
        <StaggerReveal>
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 text-5xl md:text-6xl"
            >
              ☕
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-mauve mb-4"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach to-coral">Latte Factor</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-taupe max-w-2xl mx-auto"
            >
              Small daily expenses don&apos;t seem like much. But what if you invested that money instead?
            </motion.p>
          </div>

          {/* Preset Items */}
          <Card className="p-6 md:p-8 mb-8">
            <h3 className="text-sm md:text-base font-semibold text-taupe mb-4 text-center">
              Choose your daily habit:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {PRESET_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setSelectedItem(item);
                    setDailyAmount(item.amount);
                    setShowComparison(false);
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedItem.name === item.name
                      ? 'border-peach bg-peach/20 scale-105'
                      : 'border-rose/30 bg-white/50 hover:border-peach/50 hover:bg-rose/10'
                  }`}
                >
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <div className="text-xs font-semibold text-mauve">{item.name}</div>
                  <div className="text-xs text-taupe">${item.amount}/day</div>
                </button>
              ))}
            </div>

            {/* Custom Amount Slider */}
            <div className="mb-6">
              <Slider
                label="Daily expense"
                value={dailyAmount}
                onChange={(val) => {
                  setDailyAmount(val);
                  setShowComparison(false);
                }}
                min={1}
                max={20}
                step={0.5}
                formatValue={(val) => `$${val.toFixed(2)}`}
                color="peach"
              />
            </div>

            {/* Years Slider */}
            <div className="mb-6">
              <Slider
                label="Over how many years?"
                value={years}
                onChange={(val) => {
                  setYears(val);
                  setShowComparison(false);
                }}
                min={5}
                max={40}
                step={5}
                formatValue={(val) => `${val} years`}
                color="coral"
              />
            </div>

            {/* Scenario Summary */}
            <div className="bg-gradient-to-br from-rose/20 to-peach/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-4xl">{selectedItem.emoji}</span>
                <div className="text-left">
                  <p className="text-lg font-bold text-mauve">{selectedItem.name}</p>
                  <p className="text-sm text-taupe">${dailyAmount.toFixed(2)} per day for {years} years</p>
                </div>
              </div>
              <div className="text-center pt-3 border-t border-taupe/20">
                <p className="text-xs text-taupe">
                  That&apos;s about <span className="font-bold text-mauve">${(dailyAmount * 30).toFixed(0)}/month</span>
                  {' '}or <span className="font-bold text-mauve">${(dailyAmount * 365).toFixed(0)}/year</span>
                </p>
              </div>
            </div>

            {/* Calculate Button */}
            {!showComparison && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <button
                  onClick={() => setShowComparison(true)}
                  className="px-8 py-4 bg-gradient-to-r from-peach via-coral to-peach text-mauve-dark font-bold rounded-xl
                    shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
                >
                  💰 See What You&apos;re Really Spending
                </button>
              </motion.div>
            )}
          </Card>

          {/* Results Comparison */}
          <AnimatePresence>
            {showComparison && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              >
                {/* Two-Column Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Spend It Column */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card elevation="medium" className="p-6 bg-gradient-to-br from-coral/10 to-white border-2 border-coral/20 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">💸</span>
                        <h4 className="text-lg font-bold text-coral">If You Spend It</h4>
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-coral font-mono mb-4">
                        {formatCurrency(totalSpent)}
                      </div>
                      <p className="text-sm text-taupe mb-4">
                        Total spent on {selectedItem.name.toLowerCase()} over {years} years
                      </p>
                      <div className="bg-white/60 rounded-lg p-4">
                        <p className="text-xs text-taupe">What you get:</p>
                        <ul className="text-sm text-mauve mt-2 space-y-1">
                          <li>• {(years * 365).toLocaleString()} {selectedItem.name.toLowerCase()}s</li>
                          <li>• Temporary satisfaction</li>
                          <li>• $0 left at the end</li>
                        </ul>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Invest It Column */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card elevation="high" className="p-6 bg-gradient-to-br from-success/10 to-white border-2 border-success/30 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">📈</span>
                        <h4 className="text-lg font-bold text-success">If You Invest It</h4>
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-success font-mono mb-4">
                        <AnimatedNumber value={investmentResult.finalValue} />
                      </div>
                      <p className="text-sm text-taupe mb-4">
                        Invested at {interestRate}% annual return over {years} years
                      </p>
                      <div className="bg-white/60 rounded-lg p-4">
                        <p className="text-xs text-taupe mb-2">Breakdown:</p>
                        <div className="text-sm space-y-2">
                          <div className="flex justify-between text-mauve">
                            <span>Your contributions:</span>
                            <span className="font-mono font-semibold">
                              {formatCurrency(investmentResult.totalContributed)}
                            </span>
                          </div>
                          <div className="flex justify-between text-success">
                            <span>Interest earned:</span>
                            <span className="font-mono font-bold">
                              {formatCurrency(investmentResult.totalInterestEarned)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {/* Dramatic Difference */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: 'spring' }}
                >
                  <Card elevation="high" className="p-8 md:p-12 bg-gradient-to-br from-peach/20 via-success/10 to-peach/20 border-2 border-peach/30">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                      >
                        <p className="text-base md:text-lg text-taupe mb-2">
                          By investing instead of spending, you&apos;d have:
                        </p>
                        <div className="text-5xl md:text-7xl font-bold font-mono mb-4">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-peach">
                            <AnimatedNumber value={difference} />
                          </span>
                        </div>
                        <p className="text-lg md:text-xl font-semibold text-mauve mb-6">
                          MORE in your pocket
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-white/60 rounded-xl p-6 max-w-2xl mx-auto"
                      >
                        <h5 className="text-lg font-bold text-mauve-dark mb-3">
                          🎯 The Real Cost
                        </h5>
                        <p className="text-sm md:text-base text-mauve leading-relaxed mb-4">
                          That daily ${dailyAmount.toFixed(2)} {selectedItem.name.toLowerCase()} isn&apos;t just costing you
                          <span className="font-bold"> ${dailyAmount.toFixed(2)}</span> — it&apos;s costing you
                          <span className="font-bold text-coral"> {formatCurrency(investmentResult.finalValue / (years * 365))} per day</span> in
                          future wealth!
                        </p>
                        <div className="bg-gradient-to-r from-success/10 to-peach/10 rounded-lg p-4">
                          <p className="text-xs text-mauve-dark">
                            💡 <span className="font-semibold">This doesn&apos;t mean never treat yourself!</span>
                            {' '}But being mindful of these small daily expenses and redirecting even some of them
                            toward investing can dramatically change your financial future.
                          </p>
                        </div>
                      </motion.div>

                      {/* Action Items */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-8 pt-6 border-t border-taupe/20"
                      >
                        <h5 className="text-lg font-bold text-mauve mb-4">
                          Small Changes, Big Impact
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                          <div className="bg-white/60 rounded-lg p-4">
                            <div className="text-2xl mb-2">🏠</div>
                            <p className="text-xs font-semibold text-mauve mb-1">Make coffee at home</p>
                            <p className="text-xs text-taupe">Save $3-5/day = $1,095-1,825/year</p>
                          </div>
                          <div className="bg-white/60 rounded-lg p-4">
                            <div className="text-2xl mb-2">🍱</div>
                            <p className="text-xs font-semibold text-mauve mb-1">Pack your lunch</p>
                            <p className="text-xs text-taupe">Save $8-12/day = $2,920-4,380/year</p>
                          </div>
                          <div className="bg-white/60 rounded-lg p-4">
                            <div className="text-2xl mb-2">📱</div>
                            <p className="text-xs font-semibold text-mauve mb-1">Cut unused subscriptions</p>
                            <p className="text-xs text-taupe">Save $10-30/month = $120-360/year</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </StaggerReveal>
      </div>
    </section>
  );
}
