'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency, formatCompact } from '@/lib/format';
import { useState, useEffect } from 'react';

interface DualChartProps {
  leftData: { year: number; value: number }[];
  rightData: { year: number; value: number }[];
  leftLabel: string;
  rightLabel: string;
  leftColor?: string;
  rightColor?: string;
}

export default function DualChart({
  leftData,
  rightData,
  leftLabel,
  rightLabel,
  leftColor = '#6B9080', // success green
  rightColor = '#E8998D', // coral
}: DualChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="h-[250px] md:h-[300px] bg-rose/20 rounded-xl animate-pulse" />
        <div className="h-[250px] md:h-[300px] bg-rose/20 rounded-xl animate-pulse" />
      </div>
    );
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-mauve/95 px-3 py-2 rounded-lg shadow-lg">
          <p className="text-cream text-sm font-medium">
            Year {payload[0].payload.year}
          </p>
          <p className="text-peach text-xs font-mono">
            {formatCurrency(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {/* Left Chart */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/50 rounded-xl p-4 shadow-md"
      >
        <h4 className="text-center font-bold text-mauve mb-2 text-sm md:text-base">
          {leftLabel}
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={leftData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="leftGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={leftColor} stopOpacity={0.3} />
                <stop offset="95%" stopColor={leftColor} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#9F8383" strokeOpacity={0.1} />
            <XAxis
              dataKey="year"
              stroke="#9F8383"
              tick={{ fill: '#9F8383', fontSize: 11 }}
              tickLine={false}
            />
            <YAxis
              stroke="#9F8383"
              tick={{ fill: '#9F8383', fontSize: 11 }}
              tickLine={false}
              tickFormatter={(value) => formatCompact(value)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={leftColor}
              strokeWidth={2}
              fill="url(#leftGradient)"
              animationDuration={800}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Right Chart */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/50 rounded-xl p-4 shadow-md"
      >
        <h4 className="text-center font-bold text-mauve mb-2 text-sm md:text-base">
          {rightLabel}
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={rightData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="rightGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={rightColor} stopOpacity={0.3} />
                <stop offset="95%" stopColor={rightColor} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#9F8383" strokeOpacity={0.1} />
            <XAxis
              dataKey="year"
              stroke="#9F8383"
              tick={{ fill: '#9F8383', fontSize: 11 }}
              tickLine={false}
            />
            <YAxis
              stroke="#9F8383"
              tick={{ fill: '#9F8383', fontSize: 11 }}
              tickLine={false}
              tickFormatter={(value) => formatCompact(value)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={rightColor}
              strokeWidth={2}
              fill="url(#rightGradient)"
              animationDuration={800}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
