'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';
import Slider from '@/components/ui/Slider';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import { calculateCompoundInterest } from '@/lib/compound';
import { formatCurrency } from '@/lib/format';
import StaggerReveal from '@/components/ui/StaggerReveal';

export default function TimeMachine() {
  const [yearsAgo, setYearsAgo] = useState(5);
  const [monthlyAmount, setMonthlyAmount] = useState(100);
  const [showRegret, setShowRegret] = useState(false);

  const interestRate = 7;

  // If you started X years ago
  const pastScenario = useMemo(() => {
    return calculateCompoundInterest(0, monthlyAmount, yearsAgo, interestRate);
  }, [yearsAgo, monthlyAmount]);

  const missedGrowth = pastScenario.finalValue;
  const missedInterest = pastScenario.totalInterestEarned;

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-rose/10 via-cream to-peach/10">
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
              ⏰
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-mauve mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-peach">מכונת הזמן</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-taupe max-w-2xl mx-auto"
            >
              תהיתם פעם &ldquo;מה היה קורה אם הייתי מתחיל להשקיע מוקדם יותר?&rdquo; בואו נגלה.
            </motion.p>
          </div>

          {/* Interactive Controls */}
          <Card className="p-6 md:p-8 mb-8">
            <h3 className="text-lg md:text-xl font-bold text-mauve mb-6 text-center">
              מה היה קורה אם הייתם מתחילים...
            </h3>

            <div className="space-y-6 mb-8">
              <Slider
                label="לפני כמה שנים"
                value={yearsAgo}
                onChange={(val) => {
                  setYearsAgo(val);
                  setShowRegret(false); // Reset reveal when changing
                }}
                min={1}
                max={20}
                step={1}
                color="coral"
              />

              <Slider
                label="להשקיע סכום זה בחודש"
                value={monthlyAmount}
                onChange={(val) => {
                  setMonthlyAmount(val);
                  setShowRegret(false); // Reset reveal when changing
                }}
                min={25}
                max={500}
                step={25}
                formatValue={(val) => `₪${val}`}
                color="peach"
              />
            </div>

            {/* Scenario Description */}
            <div className="bg-gradient-to-br from-rose/20 to-peach/20 rounded-xl p-6 mb-6">
              <p className="text-sm md:text-base text-mauve-dark text-center leading-relaxed">
                אם הייתם מתחילים להשקיע <span className="font-bold">₪{monthlyAmount} בחודש</span>
                {' '}<span className="font-bold">לפני {yearsAgo} {yearsAgo === 1 ? 'שנה' : 'שנים'}</span>
                {' '}בתשואה שנתית של {interestRate}%...
              </p>
            </div>

            {/* Reveal Button */}
            {!showRegret && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <button
                  onClick={() => setShowRegret(true)}
                  className="px-8 py-4 bg-gradient-to-r from-coral via-peach to-coral text-mauve-dark font-bold rounded-xl
                    shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
                >
                  ⏰ חזרו אחורה בזמן
                </button>
              </motion.div>
            )}
          </Card>

          {/* Results Reveal */}
          <AnimatePresence>
            {showRegret && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              >
                <Card elevation="high" className="p-8 md:p-12 bg-gradient-to-br from-white via-peach/10 to-rose/10 border-2 border-coral/20">
                  <div className="text-center">
                    {/* Big Number Reveal */}
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="mb-6"
                    >
                      <p className="text-base md:text-lg text-taupe mb-2">
                        היה לכם היום:
                      </p>
                      <div className="text-5xl md:text-7xl font-bold font-mono mb-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-success via-peach to-coral">
                          <AnimatedNumber value={missedGrowth} />
                        </span>
                      </div>
                      <p className="text-sm text-taupe">
                        (מתוכם <span className="font-bold text-coral">{formatCurrency(missedInterest)}</span> מריבית)
                      </p>
                    </motion.div>

                    {/* Breakdown */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                    >
                      <div className="bg-white/60 rounded-lg p-4">
                        <p className="text-xs text-taupe mb-1">הייתם מפקידים</p>
                        <p className="text-2xl font-bold text-mauve font-mono">
                          {formatCurrency(pastScenario.totalContributed)}
                        </p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-4">
                        <p className="text-xs text-taupe mb-1">הריבית הייתה מרוויחה</p>
                        <p className="text-2xl font-bold text-success font-mono">
                          {formatCurrency(missedInterest)}
                        </p>
                      </div>
                    </motion.div>

                    {/* Motivational Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-r from-success/10 to-peach/10 rounded-xl p-6 border-2 border-success/20"
                    >
                      <h4 className="text-lg md:text-xl font-bold text-mauve-dark mb-3">
                        אבל יש חדשות טובות! 🌟
                      </h4>
                      <p className="text-sm md:text-base text-mauve leading-relaxed mb-4">
                        אי אפשר לשנות את העבר, אבל <span className="font-bold text-success">כן אפשר</span> לשנות את העתיד. התחילו היום, ובעוד {yearsAgo} שנים תודו לעצמכם במקום לתהות &ldquo;מה אם?&rdquo;
                      </p>
                      <div className="bg-white/60 rounded-lg p-4">
                        <p className="text-xs text-taupe mb-2">אם תתחילו היום עם ₪{monthlyAmount} בחודש:</p>
                        <ul className="text-xs md:text-sm text-mauve-dark space-y-2 text-right">
                          <li className="flex items-start gap-2">
                            <span className="text-success text-lg">✓</span>
                            <span>בעוד {yearsAgo} שנים: יהיה לכם {formatCurrency(pastScenario.finalValue)}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-success text-lg">✓</span>
                            <span>בעוד {yearsAgo * 2} שנים: יהיה לכם {formatCurrency(calculateCompoundInterest(0, monthlyAmount, yearsAgo * 2, interestRate).finalValue)}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-success text-lg">✓</span>
                            <span>בעוד 30 שנה: יהיה לכם {formatCurrency(calculateCompoundInterest(0, monthlyAmount, 30, interestRate).finalValue)}</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="mt-8 pt-6 border-t border-taupe/20"
                    >
                      <p className="text-xl md:text-2xl font-bold text-mauve-dark mb-2">
                        הזמן הכי טוב להתחיל היה לפני {yearsAgo} שנים.
                      </p>
                      <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-success to-peach">
                        הזמן השני הכי טוב הוא עכשיו. 🚀
                      </p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </StaggerReveal>
      </div>
    </section>
  );
}
