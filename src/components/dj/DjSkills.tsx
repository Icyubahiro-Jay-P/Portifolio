import * as m from "motion/react-m";
import { genres, equipment } from "@/data/dj";
import { DjSectionHeader } from "./DjSectionHeader";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const DjSkills = () => {
  return (
    <section className="relative px-6 py-24 border-t border-dj-line/60 md:py-32">
      <div className="mx-auto max-w-6xl">
        <DjSectionHeader index="03" title="Sonic signature" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Genres — pills */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
          >
            <h3 className="pb-4 mb-6 font-mono text-sm tracking-widest border-b uppercase text-dj-bone/80 border-dj-line">
              <span className="text-dj-ember">//</span> genres
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {genres.map((genre, idx) => (
                <m.span
                  key={idx}
                  variants={itemVariants}
                  className="inline-block px-4 py-2 font-dj text-sm font-semibold tracking-wide uppercase rounded-full transition-colors duration-200 border border-dj-line text-dj-ash hover:border-dj-ember/60 hover:text-dj-bone cursor-default"
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
              <span className="text-dj-ember">//</span> hardware
            </h3>
            <div className="space-y-4">
              {equipment.map((item, idx) => (
                <m.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-dj-line transition-colors group-hover:bg-dj-ember" />
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

          {/* Sound signature — ember statement */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
            className="flex flex-col items-start justify-between p-7 rounded-2xl border border-dj-ember/25 bg-gradient-to-br from-dj-ember/10 to-transparent"
          >
            <m.div variants={itemVariants} className="w-full">
              <div className="flex items-center gap-2 mb-5">
                <span className="dj-live-dot w-2 h-2 rounded-full bg-dj-ember" />
                <span className="font-mono text-xs tracking-[0.3em] text-dj-ember uppercase">
                  The tip
                </span>
              </div>
              <p className="font-dj text-2xl font-black uppercase leading-tight text-dj-bone">
                Deep bass,
                <br />
                tight mixes,
                <br />
                <span className="dj-heat-text">no dead air.</span>
              </p>
            </m.div>
            <m.div
              variants={itemVariants}
              className="mt-8 font-mono text-[11px] tracking-[0.2em] text-dj-stone uppercase"
            >
              Read the room like a waveform. Drop when it peaks.
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default DjSkills;
