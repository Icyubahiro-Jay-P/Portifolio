import * as m from "motion/react-m";

const stats = [
  { label: "Sets Played", value: "150+" },
  { label: "Cities", value: "12" },
  { label: "Hours Mixed", value: "2K+" },
  { label: "Originals", value: "8" },
];

export function DjAbout() {
  return (
    <section className="py-32 px-6 relative">
      {/* Thin horizontal rule at top */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-20">
          <span className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">
            02 — About
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 space-y-8"
          >
            <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
              The <span className="text-neon-pink">Journey</span>
            </h2>

            <div className="space-y-5 border-l border-white/10 pl-6">
              <p className="font-sans text-gray-300 text-lg leading-relaxed">
                What started as late-night coding sessions with mixes playing in
                the background evolved into a full obsession with sound design
                and crowd psychology.
              </p>
              <p className="font-sans text-gray-400 text-base leading-relaxed">
                As DJ Pro Jay, I bring the same analytical precision from
                software engineering into my sets — building tension, managing
                energy levels, and executing flawless transitions. Whether it's
                a dark warehouse techno set or a high-energy house mix, the goal
                is always to create an immersive sonic architecture.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-white/5 mt-12">
              {stats.map((stat, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="bg-dark p-6 group"
                >
                  <div className="font-display text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-neon-pink transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-gray-500 tracking-[0.2em] uppercase">
                    {stat.label}
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Image side */}
          <m.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Offset border frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-neon-pink/30 pointer-events-none" />

            <div className="relative aspect-[4/5] overflow-hidden bg-dark-surface">
              <img
                src="Dj Jay P.png"
                alt="DJ Pro Jay"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

              {/* Location badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-dark/80 border border-white/10 px-3 py-2 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse" />
                <span className="font-mono text-xs text-white/60 tracking-widest">
                  KIGALI, RW
                </span>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
