import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "lucide-react";
const faqs = [
  {
    question: "HOW DO YOU MANAGE BOTH DEV AND DJING?",
    answer:
      "Time management and strict boundaries. Coding requires deep, focused analytical thought, while DJing provides a creative, energetic release. They balance each other perfectly.",
  },
  {
    question: "ARE YOU AVAILABLE FOR FREELANCE WORK?",
    answer:
      "Yes, I occasionally take on select freelance projects depending on my current bandwidth. I prefer projects that involve complex technical challenges or innovative UI/UX.",
  },
  {
    question: "WHAT IS YOUR PREFERRED TECH STACK?",
    answer:
      "My go-to stack is React/Next.js for the frontend, Node.js for the backend, and Mongo DB for the database, all deployed via Vercel and Render respectively.",
  },
  {
    question: "DO YOU DO DESIGN AS WELL AS CODE?",
    answer:
      "While I am primarily an engineer, I have a strong eye for design and often bridge the gap between Figma and code. I specialize in implementing complex, animated interfaces.",
  },
];

export function DevFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-24 px-6 relative border-t border-dark-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-wider">
            <span className="text-neon-cyan">04.</span> QUERY_DB
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-neon-cyan/50 to-transparent"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: idx * 0.1,
              }}
              className="border border-dark-border bg-dark-surface overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-mono text-white tracking-wide pr-8">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <MinusIcon className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="p-6 pt-0 font-sans text-gray-400 leading-relaxed border-t border-dark-border/50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
