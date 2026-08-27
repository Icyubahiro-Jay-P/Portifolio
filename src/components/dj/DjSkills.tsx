import * as m from "motion/react-m";

const genres = [
  "Afrobeat",
  "Amapiano",
  "Dancehall",
  "Afro House",
  "Kompa",
  "3-Step",
  "RnB",
  "Hip Hop",
];

const equipment = [
  { name: "CDJ-3000s", tag: "Players" },
  { name: "Pioneer DJ SB 3", tag: "Controller" },
  { name: "Hercules Inpulse 300", tag: "Controller" },
  { name: "Pioneer DJ Rev 1", tag: "Scratch" },
];

const software = ["Serato DJ Pro", "Rekordbox", "Virtual DJ", "FL Studio"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const DjSkills = () => {
  return (
    <section className="relative px-6 py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* label */}
        <div className="flex items-center gap-4 mb-5">
          <span className="font-mono text-[11px] tracking-[0.4em] text-dj-heat-soft uppercase">
            The arsenal
          </span>
          <div className="flex-1 h-px dj-hairline" />
        </div>

        <h2 className="mb-16 font-dj text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tighter uppercase text-dj-paper">
          Sonic <span className="dj-heat-text">signature</span>
        </h2>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-10">
          {/* Genres */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
          >
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-dj-heat-soft mb-6 pb-3 border-b border-dj-line">
              Genres
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {genres.map((genre, idx) => (
                <m.span
                  key={idx}
                  variants={itemVariants}
                  className="inline-block px-4 py-2 font-dj text-sm font-semibold tracking-wide uppercase rounded-full transition-all duration-200 border border-dj-line text-dj-muted hover:border-dj-heat/50 hover:text-dj-heat-soft cursor-default"
                >
                  {genre}
                </m.span>
              ))}
            </div>
          </m.div>

          {/* Hardware */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
          >
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-dj-heat-soft mb-6 pb-3 border-b border-dj-line">
              Hardware
            </h3>
            <div className="space-y-4">
              {equipment.map((item, idx) => (
                <m.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-dj-electric/50 transition-colors group-hover:bg-dj-heat" />
                    <span className="font-sans text-sm text-dj-muted transition-colors group-hover:text-dj-paper">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-dj-muted/40">
                    {item.tag}
                  </span>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Software */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
          >
            <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-dj-heat-soft mb-6 pb-3 border-b border-dj-line">
              Software
            </h3>
            <div className="space-y-4">
              {software.map((item, idx) => (
                <m.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-dj-electric/50 transition-colors group-hover:bg-dj-heat" />
                  <span className="font-sans text-sm text-dj-muted transition-colors group-hover:text-dj-paper">
                    {item}
                  </span>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default DjSkills;
