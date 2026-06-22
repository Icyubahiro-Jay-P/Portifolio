import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
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

const DjFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-32 bg-dark-surface/20">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-6">
          <span className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">
            05 — Info
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <div className="flex flex-col gap-6 mb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase font-display md:text-6xl">
            Booking <span className="text-neon-pink">Info</span>
          </h2>
          <p className="max-w-xs font-sans text-sm text-gray-500 md:text-right">
            Common questions answered. For anything else, use the contact form
            below.
          </p>
        </div>

        <div className="divide-y divide-white/6">
          {faqs.map((faq, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <button
                id={`faq-item-${idx}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex items-center justify-between w-full gap-6 py-6 text-left group"
              >
                <span className="font-sans text-base font-semibold transition-colors duration-200 md:text-lg text-white/70 group-hover:text-white">
                  {faq.question}
                </span>
                <m.div
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center w-6 h-6 transition-colors duration-200 border shrink-0 border-white/10 group-hover:border-neon-pink group-hover:text-neon-pink"
                >
                  <PlusIcon className="w-3.5 h-3.5 text-white/40 group-hover:text-neon-pink transition-colors" />
                </m.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <m.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-0 pr-12">
                      <p className="pl-4 font-sans text-base leading-relaxed text-gray-400 border-l-2 border-neon-pink/30">
                        {faq.answer}
                      </p>
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
export default DjFAQ;