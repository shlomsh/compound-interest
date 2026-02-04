'use client';

import { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { motion } from 'framer-motion';
import { YearData } from '@/lib/compound';
import { formatCurrency, formatCompact } from '@/lib/format';

interface GrowthChartProps {
  data: YearData[];
}

export function GrowthChart({ data }: GrowthChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format data for Recharts
  const chartData = data.map((d) => ({
    year: d.year,
    'סך הכל': d.totalValue,
    'ההפקדות שלכם': d.totalContributed,
    'ריבית שנצברה': d.interestEarned,
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border-2 border-mauve p-4 rounded-lg shadow-lg">
          <p className="font-bold text-mauve mb-2">שנה {data.year}</p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-taupe">סך הכל:</span>
              <span className="font-mono font-bold text-mauve">
                {formatCurrency(data['סך הכל'])}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-success">הכסף שלכם:</span>
              <span className="font-mono font-medium text-success">
                {formatCurrency(data['ההפקדות שלכם'])}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-peach">ריבית:</span>
              <span className="font-mono font-medium text-mauve">
                {formatCurrency(data['ריבית שנצברה'])}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  if (!mounted) {
    return (
      <div className="w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-peach border-t-transparent rounded-full mb-4"
        />
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-taupe text-sm"
        >
          מחשב את העתיד שלכם...
        </motion.p>
      </div>
    );
  }

  const chartHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? 300 : 400;

  const firstYear = chartData[0];
  const lastYear = chartData[chartData.length - 1];
  const ariaLabel = `גרף צמיחת השקעה המציג את התיק שלכם צומח מ-${formatCurrency(firstYear['סך הכל'])} ל-${formatCurrency(lastYear['סך הכל'])} על פני ${lastYear.year} שנים. סך ההפקדות שלכם הוא ${formatCurrency(lastYear['ההפקדות שלכם'])}, עם ${formatCurrency(lastYear['ריבית שנצברה'])} שנצברו כריבית.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
      role="img"
      aria-label={ariaLabel}
    >
      <ResponsiveContainer width="100%" height={chartHeight}>
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 0,
            left: 10,
            bottom: 0,
          }}
        >
          <defs>
            {/* Gradient for total value */}
            <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#574964" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#574964" stopOpacity={0} />
            </linearGradient>

            {/* Gradient for contributions */}
            <linearGradient id="contributionsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6B9080" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#6B9080" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#9F8383" opacity={0.2} />

          <XAxis
            dataKey="year"
            stroke="#9F8383"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `${value}`}
          />

          <YAxis
            stroke="#9F8383"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => formatCompact(value)}
            orientation="right"
          />

          <Tooltip content={<CustomTooltip />} />

          <Legend
            wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }}
            iconType="circle"
          />

          {/* Area for contributions (bottom layer) */}
          <Area
            type="monotone"
            dataKey="ההפקדות שלכם"
            stroke="#6B9080"
            strokeWidth={2}
            fill="url(#contributionsGradient)"
            animationDuration={800}
            animationEasing="ease-out"
          />

          {/* Area for total value (top layer) */}
          <Area
            type="monotone"
            dataKey="סך הכל"
            stroke="#574964"
            strokeWidth={3}
            fill="url(#totalGradient)"
            animationDuration={1000}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Mobile-friendly legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-4 md:hidden text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-mauve" />
          <span className="text-taupe">סך הכל</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success" />
          <span className="text-taupe">הכסף שלכם</span>
        </div>
      </div>
    </motion.div>
  );
}
