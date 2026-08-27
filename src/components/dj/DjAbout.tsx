import * as m from "motion/react-m";
import { djStats } from "@/data/dj";
import { DjSectionHeader, DjReveal } from "./DjSectionHeader";

const DjAbout = () => {
  return (
    <section className="relative px-6 py-24 border-t border-dj-line/60 md:py-32 overflow-hidden">
      {/* faint ember backwash on this section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 10% 30%, rgba(255,122,26,0.06), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <DjSectionHeader index="02" title="The story" />

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Image — layered frame, ember glow on hover */}
          <DjReveal x={-40} className="relative group">
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-dj-ember/10 -z-10 pointer-events-none transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative overflow-hidden aspect-[4/5] bg-dj-smoke">
              <img
                src="Dj Jay P.png"
                alt="DJ Pro Jay at the decks"
                loading="lazy"
                className="object-cover w-full h-full transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dj-void via-transparent to-transparent" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 118%, rgba(255,122,26,0.22), transparent 60%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-r from-dj-void/90 to-dj-void/40">
                <span className="font-mono text-xs tracking-[0.3em] text-dj-ash/90 uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-dj-ember" />
                  On the ones &amp; twos — Kigali
                </span>
              </div>
            </div>
          </DjReveal>

          {/* Text */}
          <DjReveal x={40} className="space-y-8">
            <div className="font-mono text-sm tracking-widest text-dj-ember">
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
              dark AFRO-house set or a high-energy amapiano night, the goal is
              always an immersive sonic architecture.
            </p>

            {/* Stats — ember-accented counters */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-dj-line lg:grid-cols-4">
              {djStats.map((stat, idx) => (
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
          </DjReveal>
        </div>
      </div>
    </section>
  );
};

export default DjAbout;
