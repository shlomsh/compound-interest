'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-taupe/30 to-transparent"
        />
      </div>
    </div>
  );
}
