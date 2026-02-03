'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import Card from './ui/Card';

export default function WhatIsCompound() {
  return (
    <section id="what-is-compound" className="section-padding bg-cream">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-mauve-dark mb-6 text-center">
            What Is Compound Interest?
          </h2>
          <p className="text-taupe text-xl text-center max-w-3xl mx-auto mb-16">
            It&apos;s the secret ingredient that makes money grow faster than you
            might think. Here&apos;s the simple version:
          </p>
        </ScrollReveal>

        {/* Three-step explanation */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ScrollReveal delay={0.1}>
            <Card className="text-center h-full">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-success font-mono">
                  1
                </span>
              </div>
              <h3 className="text-mauve-dark mb-3">You Save Money</h3>
              <p className="text-taupe">
                Put some money into a savings account or investment. Even a
                small amount works.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="text-center h-full">
              <div className="w-16 h-16 bg-peach/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-mauve-dark font-mono">
                  2
                </span>
              </div>
              <h3 className="text-mauve-dark mb-3">It Earns Interest</h3>
              <p className="text-taupe">
                Your money grows by a certain percentage each year. This is
                your interest.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Card className="text-center h-full">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-success font-mono">
                  3
                </span>
              </div>
              <h3 className="text-mauve-dark mb-3">Interest Earns Interest</h3>
              <p className="text-taupe">
                Here&apos;s the magic: Next year, you earn interest on your
                original money PLUS the interest from last year.
              </p>
            </Card>
          </ScrollReveal>
        </div>

        {/* Linear vs Exponential Diagram */}
        <ScrollReveal>
          <div className="max-w-5xl mx-auto mb-20">
            <h3 className="text-mauve-dark mb-10 text-center text-3xl md:text-4xl font-bold">
              Same Savings. Wildly Different Results.
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-end">
              {/* Linear Growth - intentionally muted */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-rose/30 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-taupe/40" />
                  <h4 className="text-taupe font-semibold text-lg">
                    Just Saving
                  </h4>
                </div>
                <p className="text-taupe/60 text-sm mb-8">
                  $100/month under the mattress
                </p>
                <LinearGrowthDiagram />
                <div className="mt-8 text-center border-t border-rose/20 pt-6">
                  <p className="text-taupe/50 text-xs uppercase tracking-wider font-semibold mb-1">
                    After 30 years
                  </p>
                  <p className="text-mauve font-mono text-4xl md:text-5xl font-bold tracking-tight">
                    $36,000
                  </p>
                </div>
              </div>

              {/* Exponential Growth - vibrant and exciting */}
              <div className="relative bg-gradient-to-br from-success/5 via-white to-peach/10 rounded-2xl p-6 md:p-8 border-2 border-success/30 shadow-lg shadow-success/10">
                <div className="absolute -top-3 right-6 bg-success text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  +241% more
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <h4 className="text-mauve-dark font-semibold text-lg">
                    Saving + Investing
                  </h4>
                </div>
                <p className="text-taupe text-sm mb-8">
                  $100/month at 7% annual return
                </p>
                <ExponentialGrowthDiagram />
                <div className="mt-8 text-center border-t border-success/20 pt-6">
                  <p className="text-success/70 text-xs uppercase tracking-wider font-semibold mb-1">
                    After 30 years
                  </p>
                  <p className="text-success font-mono text-4xl md:text-5xl font-bold tracking-tight">
                    $122,709
                  </p>
                  <p className="mt-3 text-success font-semibold text-sm">
                    +$86,709 earned from interest alone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The snowball effect explanation */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-peach/20 to-success/10">
              <div className="text-center">
                <h3 className="text-mauve-dark mb-6">The Snowball Effect</h3>
                <p className="text-taupe text-lg mb-6">
                  Think of compound interest like a snowball rolling down a
                  hill. At first, it&apos;s small. But as it rolls, it picks up
                  more snow. The bigger it gets, the more snow it picks up with
                  each roll. Soon, it&apos;s massive—way bigger than when it
                  started.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <SnowballStep size="small" label="Year 1" />
                  <Arrow />
                  <SnowballStep size="medium" label="Year 10" />
                  <Arrow />
                  <SnowballStep size="large" label="Year 30" />
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        {/* Simple example */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-mauve-dark mb-6 text-center">
              A Simple Example
            </h3>
            <Card className="bg-rose/10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mauve-dark rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">$</span>
                  </div>
                  <div>
                    <p className="text-mauve-dark font-semibold mb-1">
                      You save $100
                    </p>
                    <p className="text-taupe text-sm">Your starting amount</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                  <div>
                    <p className="text-mauve-dark font-semibold mb-1">
                      It earns 7% per year
                    </p>
                    <p className="text-taupe text-sm">
                      After 1 year: $107 (you earned $7)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center shrink-0">
                    <span className="text-mauve-dark font-bold text-lg">✨</span>
                  </div>
                  <div>
                    <p className="text-mauve-dark font-semibold mb-1">
                      The magic compounds
                    </p>
                    <p className="text-taupe text-sm">
                      After 10 years: $197 • After 30 years: $761
                    </p>
                    <p className="text-success text-sm font-medium mt-2">
                      You didn&apos;t add a single penny, but your $100 became
                      $761!
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        {/* Call to action */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16">
            <p className="text-mauve-dark text-xl font-semibold mb-2">
              Ready to see what your money could become?
            </p>
            <p className="text-taupe mb-6">
              Try the calculator below to experiment with different amounts and
              timeframes.
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-4xl"
            >
              ↓
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Helper components
function SnowballStep({ size, label }: { size: string; label: string }) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-20 h-20',
    large: 'w-32 h-32',
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`${sizeClasses[size as keyof typeof sizeClasses]} bg-gradient-to-br from-rose to-peach rounded-full shadow-lg flex items-center justify-center`}
      >
        <span className="text-mauve-dark font-bold text-xl">$</span>
      </motion.div>
      <span className="text-taupe text-sm font-medium">{label}</span>
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-mauve/30 text-2xl hidden sm:block">→</div>
  );
}

function LinearGrowthDiagram() {
  // Linear: $100/month, each year adds the same $1,200
  // Shared scale with exponential chart so absolute difference is visible
  const years = [5, 10, 15, 20, 25, 30];
  const maxValue = 122709; // same as exponential
  const barAreaHeight = 200; // px – explicit so percentage math works

  return (
    <div className="flex items-end justify-between gap-3 px-2">
      {years.map((year, index) => {
        const value = year * 1200;
        const barHeight = Math.round((value / maxValue) * barAreaHeight);
        const displayValue = `$${(value / 1000).toFixed(0)}k`;

        return (
          <div key={year} className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-taupe/50 text-[10px] font-mono font-semibold">
              {displayValue}
            </span>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: barHeight }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              className="w-full bg-gradient-to-t from-taupe/40 to-taupe/20 rounded-t-lg"
            />
            <span className="text-taupe/60 text-xs font-medium">{year}y</span>
          </div>
        );
      })}
    </div>
  );
}

function ExponentialGrowthDiagram() {
  // Exponential: $100/month at 7% — hockey-stick shape
  // Own scale so early bars are tiny and later bars explode upward
  const dataPoints = [
    { year: 5, value: 7200 },
    { year: 10, value: 17308 },
    { year: 15, value: 31881 },
    { year: 20, value: 52397 },
    { year: 25, value: 81007 },
    { year: 30, value: 122709 },
  ];
  const maxValue = 122709;
  const barAreaHeight = 200; // px

  return (
    <div className="flex items-end justify-between gap-3 px-2">
      {dataPoints.map((data, index) => {
        const barHeight = Math.round((data.value / maxValue) * barAreaHeight);
        const displayValue = `$${(data.value / 1000).toFixed(0)}k`;

        return (
          <div key={data.year} className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-success/70 text-[10px] font-mono font-semibold">
              {displayValue}
            </span>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: barHeight }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="w-full bg-gradient-to-t from-success to-success/40 rounded-t-lg shadow-sm shadow-success/20"
            />
            <span className="text-taupe text-xs font-medium">{data.year}y</span>
          </div>
        );
      })}
    </div>
  );
}
