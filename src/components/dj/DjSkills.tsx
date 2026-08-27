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
    <section className="relative px-6 py-24 border-t border-dj-line/60 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Dev-style header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-dj text-3xl font-black tracking-tight uppercase text-dj-bone md:text-5xl">
            <span className="text-dj-stone">03.</span> Sonic signature
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-dj-line to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Genres */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
          >
            <h3 className="pb-4 mb-6 font-mono text-sm tracking-widest border-b uppercase text-dj-bone/80 border-dj-line">
              // genres
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {genres.map((genre, idx) => (
                <m.span
                  key={idx}
                  variants={itemVariants}
                  className="inline-block px-4 py-2 font-dj text-sm font-semibold tracking-wide uppercase rounded-full transition-colors duration-200 border border-dj-line text-dj-ash hover:border-dj-bone hover:text-dj-bone cursor-default"
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
            <h3 className="pb-4 mb-6 font-mono text-sm tracking-widest border-b uppercase text-dj-bone/80 border-dj-line">
              // hardware
            </h3>
            <div className="space-y-4">
              {equipment.map((item, idx) => (
                <m.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-dj-line transition-colors group-hover:bg-dj-bone" />
                    <span className="font-sans text-sm text-dj-ash transition-colors group-hover:text-dj-bone">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-dj-stone">
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
            <h3 className="pb-4 mb-6 font-mono text-sm tracking-widest border-b uppercase text-dj-bone/80 border-dj-line">
              // software
            </h3>
            <div className="space-y-4">
              {software.map((item, idx) => (
                <m.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 bg-dj-line transition-colors group-hover:bg-dj-bone" />
                  <span className="font-sans text-sm text-dj-ash transition-colors group-hover:text-dj-bone">
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
