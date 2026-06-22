import * as m from "motion/react-m";

const genres = [
  "AFROBEAT",
  "AMAPIANO",
  "DANCEHALL",
  "AFRO HOUSE",
  "KOMPA",
  "3-STEP",
  "RNB",
  "HIP HOP",
];

const equipment = [
  "CDJ-3000s",
  "Pioneer DJ SB 3",
  "Hercules Inpulse 300",
  "Pioneer DJ Rev 1",
];

const software = ["Serato DJ Pro", "Rekordbox", "Virtual DJ", "FL Studio"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const DjSkills = () => {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-6">
          <span className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">
            04 — Craft
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <h2 className="mb-16 text-4xl font-black tracking-tighter text-white uppercase font-display md:text-6xl">
          Sonic <span className="text-neon-pink">Arsenal</span>
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {/* Genres */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xs text-neon-pink tracking-[0.3em] uppercase mb-6 pb-3 border-b border-white/8">
              Genres
            </h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre, idx) => (
                <m.span
                  key={idx}
                  variants={itemVariants}
                  className="inline-block px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-200 border cursor-default border-white/10 text-white/50 hover:border-neon-pink hover:text-white"
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
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xs text-neon-pink tracking-[0.3em] uppercase mb-6 pb-3 border-b border-white/8">
              Hardware
            </h3>
            <div className="space-y-3">
              {equipment.map((item, idx) => (
                <m.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-1 h-1 transition-colors duration-200 bg-neon-pink/40 group-hover:bg-neon-pink" />
                  <span className="font-sans text-sm transition-colors duration-200 text-white/50 group-hover:text-white">
                    {item}
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
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xs text-neon-pink tracking-[0.3em] uppercase mb-6 pb-3 border-b border-white/8">
              Software
            </h3>
            <div className="space-y-3">
              {software.map((item, idx) => (
                <m.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-1 h-1 transition-colors duration-200 bg-neon-pink/40 group-hover:bg-neon-pink" />
                  <span className="font-sans text-sm transition-colors duration-200 text-white/50 group-hover:text-white">
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
}
export default DjSkills