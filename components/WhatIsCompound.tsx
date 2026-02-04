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
            מה זו ריבית דריבית?
          </h2>
          <p className="text-taupe text-xl text-center max-w-3xl mx-auto mb-16">
            זהו המרכיב הסודי שגורם לכסף לצמוח מהר יותר ממה שחשבתם.
            הנה הגרסה הפשוטה:
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
              <h3 className="text-mauve-dark mb-3">אתם חוסכים כסף</h3>
              <p className="text-taupe">
                שימו קצת כסף בחשבון חיסכון או השקעה. גם סכום קטן עובד.
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
              <h3 className="text-mauve-dark mb-3">הכסף מרוויח ריבית</h3>
              <p className="text-taupe">
                הכסף שלכם צומח באחוז מסוים כל שנה. זו הריבית שלכם.
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
              <h3 className="text-mauve-dark mb-3">הריבית מרוויחה ריבית</h3>
              <p className="text-taupe">
                הנה הקסם: בשנה הבאה, תרוויחו ריבית על הכסף המקורי
                וגם על הריבית מהשנה שעברה.
              </p>
            </Card>
          </ScrollReveal>
        </div>

        {/* Linear vs Exponential Diagram */}
        <ScrollReveal>
          <div className="max-w-5xl mx-auto mb-20">
            <h3 className="text-mauve-dark mb-10 text-center text-3xl md:text-4xl font-bold">
              אותו חיסכון. תוצאות שונות לגמרי.
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-end">
              {/* Linear Growth - intentionally muted */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-rose/30 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-taupe/40" />
                  <h4 className="text-taupe font-semibold text-lg">
                    רק חיסכון
                  </h4>
                </div>
                <p className="text-taupe/60 text-sm mb-8">
                  ₪100 בחודש מתחת למזרן
                </p>
                <LinearGrowthDiagram />
                <div className="mt-8 text-center border-t border-rose/20 pt-6">
                  <p className="text-taupe/50 text-xs uppercase tracking-wider font-semibold mb-1">
                    אחרי 30 שנה
                  </p>
                  <p className="text-mauve font-mono text-4xl md:text-5xl font-bold tracking-tight">
                    ₪36,000
                  </p>
                </div>
              </div>

              {/* Exponential Growth - vibrant and exciting */}
              <div className="relative bg-gradient-to-br from-success/5 via-white to-peach/10 rounded-2xl p-6 md:p-8 border-2 border-success/30 shadow-lg shadow-success/10">
                <div className="absolute -top-3 left-6 bg-success text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  +241% יותר
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <h4 className="text-mauve-dark font-semibold text-lg">
                    חיסכון + השקעה
                  </h4>
                </div>
                <p className="text-taupe text-sm mb-8">
                  ₪100 בחודש בתשואה שנתית של 7%
                </p>
                <ExponentialGrowthDiagram />
                <div className="mt-8 text-center border-t border-success/20 pt-6">
                  <p className="text-success/70 text-xs uppercase tracking-wider font-semibold mb-1">
                    אחרי 30 שנה
                  </p>
                  <p className="text-success font-mono text-4xl md:text-5xl font-bold tracking-tight">
                    ₪122,709
                  </p>
                  <p className="mt-3 text-success font-semibold text-sm">
                    +₪86,709 שהתקבלו מריבית בלבד
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
                <h3 className="text-mauve-dark mb-6">אפקט כדור השלג</h3>
                <p className="text-taupe text-lg mb-6">
                  חשבו על ריבית דריבית כמו כדור שלג שמתגלגל במורד גבעה.
                  בהתחלה, הוא קטן. אבל ככל שהוא מתגלגל, הוא אוסף עוד שלג.
                  ככל שהוא גדל, הוא אוסף יותר שלג בכל גלגול.
                  בקרוב, הוא ענק — הרבה יותר גדול מכפי שהיה בהתחלה.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <SnowballStep size="small" label="שנה 1" />
                  <Arrow />
                  <SnowballStep size="medium" label="שנה 10" />
                  <Arrow />
                  <SnowballStep size="large" label="שנה 30" />
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        {/* Simple example */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-mauve-dark mb-6 text-center">
              דוגמה פשוטה
            </h3>
            <Card className="bg-rose/10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mauve-dark rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">₪</span>
                  </div>
                  <div>
                    <p className="text-mauve-dark font-semibold mb-1">
                      אתם חוסכים ₪100
                    </p>
                    <p className="text-taupe text-sm">הסכום ההתחלתי שלכם</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                  <div>
                    <p className="text-mauve-dark font-semibold mb-1">
                      הכסף מרוויח 7% בשנה
                    </p>
                    <p className="text-taupe text-sm">
                      אחרי שנה: ₪107 (הרווחתם ₪7)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center shrink-0">
                    <span className="text-mauve-dark font-bold text-lg">✨</span>
                  </div>
                  <div>
                    <p className="text-mauve-dark font-semibold mb-1">
                      הקסם של ריבית דריבית
                    </p>
                    <p className="text-taupe text-sm">
                      אחרי 10 שנים: ₪197 • אחרי 30 שנה: ₪761
                    </p>
                    <p className="text-success text-sm font-medium mt-2">
                      לא הוספתם אגורה, אבל ה-₪100 שלכם הפכו ל-₪761!
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
              מוכנים לראות מה הכסף שלכם יכול להפוך?
            </p>
            <p className="text-taupe mb-6">
              נסו את המחשבון למטה כדי להתנסות עם סכומים ותקופות שונות.
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
        <span className="text-mauve-dark font-bold text-xl">₪</span>
      </motion.div>
      <span className="text-taupe text-sm font-medium">{label}</span>
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-mauve/30 text-2xl hidden sm:block">←</div>
  );
}

function LinearGrowthDiagram() {
  const years = [5, 10, 15, 20, 25, 30];
  const maxValue = 122709;
  const barAreaHeight = 200;

  return (
    <div className="flex items-end justify-between gap-3 px-2">
      {years.map((year, index) => {
        const value = year * 1200;
        const barHeight = Math.round((value / maxValue) * barAreaHeight);
        const displayValue = `₪${(value / 1000).toFixed(0)}k`;

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
            <span className="text-taupe/60 text-xs font-medium">{year}ש</span>
          </div>
        );
      })}
    </div>
  );
}

function ExponentialGrowthDiagram() {
  const dataPoints = [
    { year: 5, value: 7200 },
    { year: 10, value: 17308 },
    { year: 15, value: 31881 },
    { year: 20, value: 52397 },
    { year: 25, value: 81007 },
    { year: 30, value: 122709 },
  ];
  const maxValue = 122709;
  const barAreaHeight = 200;

  return (
    <div className="flex items-end justify-between gap-3 px-2">
      {dataPoints.map((data, index) => {
        const barHeight = Math.round((data.value / maxValue) * barAreaHeight);
        const displayValue = `₪${(data.value / 1000).toFixed(0)}k`;

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
            <span className="text-taupe text-xs font-medium">{data.year}ש</span>
          </div>
        );
      })}
    </div>
  );
}
