import * as m from "motion/react-m";

const stats = [
  { label: "Sets played", value: "150+" },
  { label: "Cities", value: "12" },
  { label: "Hours mixed", value: "2K+" },
  { label: "Originals", value: "8" },
];

const DjAbout = () => {
  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-14">
          {/* Image — left, tall editorial frame */}
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            {/* layering frame */}
            <div className="absolute -top-4 -left-4 right-10 bottom-10 border border-dj-heat/25 pointer-events-none" />
            <div className="relative overflow-hidden aspect-[4/5] bg-dj-smoke">
              <img
                src="Dj Jay P.png"
                alt="DJ Pro Jay at the decks"
                className="object-cover w-full h-full transition-all duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dj-base via-transparent to-transparent" />
              {/* caption strip */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-6 py-5 bg-gradient-to-r from-dj-base/90 to-dj-base/40 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-dj-heat animate-pulse" />
                <span className="font-mono text-xs tracking-[0.3em] text-dj-paper/80 uppercase">
                  On the ones &amp; twos — Kigali
                </span>
              </div>
            </div>
          </m.div>

          {/* Text — right */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8 }}
            className="order-first space-y-8 lg:order-none lg:col-span-7"
          >
            {/* label */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.4em] text-dj-heat-soft uppercase">
                The story
              </span>
              <div className="flex-1 h-px dj-hairline" />
            </div>

            <h2 className="font-dj text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tighter uppercase text-dj-paper">
              Precision, from the <span className="dj-heat-text">booth to the board</span>
            </h2>

            <div className="space-y-5 border-l border-dj-line pl-6">
              <p className="font-sans text-lg leading-relaxed text-dj-paper/90">
                What started as late-night coding sessions with mixes playing in
                the background evolved into a full obsession with sound design
                and crowd psychology.
              </p>
              <p className="font-sans text-base leading-relaxed text-dj-muted">
                As DJ Pro Jay, I bring the same analytical precision from
                software engineering into my sets — building tension, managing
                energy levels, and executing flawless transitions. Whether it's
                a dark warehouse techno set or a high-energy house mix, the goal
                is always an immersive sonic architecture.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px mt-12 bg-dj-line sm:grid-cols-4">
              {stats.map((stat, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * idx, duration: 0.5 }}
                  className="p-6 bg-dj-base"
                >
                  <div className="appearance-none mb-1 font-dj text-3xl font-black text-dj-paper md:text-4xl tabular-nums">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] text-dj-muted tracking-[0.2em] uppercase">
                    {stat.label}
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default DjAbout;
