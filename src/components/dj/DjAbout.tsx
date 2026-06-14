import React from "react";
import { motion } from "framer-motion";
export function DjAbout() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="order-2 lg:order-1 space-y-8"
          >
            <h2 className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
              The <span className="text-neon-pink">Journey</span>
            </h2>

            <p className="font-sans text-gray-300 text-xl leading-relaxed">
              What started as late night coding sessions with mixes playing in
              the background evolved into a full-blown obsession with sound
              design and crowd psychology.
            </p>

            <p className="font-sans text-gray-400 text-lg leading-relaxed">
              As DJ Pro Jay, I bring the same analytical precision from software
              engineering into my sets building tension, managing energy levels,
              and executing flawless transitions. Whether it's a dark warehouse
              techno set or a high-energy house mix, the goal is always to
              create an immersive sonic architecture.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {[
                {
                  label: "SETS PLAYED",
                  value: "150+",
                },
                {
                  label: "CITIES",
                  value: "12",
                },
                {
                  label: "HOURS MIXED",
                  value: "2K+",
                },
                {
                  label: "ORIGINALS",
                  value: "8",
                },
              ].map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="font-display text-4xl text-white font-bold mb-2 neon-text-pink">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs text-gray-500 tracking-[0.2em] font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-4 bg-linear-to-tr from-neon-pink to-neon-purple opacity-30 blur-2xl rounded-full"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-neon-pink/50">
              <img
                src="Dj Jay P.png"
                alt="DJ Pro Jay DJing"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />

              <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
