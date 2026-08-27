import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { PlusIcon } from "lucide-react";

const faqs = [
  {
    q: "How do I book you for an event?",
    a: "Fill out the booking form below with your event details, date, and venue. I'll get back to you within 48 hours to discuss availability and terms.",
  },
  {
    q: "Do you play private events?",
    a: "Yes, I'm available for select private events provided the musical direction aligns with my style. Reach out with your event brief and we can discuss further.",
  },
  {
    q: "What is your technical rider?",
    a: "I can work with most standard club setups. A full technical rider is provided upon confirmed booking. CDJ-3000s and a DJM-900NXS2 are preferred.",
  },
  {
    q: "Do you travel internationally?",
    a: "Yes — international bookings are available. Travel, accommodation, and visa costs are to be covered by the promoter or event organiser.",
  },
  {
    q: "Do you offer remix or production services?",
    a: "Yes. I take on selective remix and original production work. Timelines and fees vary by project — send me your brief and I'll respond with availability.",
  },
];

const DjFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative px-6 py-24 border-t border-dj-line/60 md:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Dev-style header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-dj text-3xl font-black tracking-tight uppercase text-dj-bone md:text-5xl">
            <span className="text-dj-stone">04.</span> Asked, answered
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-dj-line to-transparent" />
        </div>

        <p className="mb-12 max-w-md font-sans text-sm text-dj-ash">
          Common questions answered. For anything else, use the contact form
          below.
        </p>

        <div className="divide-y divide-dj-line">
          {faqs.map((faq, idx) => {
            const open = openIndex === idx;
            return (
              <m.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <button
                  id={`faq-item-${idx}`}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : idx)}
                  className="flex items-center justify-between w-full gap-6 py-6 text-left group"
                >
                  <span
                    className={`font-dj text-base font-bold transition-colors duration-200 md:text-lg ${
                      open ? "text-dj-bone" : "text-dj-ash group-hover:text-dj-bone"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <m.div
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full border border-dj-line transition-colors group-hover:border-dj-bone/60"
                  >
                    <PlusIcon
                      className={`w-4 h-4 transition-colors duration-200 ${
                        open ? "text-dj-bone" : "text-dj-stone group-hover:text-dj-bone"
                      }`}
                    />
                  </m.div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8">
                        <p className="pl-5 border-l-2 border-dj-stone font-sans text-base leading-relaxed text-dj-ash">
                          {faq.a}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DjFAQ;
