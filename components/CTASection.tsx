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
            מוכנים{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-peach">
              להתחיל עכשיו
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-taupe max-w-2xl mx-auto">
            הזמן הכי טוב להתחיל להשקיע היה אתמול. הזמן השני הכי טוב הוא היום.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card elevation="high" className="bg-gradient-to-br from-peach/20 to-success/10">
            <h3 className="text-2xl md:text-3xl font-bold text-mauve-dark mb-6 text-center md:text-right">
              הצעדים הבאים שלכם
            </h3>

            <ol className="space-y-6 mb-8">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
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
                    דברו עם ההורים
                  </h4>
                  <p className="text-taupe">
                    הורידו את המדריך לשיחה כדי לעזור לכם לדבר על השקעות עם ההורים או האפוטרופוסים שלכם.
                    המדריך כולל שאלות לשאול, אפשרויות חשבונות, ואיך להתחיל ביחד.
                  </p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 20 }}
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
                    פתחו חשבון
                  </h4>
                  <p className="text-taupe">
                    חקרו אפשרויות כמו קופת גמל, קרן השתלמות, או חשבון חיסכון בתשואה גבוהה.
                    פלטפורמות רבות מאפשרות להתחיל גם עם ₪1 בלבד.
                  </p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 20 }}
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
                    הפכו את ההשקעה לאוטומטית
                  </h4>
                  <p className="text-taupe">
                    הגדירו העברות חודשיות אוטומטיות מדמי הכיס, עבודה חלקית, או מתנות.
                    גם ₪100 בחודש יכולים לצמוח לסכום רציני לאורך זמן.
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
                <div className="text-center md:text-right">
                  <h4 className="text-xl font-bold text-mauve-dark mb-2">
                    📄 מדריך לשיחה עם ההורים
                  </h4>
                  <p className="text-sm text-taupe">
                    מדריך פשוט בן 2 עמודים שיעזור לכם להתחיל את השיחה על השקעות עם המשפחה.
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleDownload}
                  className="whitespace-nowrap flex-shrink-0"
                >
                  הורידו את המדריך בחינם
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
            זכרו: השקעה כרוכה בסיכון, וביצועי עבר אינם מבטיחים תוצאות עתידיות.
          </p>
          <p className="text-sm text-taupe">
            תמיד עשו מחקר עצמאי והתייעצו עם יועץ פיננסי מוסמך לפני קבלת החלטות השקעה.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
