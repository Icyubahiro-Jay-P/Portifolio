import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
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
const DevFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="relative px-6 py-24 border-t border-dark-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-wider text-white font-display md:text-5xl">
            <span className="text-neon-cyan">04.</span> QUERY_DB
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-neon-cyan/50 to-transparent"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <m.div
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
              className="overflow-hidden border border-dark-border bg-dark-surface"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex items-center justify-between w-full p-6 text-left transition-colors hover:bg-white/5"
              >
                <span className="pr-8 font-mono tracking-wide text-white">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <MinusIcon className="w-5 h-5 shrink-0 text-neon-cyan" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-gray-500 shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <m.div
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
                    <div className="p-6 pt-0 mt-2 font-sans leading-relaxed text-gray-400 border-t border-dark-border/50">
                      {faq.answer}
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default DevFAQ;