import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon } from "lucide-react";

const faqs = [
  {
    question: "How do I book you for an event?",
    answer:
      "Fill out the booking form below with your event details, date, and venue. I'll get back to you within 48 hours to discuss availability and terms.",
  },
  {
    question: "Do you play private events?",
    answer:
      "Yes, I'm available for select private events provided the musical direction aligns with my style. Reach out with your event brief and we can discuss further.",
  },
  {
    question: "What is your technical rider?",
    answer:
      "I can work with most standard club setups. A full technical rider is provided upon confirmed booking. CDJ-3000s and a DJM-900NXS2 are preferred.",
  },
  {
    question: "Do you travel internationally?",
    answer:
      "Yes — international bookings are available. Travel, accommodation, and visa costs are to be covered by the promoter or event organiser.",
  },
  {
    question: "Do you offer remix or production services?",
    answer:
      "Yes. I take on selective remix and original production work. Timelines and fees vary by project — contact me with your brief and I'll respond with availability.",
  },
];

export function DjFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 relative bg-dark-surface/20">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-6">
          <span className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">
            05 — Info
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Booking <span className="text-neon-pink">Info</span>
          </h2>
          <p className="font-sans text-gray-500 text-sm max-w-xs md:text-right">
            Common questions answered. For anything else, use the contact form below.
          </p>
        </div>

        <div className="divide-y divide-white/6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <button
                id={`faq-item-${idx}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between py-6 text-left group gap-6"
              >
                <span className="font-sans font-semibold text-base md:text-lg text-white/70 group-hover:text-white transition-colors duration-200">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center border border-white/10 group-hover:border-neon-pink group-hover:text-neon-pink transition-colors duration-200"
                >
                  <PlusIcon className="w-3.5 h-3.5 text-white/40 group-hover:text-neon-pink transition-colors" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-0 pr-12">
                      <p className="font-sans text-gray-400 text-base leading-relaxed border-l-2 border-neon-pink/30 pl-4">
                        {faq.answer}
                      </p>
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