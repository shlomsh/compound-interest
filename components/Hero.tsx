'use client';

import { motion } from 'framer-motion';
import Button from './ui/Button';
import SnowballAnimation from './SnowballAnimation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-rose/20">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-peach/30 rounded-full"
            >
              <span className="text-sm md:text-base font-medium text-mauve-dark">
                The Secret Superpower of Money
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-mauve-dark mb-6"
            >
              Your Money Can{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-peach">
                Grow Itself
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-taupe text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Imagine a tiny snowball rolling down a hill, getting bigger and
              bigger. That&apos;s compound interest—and it could turn your savings
              into something seriously impressive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const calculator = document.getElementById('calculator');
                  calculator?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See It In Action
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const whatIs = document.getElementById('what-is-compound');
                  whatIs?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn How It Works
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-success font-mono">
                  $1M+
                </div>
                <div className="text-sm text-taupe mt-1">
                  Possible by age 65
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-success font-mono">
                  7%
                </div>
                <div className="text-sm text-taupe mt-1">
                  Average annual return
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Snowball animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <SnowballAnimation />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-mauve/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-mauve/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
