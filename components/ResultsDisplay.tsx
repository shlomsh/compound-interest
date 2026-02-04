'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
  const [copySuccess, setCopySuccess] = useState(false);

  // Calculate percentages for visual split
  const contributedPercent = totalValue > 0 ? (totalContributed / totalValue) * 100 : 0;
  const interestPercent = totalValue > 0 ? (interestEarned / totalValue) * 100 : 0;

  // Share results handler
  const handleShare = async () => {
    const shareText = `💰 אני יכול/ה לגדל את הכסף שלי ל-${formatCurrency(totalValue)}! עם ${formatCurrency(interestEarned)} שנצברו כריבית. למדו על ריבית דריבית וראו את הפוטנציאל שלכם`;

    try {
      // Try Web Share API first (mobile-friendly)
      if (navigator.share) {
        await navigator.share({
          text: shareText,
          title: 'תוצאות מחשבון ריבית דריבית',
        });
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(shareText);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      }
    } catch (error) {
      // User cancelled or error occurred
      console.log('Share cancelled or failed');
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Total */}
      <div className="text-center">
        <h3 className="text-xs md:text-sm font-medium text-taupe uppercase tracking-wide mb-2">
          ערך סופי
        </h3>
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-mauve font-mono">
          <AnimatedNumber value={totalValue} format={formatCurrency} />
        </div>
      </div>

      {/* Visual Split Bar */}
      <div className="relative h-12 rounded-full overflow-hidden bg-rose/30">
        {/* Your Money portion */}
        <div
          className="absolute right-0 top-0 h-full bg-success transition-all duration-500 ease-out flex items-center justify-start px-4"
          style={{ width: `${contributedPercent}%` }}
        >
          {contributedPercent > 15 && (
            <span className="text-xs font-semibold text-white">הכסף שלכם</span>
          )}
        </div>

        {/* Interest Earned portion */}
        <div
          className="absolute left-0 top-0 h-full bg-peach transition-all duration-500 ease-out flex items-center justify-end px-4"
          style={{ width: `${interestPercent}%` }}
        >
          {interestPercent > 15 && (
            <span className="text-xs font-semibold text-mauve-dark">ריבית</span>
          )}
        </div>
      </div>

      {/* Breakdown Cards */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {/* Your Money */}
        <Card className="p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3 mb-2">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-success" />
            <h4 className="text-xs md:text-sm font-medium text-taupe uppercase tracking-wide">
              הכסף שלכם
            </h4>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-mauve font-mono">
            <AnimatedNumber value={totalContributed} format={formatCurrency} />
          </div>
          <p className="text-xs text-taupe mt-1">
            {contributedPercent.toFixed(0)}% מהסך הכל
          </p>
        </Card>

        {/* Interest Earned */}
        <Card className="p-4 md:p-6">
          <div className="flex items-center gap-2 md:gap-3 mb-2">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-peach" />
            <h4 className="text-xs md:text-sm font-medium text-taupe uppercase tracking-wide">
              ריבית שנצברה
            </h4>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-mauve font-mono">
            <AnimatedNumber value={interestEarned} format={formatCurrency} />
          </div>
          <p className="text-xs text-taupe mt-1">
            {interestPercent.toFixed(0)}% מהסך הכל
          </p>
        </Card>
      </div>

      {/* Share Button */}
      <div className="text-center">
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-peach to-coral text-mauve-dark font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
        >
          <span>📤</span>
          {copySuccess ? 'הועתק ללוח!' : 'שתפו את התוצאות שלכם'}
        </button>
        <p className="text-xs text-taupe mt-2">
          תעוררו השראה בחברים שלכם להתחיל להשקיע
        </p>
      </div>

      {/* Key Insight with Milestone Celebration */}
      {interestEarned > totalContributed && (
        <div className="relative text-center p-4 bg-peach/20 rounded-lg border border-peach">
          <motion.div
            key="celebration"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute -top-3 -left-3 text-3xl"
          >
            🎉
          </motion.div>
          <p className="text-sm font-medium text-mauve">
            הכסף שלכם הרוויח יותר ממה שהפקדתם!{' '}
            <span className="font-bold">
              זה הכוח של ריבית דריבית.
            </span>
          </p>
        </div>
      )}

      {/* Real-World Context */}
      {totalValue >= 100000 && totalValue < 500000 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 bg-gradient-to-br from-success/10 to-peach/10 rounded-xl border border-success/20"
        >
          <p className="text-sm font-semibold text-mauve-dark mb-3 text-center">
            מה אפשר לעשות עם ₪{Math.floor(totalValue / 1000)}K:
          </p>
          <ul className="text-xs text-mauve space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              <span>מקדמה על דירה</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              <span>מימון לימודים אקדמיים</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              <span>הון התחלתי לעסק עצמאי</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              <span>כרית ביטחון פיננסית לשעת חירום</span>
            </li>
          </ul>
        </motion.div>
      )}

      {totalValue >= 500000 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-5 bg-gradient-to-br from-success/20 to-peach/20 rounded-xl border-2 border-success/30"
        >
          <div className="text-center mb-4">
            <p className="text-base font-bold text-mauve-dark mb-1">
              🎯 ₪{Math.floor(totalValue / 1000)}K = חופש כלכלי
            </p>
            <p className="text-xs text-taupe">
              הגעתם לאבן דרך שמשנה חיים!
            </p>
          </div>
          <ul className="text-xs text-mauve space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-success text-base">✓</span>
              <span><span className="font-semibold">פרישה מוקדמת אפשרית:</span> תוכלו לפרוש שנים לפני הצפוי</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success text-base">✓</span>
              <span><span className="font-semibold">עבודה הופכת לבחירה:</span> עצמאות כלכלית משמעה חופש בחירה</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success text-base">✓</span>
              <span><span className="font-semibold">עושר אמיתי:</span> זמן וחופש לרדוף אחרי התשוקות שלכם</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success text-base">✓</span>
              <span><span className="font-semibold">השפעה בין-דורית:</span> בנו עושר לדורות הבאים</span>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
