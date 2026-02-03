'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function SnowballAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    // Animate the snowball growing and rolling
    const sequence = async () => {
      await controls.start({
        scale: [0.3, 0.5, 0.7, 1],
        rotate: [0, 360, 720, 1080],
        y: [0, -20, -10, 0],
        transition: {
          duration: 3,
          ease: 'easeOut',
          times: [0, 0.3, 0.6, 1],
        },
      });

      // Continuous gentle floating after initial animation
      controls.start({
        y: [0, -15, 0],
        rotate: 1080,
        transition: {
          y: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        },
      });
    };

    sequence();
  }, [controls]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main snowball */}
      <motion.div
        animate={controls}
        className="relative"
        style={{ transformOrigin: 'center' }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-success/30 to-peach/30 rounded-full blur-2xl scale-150" />

        {/* Main snowball body */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Base layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-rose rounded-full shadow-2xl" />

          {/* Inner layers - creating depth */}
          <div className="absolute inset-4 bg-gradient-to-br from-rose/40 to-peach/60 rounded-full" />
          <div className="absolute inset-8 bg-gradient-to-br from-peach/50 to-success/30 rounded-full" />

          {/* Sparkle effects */}
          <motion.div
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full blur-sm"
          />
          <motion.div
            animate={{
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full blur-sm"
          />
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full blur-sm"
          />

          {/* Dollar sign in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-6xl md:text-7xl font-bold text-success drop-shadow-lg"
            >
              $
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating money particles */}
      <FloatingParticle delay={0} xOffset={-100} yOffset={-50} />
      <FloatingParticle delay={0.5} xOffset={100} yOffset={-80} />
      <FloatingParticle delay={1} xOffset={-80} yOffset={60} />
      <FloatingParticle delay={1.5} xOffset={120} yOffset={40} />

      {/* Growth rings */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-80 h-80 md:w-96 md:h-96 border-4 border-success/30 rounded-full" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeOut',
          delay: 0.5,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-80 h-80 md:w-96 md:h-96 border-4 border-peach/30 rounded-full" />
      </motion.div>
    </div>
  );
}

// Floating particle component
function FloatingParticle({
  delay,
  xOffset,
  yOffset,
}: {
  delay: number;
  xOffset: number;
  yOffset: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        x: [0, xOffset],
        y: [0, yOffset],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeOut',
        delay,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="text-2xl font-bold text-success/60">$</div>
    </motion.div>
  );
}
