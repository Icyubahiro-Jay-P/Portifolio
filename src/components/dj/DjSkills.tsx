import { motion } from "framer-motion";

const genres = [
  "Techno",
  "Tech House",
  "Deep House",
  "Afro House",
  "Drum & Bass",
  "Industrial",
  "Melodic Techno",
  "Peak Time",
];

const equipment = [
  "CDJ-3000s",
  "DJM-900NXS2",
  "Ableton Live",
  "Push 2",
  "Moog Sub37",
  "Roland TR-8S",
];

const software = [
  "Serato DJ Pro",
  "Rekordbox",
  "Logic Pro",
  "iZotope RX",
];

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

export function DjSkills() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-6">
          <span className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">
            04 — Craft
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-16">
          Sonic <span className="text-neon-pink">Arsenal</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Genres */}
          <motion.div
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
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  className="inline-block px-4 py-2 border border-white/10 font-mono text-xs text-white/50 tracking-widest uppercase hover:border-neon-pink hover:text-white transition-all duration-200 cursor-default"
                >
                  {genre}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Hardware */}
          <motion.div
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
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-1 h-1 bg-neon-pink/40 group-hover:bg-neon-pink transition-colors duration-200" />
                  <span className="font-sans text-sm text-white/50 group-hover:text-white transition-colors duration-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Software */}
          <motion.div
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
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-1 h-1 bg-neon-pink/40 group-hover:bg-neon-pink transition-colors duration-200" />
                  <span className="font-sans text-sm text-white/50 group-hover:text-white transition-colors duration-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}