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
    a: "Yes  international bookings are available. Travel, accommodation, and visa costs are to be covered by the promoter or event organiser.",
  },
  {
    q: "Do you offer remix or production services?",
    a: "Yes. I take on selective remix and original production work. Timelines and fees vary by project  send me your brief and I'll respond with availability.",
  },
];

const DjFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative px-6 py-24 bg-dj-bone text-dj-soot md:px-12 md:py-36">
      <div className="grid grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="block mb-4 text-xs font-bold tracking-[0.35em] uppercase text-dj-clay-deep">
            FAQ
          </span>
          <h2 className="mb-8 font-poster text-[clamp(3.5rem,9vw,7.5rem)] font-black uppercase leading-[0.95]">
            Asked, answered
          </h2>
          <p className="max-w-xs text-base leading-relaxed text-dj-umber">
            Common questions answered. For anything else, use the contact form
            below.
          </p>
        </div>

        <div className="border-t-[3px] border-dj-soot">
          {faqs.map((faq, idx) => {
            const open = openIndex === idx;
            return (
              <div key={faq.q} className="border-b border-dj-soot/20">
                <button
                  id={`faq-item-${idx}`}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => setOpenIndex(open ? null : idx)}
                  className="flex items-center justify-between w-full gap-6 py-7 text-left group"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="text-xs font-bold tabular-nums text-dj-clay-deep">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-extrabold leading-snug md:text-2xl">
                      {faq.q}
                    </span>
                  </span>
                  <span
                    className={`flex items-center justify-center w-10 h-10 shrink-0 border-2 transition-colors duration-200 ${
                      open
                        ? "bg-dj-clay border-dj-clay"
                        : "border-dj-soot group-hover:bg-dj-soot group-hover:text-dj-bone"
                    }`}
                  >
                    <PlusIcon
                      className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <m.div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-item-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.32,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pl-10 text-lg leading-relaxed md:pr-16 text-dj-umber">
                        {faq.a}
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DjFAQ;
