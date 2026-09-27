import * as m from "motion/react-m";

const stats = [
  { label: "Sets played", value: "150+" },
  { label: "Cities", value: "12" },
  { label: "Hours mixed", value: "2K+" },
  { label: "Originals", value: "8" },
];

const DjAbout = () => {
  return (
    <section className="relative px-6 py-24 bg-dj-bone text-dj-soot md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Photo: hard frame on an offset clay block */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative self-start max-w-md mb-5 mr-5 group"
          >
            <div className="absolute inset-0 translate-x-5 translate-y-5 bg-dj-soot transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
            <div className="relative overflow-hidden aspect-4/5 bg-dj-clay">
              <img
                src="jay-p-2.webp"
                alt="DJ Pro Jay"
                loading="lazy"
                className="object-cover object-[50%_20%] w-full h-full grayscale contrast-[1.35] brightness-110 mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 px-5 py-4 bg-dj-soot">
                <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-dj-bone">
                  On the ones &amp; twos Kigali
                </span>
              </div>
            </div>
          </m.div>

          {/* Text */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="mb-4 text-xs font-bold tracking-[0.35em] uppercase text-dj-clay-deep">
              Status: locked on the room
            </span>
            <h2 className="mb-10 font-poster text-[clamp(3.5rem,9vw,7.5rem)] font-black uppercase leading-[0.85]">
              The story
            </h2>

            <p className="mb-6 text-xl leading-relaxed md:text-2xl">
              What started as late-night coding sessions with mixes playing in
              the background evolved into a full obsession with sound design and
              crowd psychology.
            </p>
            <p className="text-lg leading-relaxed text-dj-umber">
              As DJ Pro Jay, I bring the same analytical precision from software
              engineering into my sets building tension, managing energy levels,
              and executing flawless transitions. Whether it's a dark warehouse
              techno set or a high-energy house mix, the goal is always an
              immersive sonic architecture.
            </p>

            {/* gap-px over a tinted background draws the rules between cells */}
            <dl className="grid grid-cols-2 gap-px mt-14 border-t-[3px] border-dj-soot bg-dj-soot/20 lg:grid-cols-4">
              {stats.map((stat, idx) => (
                <m.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * idx, duration: 0.5 }}
                  className="flex flex-col-reverse px-4 pt-5 pb-3 bg-dj-bone"
                >
                  <dt className="mt-1 text-[11px] font-bold tracking-[0.2em] uppercase text-dj-umber">
                    {stat.label}
                  </dt>
                  <dd className="font-poster text-5xl font-black tabular-nums md:text-6xl">
                    {stat.value}
                  </dd>
                </m.div>
              ))}
            </dl>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default DjAbout;
