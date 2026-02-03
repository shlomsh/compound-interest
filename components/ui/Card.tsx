'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  elevation?: 'low' | 'medium' | 'high';
}

const elevationClasses = {
  low: 'shadow-sm',
  medium: 'shadow-md',
  high: 'shadow-lg shadow-mauve/10',
};

const hoverShadows = {
  low: '0 10px 15px -3px rgba(0, 0, 0, 0.07)',
  medium: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  high: '0 25px 30px -5px rgba(87, 73, 100, 0.15)',
};

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
  elevation = 'medium',
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <motion.div
      className={`bg-white rounded-2xl ${elevationClasses[elevation]} ${paddingClasses[padding]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -4, boxShadow: hoverShadows[elevation] } : undefined}
    >
      {children}
    </motion.div>
  );
}
