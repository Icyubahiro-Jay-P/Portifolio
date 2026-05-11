import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, ChevronDownIcon } from 'lucide-react';
export function DjHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-pink/20 via-dark to-dark -z-10"></div>

      {/* Animated Equalizer Background */}
      <div className="absolute bottom-0 left-0 flex items-end justify-center w-full h-64 gap-2 opacity-20 -z-10">
        {[...Array(20)].map((_, i) =>
        <motion.div
          key={i}
          animate={{
            height: ['20%', '100%', '40%', '80%', '20%']
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5 + Math.random(),
            ease: 'easeInOut',
            delay: Math.random()
          }}
          className="w-8 rounded-t-sm bg-gradient-to-t from-neon-pink to-neon-purple" />

        )}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8,
          type: 'spring'
        }}
        className="z-10 max-w-5xl text-center">
        
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear'
          }}
          className="flex items-center justify-center w-24 h-24 mx-auto mb-8 border-4 border-dashed rounded-full border-neon-pink">
          
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-neon-pink/20">
            <PlayIcon className="w-8 h-8 ml-1 text-neon-pink" />
          </div>
        </motion.div>

        <h1 className="mb-4 text-6xl italic font-black tracking-tighter text-white font-display md:text-8xl lg:text-9xl neon-text-pink">
          DJ PRO JAY
        </h1>

        <h2 className="mb-8 font-sans text-2xl font-bold tracking-widest text-white uppercase md:text-4xl">
          DJ <span className="text-neon-pink">/</span> Producer
        </h2>

        <p className="max-w-2xl mx-auto mb-12 font-sans text-xl leading-relaxed text-gray-300">
          Blending underground techno with heavy basslines. Creating atmospheres
          that move the mind and the body.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button className="w-full px-10 py-5 text-xl font-bold tracking-widest text-white transition-all duration-300 rounded-full sm:w-auto bg-neon-pink font-display hover:bg-white hover:text-neon-pink neon-box-pink">
            BOOK A SET
          </button>
          <button className="flex items-center justify-center w-full gap-3 px-10 py-5 text-xl font-bold tracking-widest transition-all duration-300 border-2 rounded-full sm:w-auto border-neon-pink text-neon-pink font-display hover:bg-neon-pink/20">
            <PlayIcon className="w-6 h-6" /> LISTEN NOW
          </button>
        </div>
      </motion.div>
    </section>);

}