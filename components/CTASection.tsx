'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function CTASection() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/parent-guide.pdf';
    link.download = 'compound-interest-parent-guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-cream via-rose/10 to-peach/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mauve mb-4">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-peach">
              Start Now
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-taupe max-w-2xl mx-auto">
            The best time to start investing was yesterday. The second best time is today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card elevation="high" className="bg-gradient-to-br from-peach/20 to-success/10">
            <h3 className="text-2xl md:text-3xl font-bold text-mauve-dark mb-6 text-center md:text-left">
              Your Next Steps
            </h3>

            <ol className="space-y-6 mb-8">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-success text-cream font-bold flex items-center justify-center text-lg">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-mauve text-lg mb-1">
                    Talk to Your Parents
                  </h4>
                  <p className="text-taupe">
                    Download our conversation guide to help you discuss investing with your parents or guardians.
                    It includes questions to ask, account options, and how to get started together.
                  </p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-success text-cream font-bold flex items-center justify-center text-lg">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-mauve text-lg mb-1">
                    Open an Account
                  </h4>
                  <p className="text-taupe">
                    Research custodial accounts, Roth IRAs for teens, or high-yield savings accounts.
                    Many platforms make it easy to start with as little as $1.
                  </p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-success text-cream font-bold flex items-center justify-center text-lg">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-mauve text-lg mb-1">
                    Automate Your Investing
                  </h4>
                  <p className="text-taupe">
                    Set up automatic monthly transfers from your allowance, part-time job, or gifts.
                    Even $25/month can grow into serious money over time.
                  </p>
                </div>
              </motion.li>
            </ol>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              className="bg-gradient-to-br from-peach/30 to-success/20 rounded-2xl p-6 border-2 border-peach/40"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-mauve-dark mb-2">
                    📄 Parent Conversation Guide
                  </h4>
                  <p className="text-sm text-taupe">
                    A simple 2-page guide to help you start the conversation about investing with your family.
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleDownload}
                  className="whitespace-nowrap flex-shrink-0"
                >
                  Download Free Guide
                </Button>
              </div>
            </motion.div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-taupe mb-4">
            Remember: Investing involves risk, and past performance doesn&apos;t guarantee future results.
          </p>
          <p className="text-sm text-taupe">
            Always do your own research and consult with a financial advisor before making investment decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
