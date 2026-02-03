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
            <h3 className="text-mauve-dark mb-8 text-center">
              The Power of Compound Interest
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Linear Growth */}
              <Card className="bg-rose/5">
                <h4 className="text-mauve-dark mb-2 text-center font-semibold">
                  Without Compound Interest
                </h4>
                <p className="text-taupe text-sm text-center mb-6">
                  Just saving $100/month
                </p>
                <LinearGrowthDiagram />
                <div className="mt-6 text-center">
                  <p className="text-mauve-dark font-mono text-2xl font-bold">
                    $36,000
                  </p>
                  <p className="text-taupe text-sm">after 30 years</p>
                </div>
              </Card>

              {/* Exponential Growth */}
              <Card className="bg-gradient-to-br from-peach/20 to-success/10 border-2 border-success/20">
                <h4 className="text-mauve-dark mb-2 text-center font-semibold">
                  With Compound Interest (7%)
                </h4>
                <p className="text-taupe text-sm text-center mb-6">
                  Same $100/month, but growing
                </p>
                <ExponentialGrowthDiagram />
                <div className="mt-6 text-center">
                  <p className="text-success font-mono text-2xl font-bold">
                    $122,709
                  </p>
                  <p className="text-taupe text-sm">after 30 years</p>
                  <p className="text-success text-sm font-semibold mt-2">
                    That&apos;s $86,709 in FREE MONEY!
                  </p>
                </div>
              </Card>
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
  // Linear growth: same amount each year
  const years = [5, 10, 15, 20, 25, 30];
  const maxValue = 36000;

  return (
    <div className="h-48 flex items-end justify-between gap-2 px-4">
      {years.map((year, index) => {
        const value = year * 1200; // $100/month * 12 months * years
        const heightPercent = (value / maxValue) * 100;

        return (
          <div key={year} className="flex-1 flex flex-col items-center gap-2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${heightPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              className="w-full bg-gradient-to-t from-taupe to-rose rounded-t-lg min-h-[4px]"
            />
            <span className="text-taupe text-xs font-medium">{year}y</span>
          </div>
        );
      })}
    </div>
  );
}

function ExponentialGrowthDiagram() {
  // Exponential growth with compound interest
  // Calculated values for $100/month at 7% annual for demonstration
  const dataPoints = [
    { year: 5, value: 7200 },
    { year: 10, value: 17308 },
    { year: 15, value: 31881 },
    { year: 20, value: 52397 },
    { year: 25, value: 81007 },
    { year: 30, value: 122709 },
  ];
  const maxValue = 122709;

  return (
    <div className="h-48 flex items-end justify-between gap-2 px-4">
      {dataPoints.map((data, index) => {
        const heightPercent = (data.value / maxValue) * 100;

        return (
          <div key={data.year} className="flex-1 flex flex-col items-center gap-2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${heightPercent}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="w-full bg-gradient-to-t from-success via-peach to-peach rounded-t-lg min-h-[4px] shadow-md"
            />
            <span className="text-taupe text-xs font-medium">{data.year}y</span>
          </div>
        );
      })}
    </div>
  );
}
