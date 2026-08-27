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
    <section className="relative px-6 py-28 md:py-36 bg-dj-base-2/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-5">
          <span className="font-mono text-[11px] tracking-[0.4em] text-dj-heat-soft uppercase">
            Booking info
          </span>
          <div className="flex-1 h-px dj-hairline" />
        </div>

        <h2 className="mb-8 font-dj text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tighter uppercase text-dj-paper">
          Asked, <span className="dj-heat-text">answered</span>
        </h2>

        <p className="mb-14 max-w-md font-sans text-sm text-dj-muted">
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
                      open ? "text-dj-heat-soft" : "text-dj-paper/80 group-hover:text-dj-paper"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <m.div
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full border border-dj-line transition-colors group-hover:border-dj-heat/50"
                  >
                    <PlusIcon
                      className={`w-4 h-4 transition-colors ${
                        open ? "text-dj-heat" : "text-dj-muted group-hover:text-dj-heat-soft"
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
                        <p className="pl-5 border-l-2 border-dj-heat/40 font-sans text-base leading-relaxed text-dj-muted">
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
