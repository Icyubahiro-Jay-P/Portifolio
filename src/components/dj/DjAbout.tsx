import * as m from "motion/react-m";

const stats = [
  { label: "Sets Played", value: "150+" },
  { label: "Cities", value: "12" },
  { label: "Hours Mixed", value: "2K+" },
  { label: "Originals", value: "8" },
];

const DjAbout = () => {
  return (
    <section className="relative px-6 py-32">
      {/* Thin horizontal rule at top */}
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-6 mb-20">
          <span className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">
            02 — About
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Text side */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 space-y-8 lg:order-1"
          >
            <h2 className="text-4xl font-black leading-tight tracking-tighter text-white uppercase font-display md:text-6xl">
              The <span className="text-neon-pink">Journey</span>
            </h2>

            <div className="pl-6 space-y-5 border-l border-white/10">
              <p className="font-sans text-lg leading-relaxed text-gray-300">
                What started as late-night coding sessions with mixes playing in
                the background evolved into a full obsession with sound design
                and crowd psychology.
              </p>
              <p className="font-sans text-base leading-relaxed text-gray-400">
                As DJ Pro Jay, I bring the same analytical precision from
                software engineering into my sets — building tension, managing
                energy levels, and executing flawless transitions. Whether it's
                a dark warehouse techno set or a high-energy house mix, the goal
                is always to create an immersive sonic architecture.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px mt-12 bg-white/5">
              {stats.map((stat, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="p-6 bg-dark group"
                >
                  <div className="mb-1 text-3xl font-black text-white transition-colors duration-300 font-display md:text-4xl group-hover:text-neon-pink">
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
            className="relative order-1 lg:order-2"
          >
            {/* Offset border frame */}
            <div className="absolute w-full h-full border pointer-events-none -bottom-4 -right-4 border-neon-pink/30" />

            <div className="relative overflow-hidden aspect-4/5 bg-dark-surface">
              <img
                src="Dj Jay P.png"
                alt="DJ Pro Jay"
                className="object-cover w-full h-full transition-all duration-700 grayscale hover:grayscale-0"
              />
              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-transparent to-transparent" />

              {/* Location badge */}
              <div className="absolute flex items-center gap-2 px-3 py-2 border top-4 left-4 bg-dark/80 border-white/10 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-white/60">
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
export default DjAbout;