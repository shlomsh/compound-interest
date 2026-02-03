'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const resources = [
    {
      name: 'Khan Academy',
      description: 'Free investing courses',
      url: 'https://www.khanacademy.org/economics-finance-domain',
    },
    {
      name: 'Investopedia',
      description: 'Financial term dictionary',
      url: 'https://www.investopedia.com',
    },
    {
      name: 'SEC for Investors',
      description: 'Official investor education',
      url: 'https://www.investor.gov',
    },
  ];

  return (
    <footer className="bg-mauve-dark text-cream py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-peach">
              Compound Interest Calculator
            </h3>
            <p className="text-sm text-rose leading-relaxed">
              An educational tool to help teenagers understand the power of compound interest
              and start their investing journey early.
            </p>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-peach">Learn More</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-rose hover:text-peach transition-colors group"
                  >
                    <span className="font-medium">{resource.name}</span>
                    <span className="block text-xs opacity-80 group-hover:opacity-100">
                      {resource.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Disclaimer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-peach">Important</h3>
            <p className="text-sm text-rose leading-relaxed">
              This calculator is for educational purposes only. Past performance does not guarantee
              future results. Always consult with a qualified financial advisor before making
              investment decisions.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-mauve/30 text-center"
        >
          <p className="text-sm text-taupe">
            © {currentYear} Compound Interest Calculator. Built for financial literacy education.
          </p>
          <p className="text-xs text-taupe/70 mt-2">
            Calculations assume annual compounding at 7% (historical S&P 500 average).
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
