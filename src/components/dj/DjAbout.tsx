import * as m from "motion/react-m";

const stats = [
  { label: "Sets played", value: "150+" },
  { label: "Cities", value: "12" },
  { label: "Hours mixed", value: "2K+" },
  { label: "Originals", value: "8" },
];

const DjAbout = () => {
  return (
    <section className="relative px-6 py-24 border-t border-dj-line/60 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Dev-style section header: number + title + fading hairline */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-dj text-3xl font-black tracking-tight uppercase text-dj-bone md:text-5xl">
            <span className="text-dj-stone">01.</span> The story
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-dj-line to-transparent" />
        </div>

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Image — left, layered frame like Dev */}
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-dj-smoke -z-10 pointer-events-none transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative overflow-hidden aspect-[4/5] bg-dj-smoke">
              <img
                src="Dj Jay P.png"
                alt="DJ Pro Jay at the decks"
                loading="lazy"
                className="object-cover w-full h-full transition-all duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dj-void via-transparent to-transparent" />
              {/* mono caption strip */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-r from-dj-void/90 to-dj-void/40">
                <span className="font-mono text-xs tracking-[0.3em] text-dj-ash/80 uppercase">
                  On the ones &amp; twos — Kigali
                </span>
              </div>
            </div>
          </m.div>

          {/* Text — right */}
          <m.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="font-mono text-sm tracking-widest text-dj-bone/80">
              {">"} STATUS: LOCKED ON THE ROOM
            </div>

            <p className="font-sans text-lg leading-relaxed text-dj-bone/85">
              What started as late-night coding sessions with mixes playing in
              the background evolved into a full obsession with sound design
              and crowd psychology.
            </p>

            <p className="font-sans text-lg leading-relaxed text-dj-ash">
              As DJ Pro Jay, I bring the same analytical precision from
              software engineering into my sets — building tension, managing
              energy levels, and executing flawless transitions. Whether it's a
              dark warehouse techno set or a high-energy house mix, the goal is
              always an immersive sonic architecture.
            </p>

            {/* Stats — dev-style mono counters */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-dj-line lg:grid-cols-4">
              {stats.map((stat, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * idx, duration: 0.5 }}
                >
                  <div className="mb-2 font-dj text-3xl font-black text-dj-bone tabular-nums md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-dj-stone">
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
