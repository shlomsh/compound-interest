'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  format?: (value: number) => string;
  className?: string;
  duration?: number;
}

export default function AnimatedNumber({
  value,
  format = (val) => val.toFixed(0),
  className = '',
  duration = 0.5,
}: AnimatedNumberProps) {
  const spring = useSpring(value, {
    damping: 30,
    stiffness: 200,
  });

  const display = useTransform(spring, (current) =>
    format(Math.round(current * 100) / 100)
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {display}
    </motion.span>
  );
}
