'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const resources = [
    {
      name: 'Khan Academy',
      description: 'קורסי השקעות בחינם',
      url: 'https://www.khanacademy.org/economics-finance-domain',
    },
    {
      name: 'Investopedia',
      description: 'מילון מונחים פיננסיים',
      url: 'https://www.investopedia.com',
    },
    {
      name: 'רשות ניירות ערך',
      description: 'חינוך למשקיעים',
      url: 'https://www.isa.gov.il',
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
              מחשבון ריבית דריבית
            </h3>
            <p className="text-sm text-rose leading-relaxed">
              כלי חינוכי שעוזר לבני נוער להבין את הכוח של ריבית דריבית
              ולהתחיל את מסע ההשקעות שלהם מוקדם.
            </p>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-peach">למדו עוד</h3>
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
            <h3 className="text-xl font-bold mb-4 text-peach">חשוב לדעת</h3>
            <p className="text-sm text-rose leading-relaxed">
              מחשבון זה מיועד למטרות חינוכיות בלבד. ביצועי עבר אינם מבטיחים
              תוצאות עתידיות. תמיד התייעצו עם יועץ פיננסי מוסמך לפני
              קבלת החלטות השקעה.
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
            © {currentYear} מחשבון ריבית דריבית. נבנה לחינוך פיננסי.
          </p>
          <p className="text-xs text-taupe/70 mt-2">
            החישובים מניחים ריבית דריבית שנתית של 7% (ממוצע היסטורי של S&P 500).
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
