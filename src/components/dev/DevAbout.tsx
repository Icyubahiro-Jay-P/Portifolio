import React from "react";
import { motion } from "framer-motion";
import { CodeIcon, DatabaseIcon, CpuIcon } from "lucide-react";
export function DevAbout() {
  return (
    <section className="relative px-6 py-24 border-t border-dark-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-wider text-white font-display md:text-5xl">
            <span className="text-neon-cyan">01.</span> INIT_PROFILE
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-neon-cyan/50 to-transparent"></div>
        </div>

        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative group"
          >
            <div className="absolute inset-0 transition-transform translate-x-4 translate-y-4 bg-neon-cyan -z-10 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img
              // src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80"
              src="Dev Jay P.png"
              alt="Irakoze Icyubahiro Jean Pierre - Developer"
              className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-dark-border"
            />

            {/* <div className="absolute inset-0 transition-opacity duration-500 bg-neon-cyan/20 mix-blend-overlay group-hover:opacity-0"></div> */}
            <div className="absolute inset-0 transition-opacity duration-500 bg-neon-cyan/20 mix-blend-overlay"></div>
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
            className="space-y-8"
          >
            <div className="font-mono text-sm tracking-widest text-neon-cyan">
              &gt; STATUS: OPTIMIZING REALITY
            </div>

            <p className="font-sans text-lg leading-relaxed text-gray-300">
              I'm a full-stack engineer obsessed with performance, architecture,
              and pixel-perfect UIs. With over 3 years of experience building
              scalable applications, I thrive in the space where complex backend
              systems meet intuitive user experiences.
            </p>

            <p className="font-sans text-lg leading-relaxed text-gray-400">
              When I'm not writing TypeScript or optimizing database queries,
              I'm probably producing tracks or spinning sets at local
              underground clubs. The rhythm of code and music aren't so
              different.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-dark-border">
              <div>
                <div className="mb-2 text-3xl text-white font-display">3+</div>
                <div className="font-mono text-xs tracking-widest text-gray-500">
                  YEARS EXP
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl text-white font-display">30+</div>
                <div className="font-mono text-xs tracking-widest text-gray-500">
                  PROJECTS
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl text-white font-display">∞</div>
                <div className="font-mono text-xs tracking-widest text-gray-500">
                  COFFEE
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
