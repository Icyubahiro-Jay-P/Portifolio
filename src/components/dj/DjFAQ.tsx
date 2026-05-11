import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
const faqs = [
{
  question: 'HOW DO I BOOK YOU FOR AN EVENT?',
  answer:
  'Fill out the booking form below with your event details, date, and venue. My management team will get back to you within 48 hours to discuss availability and terms.'
},
{
  question: 'DO YOU PLAY PRIVATE EVENTS?',
  answer:
  'Yes, I am available for select private events, provided the musical direction aligns with my style. I do not take open-format or top-40 requests.'
},
{
  question: 'WHAT IS YOUR TECHNICAL RIDER?',
  answer:
  'Standard setup requires 3x Pioneer CDJ-3000s and 1x DJM-900NXS2 or V10 mixer. High-quality monitors are essential. Full rider will be provided upon booking confirmation.'
},
{
  question: 'DO YOU TRAVEL INTERNATIONALLY?',
  answer:
  'Yes, I am available for international bookings. Travel and accommodation must be covered by the promoter.'
}];

export function DjFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-32 px-6 relative bg-dark-surface/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter uppercase text-center mb-16">
          INFO <span className="text-neon-pink">&</span> BOOKING
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: idx * 0.1
            }}
            className="border-b-2 border-dark-border">
            
              <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between py-6 text-left group">
              
                <span className="font-sans font-bold text-xl text-white tracking-widest uppercase group-hover:text-neon-pink transition-colors">
                  {faq.question}
                </span>
                <motion.div
                animate={{
                  rotate: openIndex === idx ? 180 : 0
                }}
                transition={{
                  duration: 0.3
                }}>
                
                  <ChevronDownIcon className="w-6 h-6 text-gray-500 group-hover:text-neon-pink transition-colors" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}
                className="overflow-hidden">
                
                    <div className="pb-8 font-sans text-gray-400 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}