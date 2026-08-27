import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { PlusIcon } from "lucide-react";
import { djFaqs } from "@/data/dj";
import { DjSectionHeader } from "./DjSectionHeader";

const DjFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative px-6 py-24 border-t border-dj-line/60 md:py-32">
      <div className="max-w-4xl mx-auto">
        <DjSectionHeader index="06" title="Asked, answered" />

        <p className="mb-12 max-w-md font-sans text-sm text-dj-ash">
          Common questions answered. For anything else, use the contact form
          below.
        </p>

        <div className="divide-y divide-dj-line">
          {djFaqs.map((faq, idx) => {
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
                    className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full border border-dj-line transition-colors group-hover:border-dj-ember/60"
                  >
                    <PlusIcon
                      className={`w-4 h-4 transition-colors duration-200 ${
                        open ? "text-dj-ember" : "text-dj-stone group-hover:text-dj-bone"
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
                        <p className="pl-5 border-l-2 border-dj-ember/60 font-sans text-base leading-relaxed text-dj-ash">
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
