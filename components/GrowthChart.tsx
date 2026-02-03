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
    'Total Value': d.totalValue,
    'Your Contributions': d.totalContributed,
    'Interest Earned': d.interestEarned,
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border-2 border-mauve p-4 rounded-lg shadow-lg">
          <p className="font-bold text-mauve mb-2">Year {data.year}</p>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-taupe">Total Value:</span>
              <span className="font-mono font-bold text-mauve">
                {formatCurrency(data['Total Value'])}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-success">Your Money:</span>
              <span className="font-mono font-medium text-success">
                {formatCurrency(data['Your Contributions'])}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-peach">Interest:</span>
              <span className="font-mono font-medium text-mauve">
                {formatCurrency(data['Interest Earned'])}
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
      <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center bg-rose/10 rounded-lg">
        <p className="text-taupe">Loading chart...</p>
      </div>
    );
  }

  const chartHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? 300 : 400;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <ResponsiveContainer width="100%" height={chartHeight}>
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 10,
            left: 0,
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
          />

          <Tooltip content={<CustomTooltip />} />

          <Legend
            wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }}
            iconType="circle"
          />

          {/* Area for contributions (bottom layer) */}
          <Area
            type="monotone"
            dataKey="Your Contributions"
            stroke="#6B9080"
            strokeWidth={2}
            fill="url(#contributionsGradient)"
            animationDuration={800}
            animationEasing="ease-out"
          />

          {/* Area for total value (top layer) */}
          <Area
            type="monotone"
            dataKey="Total Value"
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
          <span className="text-taupe">Total Value</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success" />
          <span className="text-taupe">Your Money</span>
        </div>
      </div>
    </motion.div>
  );
}
