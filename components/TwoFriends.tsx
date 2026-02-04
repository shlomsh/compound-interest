'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Slider from '@/components/ui/Slider';
import DualChart from '@/components/DualChart';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import { calculateCompoundInterest } from '@/lib/compound';
import { formatCurrency } from '@/lib/format';
import StaggerReveal from '@/components/ui/StaggerReveal';

export default function TwoFriends() {
  const [alexStartAge, setAlexStartAge] = useState(18);
  const [jordanStartAge, setJordanStartAge] = useState(28);
  const [showDifference, setShowDifference] = useState(false);

  const retirementAge = 65;
  const monthlyContribution = 200;
  const interestRate = 7;

  // Calculate Alex's investment
  const alexData = useMemo(() => {
    const yearsInvesting = retirementAge - alexStartAge;
    const result = calculateCompoundInterest(0, monthlyContribution, yearsInvesting, interestRate);
    return {
      total: result.finalValue,
      contributed: result.totalContributed,
      interest: result.totalInterestEarned,
      chartData: result.yearData.map((d) => ({
        year: alexStartAge + d.year,
        value: d.totalValue,
      })),
    };
  }, [alexStartAge]);

  // Calculate Jordan's investment
  const jordanData = useMemo(() => {
    const yearsInvesting = retirementAge - jordanStartAge;
    const result = calculateCompoundInterest(0, monthlyContribution, yearsInvesting, interestRate);
    return {
      total: result.finalValue,
      contributed: result.totalContributed,
      interest: result.totalInterestEarned,
      chartData: result.yearData.map((d) => ({
        year: jordanStartAge + d.year,
        value: d.totalValue,
      })),
    };
  }, [jordanStartAge]);

  const difference = alexData.total - jordanData.total;
  const yearsDifference = jordanStartAge - alexStartAge;

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-cream via-rose/5 to-cream">
      <div className="max-w-7xl mx-auto">
        <StaggerReveal>
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-mauve mb-4"
            >
              סיפור של <span className="text-success">שני חברים</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-taupe max-w-2xl mx-auto"
            >
              הכירו את אלכס וירדן. שניהם חוסכים את אותו סכום, אבל מתחילים בזמנים שונים.
              התוצאות עשויות להפתיע אתכם.
            </motion.p>
          </div>

          {/* Character Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Alex */}
            <Card elevation="medium" className="p-6 bg-gradient-to-br from-success/10 to-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center text-3xl">
                  👤
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mauve">אלכס</h3>
                  <p className="text-sm text-taupe">המתחיל המוקדם</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-taupe">מתחיל להשקיע בגיל:</span>
                  <span className="font-bold text-mauve font-mono">{alexStartAge}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">הפקדה חודשית:</span>
                  <span className="font-bold text-success font-mono">₪{monthlyContribution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">משקיע במשך:</span>
                  <span className="font-bold text-mauve font-mono">{retirementAge - alexStartAge} שנים</span>
                </div>
              </div>
            </Card>

            {/* Jordan */}
            <Card elevation="medium" className="p-6 bg-gradient-to-br from-coral/10 to-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-coral/20 flex items-center justify-center text-3xl">
                  👤
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mauve">ירדן</h3>
                  <p className="text-sm text-taupe">המתחיל המאוחר</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-taupe">מתחיל להשקיע בגיל:</span>
                  <span className="font-bold text-mauve font-mono">{jordanStartAge}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">הפקדה חודשית:</span>
                  <span className="font-bold text-coral font-mono">₪{monthlyContribution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">משקיע במשך:</span>
                  <span className="font-bold text-mauve font-mono">{retirementAge - jordanStartAge} שנים</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Age Adjustment Sliders */}
          <Card className="p-6 md:p-8 mb-8">
            <h4 className="text-lg font-bold text-mauve mb-6 text-center">
              שנו את גיל ההתחלה שלהם
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Slider
                label="אלכס מתחיל בגיל"
                value={alexStartAge}
                onChange={setAlexStartAge}
                min={15}
                max={40}
                step={1}
                color="success"
              />
              <Slider
                label="ירדן מתחיל בגיל"
                value={jordanStartAge}
                onChange={setJordanStartAge}
                min={15}
                max={40}
                step={1}
                color="coral"
              />
            </div>
          </Card>

          {/* Charts */}
          <div className="mb-8">
            <DualChart
              leftData={alexData.chartData}
              rightData={jordanData.chartData}
              leftLabel={`אלכס (מתחיל ב-${alexStartAge})`}
              rightLabel={`ירדן (מתחיל ב-${jordanStartAge})`}
              leftColor="#6B9080"
              rightColor="#E8998D"
            />
          </div>

          {/* Results Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Alex's Total */}
            <Card elevation="high" className="p-6 bg-gradient-to-br from-success/5 to-white border-2 border-success/20">
              <h4 className="text-sm text-taupe mb-2">הסכום של אלכס בגיל 65</h4>
              <div className="text-3xl md:text-4xl font-bold text-success font-mono mb-3">
                <AnimatedNumber value={alexData.total} />
              </div>
              <div className="text-xs text-taupe space-y-1">
                <div className="flex justify-between">
                  <span>הפקדות:</span>
                  <span className="font-mono">{formatCurrency(alexData.contributed)}</span>
                </div>
                <div className="flex justify-between">
                  <span>ריבית שנצברה:</span>
                  <span className="font-mono font-semibold">{formatCurrency(alexData.interest)}</span>
                </div>
              </div>
            </Card>

            {/* Jordan's Total */}
            <Card elevation="high" className="p-6 bg-gradient-to-br from-coral/5 to-white border-2 border-coral/20">
              <h4 className="text-sm text-taupe mb-2">הסכום של ירדן בגיל 65</h4>
              <div className="text-3xl md:text-4xl font-bold text-coral font-mono mb-3">
                <AnimatedNumber value={jordanData.total} />
              </div>
              <div className="text-xs text-taupe space-y-1">
                <div className="flex justify-between">
                  <span>הפקדות:</span>
                  <span className="font-mono">{formatCurrency(jordanData.contributed)}</span>
                </div>
                <div className="flex justify-between">
                  <span>ריבית שנצברה:</span>
                  <span className="font-mono font-semibold">{formatCurrency(jordanData.interest)}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Dramatic Difference Reveal */}
          {!showDifference && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <button
                onClick={() => setShowDifference(true)}
                className="px-8 py-4 bg-gradient-to-r from-peach to-success text-mauve-dark font-bold rounded-xl
                  shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
              >
                💰 הראו לי את ההבדל
              </button>
            </motion.div>
          )}

          {showDifference && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <Card elevation="high" className="p-8 md:p-12 bg-gradient-to-br from-peach/20 via-success/10 to-peach/20 border-2 border-peach/30">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                    className="mb-4"
                  >
                    <h4 className="text-xl md:text-2xl font-bold text-mauve mb-2">
                      הכוח של להתחיל {yearsDifference} שנים מוקדם יותר
                    </h4>
                    <p className="text-sm md:text-base text-taupe mb-6">
                      בכך שהתחיל בגיל {alexStartAge} במקום {jordanStartAge}, לאלכס יש:
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                    className="inline-block mb-6"
                  >
                    <div className="text-5xl md:text-7xl font-bold font-mono mb-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-peach">
                        <AnimatedNumber value={difference} />
                      </span>
                    </div>
                    <p className="text-lg md:text-xl text-mauve font-semibold">יותר בפרישה</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/60 rounded-xl p-6 max-w-2xl mx-auto"
                  >
                    <p className="text-sm md:text-base text-mauve-dark leading-relaxed">
                      <span className="font-bold">אותה הפקדה חודשית</span> של ₪{monthlyContribution}, אבל
                      <span className="font-bold text-success"> {formatCurrency(difference)} יותר</span> בחיסכון.
                      זהו הכוח האקספוננציאלי של ריבית דריבית וזמן שעובדים ביחד.
                    </p>
                    <div className="mt-4 pt-4 border-t border-taupe/20">
                      <p className="text-xs text-taupe">
                        💡 <span className="font-semibold">המסקנה:</span> כל שנה שמחכים עולה אקספוננציאלית יותר.
                        הזמן הכי טוב להתחיל היה אתמול. הזמן השני הכי טוב הוא היום.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          )}
        </StaggerReveal>
      </div>
    </section>
  );
}
