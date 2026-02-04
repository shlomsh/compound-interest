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
  { name: 'קפה יומי', emoji: '☕', amount: 15, description: '₪15 קפה' },
  { name: 'ארוחת צהריים', emoji: '🍔', amount: 35, description: '₪35 ארוחה' },
  { name: 'שירות סטרימינג', emoji: '📺', amount: 10, description: '₪10/יום מנוי' },
  { name: 'נסיעה במונית', emoji: '🚗', amount: 40, description: '₪40 נסיעה' },
  { name: 'חטיף ושתייה', emoji: '🍿', amount: 20, description: '₪20 קומבו' },
];

export default function LatteCalculator() {
  const [dailyAmount, setDailyAmount] = useState(15);
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach to-coral">אפקט הלאטה</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-taupe max-w-2xl mx-auto"
            >
              הוצאות יומיות קטנות לא נראות כמו הרבה. אבל מה אם הייתם משקיעים את הכסף הזה במקום?
            </motion.p>
          </div>

          {/* Preset Items */}
          <Card className="p-6 md:p-8 mb-8">
            <h3 className="text-sm md:text-base font-semibold text-taupe mb-4 text-center">
              בחרו את ההרגל היומי שלכם:
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
                  <div className="text-xs text-taupe">₪{item.amount}/יום</div>
                </button>
              ))}
            </div>

            {/* Custom Amount Slider */}
            <div className="mb-6">
              <Slider
                label="הוצאה יומית"
                value={dailyAmount}
                onChange={(val) => {
                  setDailyAmount(val);
                  setShowComparison(false);
                }}
                min={1}
                max={60}
                step={1}
                formatValue={(val) => `₪${val.toFixed(2)}`}
                color="peach"
              />
            </div>

            {/* Years Slider */}
            <div className="mb-6">
              <Slider
                label="על פני כמה שנים?"
                value={years}
                onChange={(val) => {
                  setYears(val);
                  setShowComparison(false);
                }}
                min={5}
                max={40}
                step={5}
                formatValue={(val) => `${val} שנים`}
                color="coral"
              />
            </div>

            {/* Scenario Summary */}
            <div className="bg-gradient-to-br from-rose/20 to-peach/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-4xl">{selectedItem.emoji}</span>
                <div className="text-right">
                  <p className="text-lg font-bold text-mauve">{selectedItem.name}</p>
                  <p className="text-sm text-taupe">₪{dailyAmount.toFixed(2)} ביום למשך {years} שנים</p>
                </div>
              </div>
              <div className="text-center pt-3 border-t border-taupe/20">
                <p className="text-xs text-taupe">
                  זה בערך <span className="font-bold text-mauve">₪{(dailyAmount * 30).toFixed(0)} בחודש</span>
                  {' '}או <span className="font-bold text-mauve">₪{(dailyAmount * 365).toFixed(0)} בשנה</span>
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
                  💰 ראו כמה אתם באמת מוציאים
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card elevation="medium" className="p-6 bg-gradient-to-br from-coral/10 to-white border-2 border-coral/20 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">💸</span>
                        <h4 className="text-lg font-bold text-coral">אם תוציאו את זה</h4>
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-coral font-mono mb-4">
                        {formatCurrency(totalSpent)}
                      </div>
                      <p className="text-sm text-taupe mb-4">
                        סך הכל הוצאה על {selectedItem.name.toLowerCase()} במשך {years} שנים
                      </p>
                      <div className="bg-white/60 rounded-lg p-4">
                        <p className="text-xs text-taupe">מה מקבלים:</p>
                        <ul className="text-sm text-mauve mt-2 space-y-1">
                          <li>• {(years * 365).toLocaleString()} {selectedItem.name.toLowerCase()}</li>
                          <li>• סיפוק זמני</li>
                          <li>• ₪0 בסוף</li>
                        </ul>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Invest It Column */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card elevation="high" className="p-6 bg-gradient-to-br from-success/10 to-white border-2 border-success/30 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">📈</span>
                        <h4 className="text-lg font-bold text-success">אם תשקיעו את זה</h4>
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-success font-mono mb-4">
                        <AnimatedNumber value={investmentResult.finalValue} />
                      </div>
                      <p className="text-sm text-taupe mb-4">
                        בהשקעה בתשואה שנתית של {interestRate}% במשך {years} שנים
                      </p>
                      <div className="bg-white/60 rounded-lg p-4">
                        <p className="text-xs text-taupe mb-2">פירוט:</p>
                        <div className="text-sm space-y-2">
                          <div className="flex justify-between text-mauve">
                            <span>ההפקדות שלכם:</span>
                            <span className="font-mono font-semibold">
                              {formatCurrency(investmentResult.totalContributed)}
                            </span>
                          </div>
                          <div className="flex justify-between text-success">
                            <span>ריבית שנצברה:</span>
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
                          אם הייתם משקיעים במקום מוציאים, היה לכם:
                        </p>
                        <div className="text-5xl md:text-7xl font-bold font-mono mb-4">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-peach">
                            <AnimatedNumber value={difference} />
                          </span>
                        </div>
                        <p className="text-lg md:text-xl font-semibold text-mauve mb-6">
                          יותר בכיס
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-white/60 rounded-xl p-6 max-w-2xl mx-auto"
                      >
                        <h5 className="text-lg font-bold text-mauve-dark mb-3">
                          🎯 העלות האמיתית
                        </h5>
                        <p className="text-sm md:text-base text-mauve leading-relaxed mb-4">
                          ה-₪{dailyAmount.toFixed(2)} היומיים על {selectedItem.name.toLowerCase()} לא עולים לכם רק
                          <span className="font-bold"> ₪{dailyAmount.toFixed(2)}</span> — הם עולים לכם
                          <span className="font-bold text-coral"> {formatCurrency(investmentResult.finalValue / (years * 365))} ליום</span> בעושר
                          עתידי!
                        </p>
                        <div className="bg-gradient-to-r from-success/10 to-peach/10 rounded-lg p-4">
                          <p className="text-xs text-mauve-dark">
                            💡 <span className="font-semibold">זה לא אומר שאסור לפנק את עצמכם!</span>
                            {' '}אבל מודעות להוצאות יומיות קטנות והפניית חלק מהן
                            להשקעה יכולה לשנות דרמטית את העתיד הפיננסי שלכם.
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
                          שינויים קטנים, השפעה גדולה
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right">
                          <div className="bg-white/60 rounded-lg p-4">
                            <div className="text-2xl mb-2">🏠</div>
                            <p className="text-xs font-semibold text-mauve mb-1">הכינו קפה בבית</p>
                            <p className="text-xs text-taupe">חסכו ₪10-15/יום = ₪3,650-5,475/שנה</p>
                          </div>
                          <div className="bg-white/60 rounded-lg p-4">
                            <div className="text-2xl mb-2">🍱</div>
                            <p className="text-xs font-semibold text-mauve mb-1">קחו אוכל מהבית</p>
                            <p className="text-xs text-taupe">חסכו ₪20-35/יום = ₪7,300-12,775/שנה</p>
                          </div>
                          <div className="bg-white/60 rounded-lg p-4">
                            <div className="text-2xl mb-2">📱</div>
                            <p className="text-xs font-semibold text-mauve mb-1">בטלו מנויים מיותרים</p>
                            <p className="text-xs text-taupe">חסכו ₪30-100/חודש = ₪360-1,200/שנה</p>
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
