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
              The Tale of <span className="text-success">Two Friends</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-taupe max-w-2xl mx-auto"
            >
              Meet Alex and Jordan. They both save the same amount, but start at different times.
              The results might surprise you.
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
                  <h3 className="text-xl font-bold text-mauve">Alex</h3>
                  <p className="text-sm text-taupe">The Early Starter</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-taupe">Starts investing at:</span>
                  <span className="font-bold text-mauve font-mono">{alexStartAge} years old</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">Monthly contribution:</span>
                  <span className="font-bold text-success font-mono">${monthlyContribution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">Invests for:</span>
                  <span className="font-bold text-mauve font-mono">{retirementAge - alexStartAge} years</span>
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
                  <h3 className="text-xl font-bold text-mauve">Jordan</h3>
                  <p className="text-sm text-taupe">The Late Starter</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-taupe">Starts investing at:</span>
                  <span className="font-bold text-mauve font-mono">{jordanStartAge} years old</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">Monthly contribution:</span>
                  <span className="font-bold text-coral font-mono">${monthlyContribution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-taupe">Invests for:</span>
                  <span className="font-bold text-mauve font-mono">{retirementAge - jordanStartAge} years</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Age Adjustment Sliders */}
          <Card className="p-6 md:p-8 mb-8">
            <h4 className="text-lg font-bold text-mauve mb-6 text-center">
              Adjust Their Starting Ages
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Slider
                label="Alex starts at age"
                value={alexStartAge}
                onChange={setAlexStartAge}
                min={15}
                max={40}
                step={1}
                color="success"
              />
              <Slider
                label="Jordan starts at age"
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
              leftLabel={`Alex (starts at ${alexStartAge})`}
              rightLabel={`Jordan (starts at ${jordanStartAge})`}
              leftColor="#6B9080"
              rightColor="#E8998D"
            />
          </div>

          {/* Results Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Alex's Total */}
            <Card elevation="high" className="p-6 bg-gradient-to-br from-success/5 to-white border-2 border-success/20">
              <h4 className="text-sm text-taupe mb-2">Alex&apos;s Total at 65</h4>
              <div className="text-3xl md:text-4xl font-bold text-success font-mono mb-3">
                <AnimatedNumber value={alexData.total} />
              </div>
              <div className="text-xs text-taupe space-y-1">
                <div className="flex justify-between">
                  <span>Contributed:</span>
                  <span className="font-mono">{formatCurrency(alexData.contributed)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Interest earned:</span>
                  <span className="font-mono font-semibold">{formatCurrency(alexData.interest)}</span>
                </div>
              </div>
            </Card>

            {/* Jordan's Total */}
            <Card elevation="high" className="p-6 bg-gradient-to-br from-coral/5 to-white border-2 border-coral/20">
              <h4 className="text-sm text-taupe mb-2">Jordan&apos;s Total at 65</h4>
              <div className="text-3xl md:text-4xl font-bold text-coral font-mono mb-3">
                <AnimatedNumber value={jordanData.total} />
              </div>
              <div className="text-xs text-taupe space-y-1">
                <div className="flex justify-between">
                  <span>Contributed:</span>
                  <span className="font-mono">{formatCurrency(jordanData.contributed)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Interest earned:</span>
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
                💰 Show The Difference
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
                      The Power of Starting {yearsDifference} Years Earlier
                    </h4>
                    <p className="text-sm md:text-base text-taupe mb-6">
                      By starting at {alexStartAge} instead of {jordanStartAge}, Alex has:
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
                    <p className="text-lg md:text-xl text-mauve font-semibold">MORE at retirement</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/60 rounded-xl p-6 max-w-2xl mx-auto"
                  >
                    <p className="text-sm md:text-base text-mauve-dark leading-relaxed">
                      <span className="font-bold">Same monthly contribution</span> of ${monthlyContribution}, but
                      <span className="font-bold text-success"> {formatCurrency(difference)} more</span> in savings.
                      That&apos;s the exponential power of compound interest and time working together.
                    </p>
                    <div className="mt-4 pt-4 border-t border-taupe/20">
                      <p className="text-xs text-taupe">
                        💡 <span className="font-semibold">Key Takeaway:</span> Every year you wait costs you exponentially more.
                        The best time to start was yesterday. The second best time is today.
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
