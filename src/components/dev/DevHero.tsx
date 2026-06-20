import { motion } from 'framer-motion';
import { TerminalIcon, GithubIcon } from 'lucide-react';
export function DevHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-cyan/10 via-dark to-dark -z-10"></div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.8
        }}
        className="max-w-4xl text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full border-neon-cyan/30 bg-neon-cyan/5">
          <TerminalIcon className="w-4 h-4 text-neon-cyan" />
          <span className="font-mono text-sm tracking-wider text-neon-cyan select-none">
            SYSTEM.ONLINE
          </span>
        </div>

        <h1 className="select-none mb-6 text-5xl font-black tracking-tighter text-white font-display md:text-7xl lg:text-8xl crt-flicker neon-text-cyan">
          IRAKOZE ICYUBAHIRO JEAN PIERRE
        </h1>

        <h2 className="mb-8 font-mono text-xl tracking-widest text-gray-300 md:text-3xl">
          FULL-STACK DEVELOPER
        </h2>

        <p className="max-w-2xl mx-auto mb-12 font-sans text-lg leading-relaxed text-gray-400">
          Architecting scalable systems and crafting immersive digital
          experiences. Bridging the gap between complex backend logic and sleek
          frontend interfaces.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button 
            className="w-full px-8 py-4 font-mono font-bold tracking-widest transition-all duration-300 border sm:w-auto bg-neon-cyan/10 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark neon-box-cyan outline-none" 
            onClick={() => document.getElementById('deployments')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VIEW PROJECTS
          </button>
          <a 
            href="https://github.com/Icyubahiro-Jay-P" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-center gap-3 w-full px-8 py-4 font-mono font-bold tracking-widest text-white transition-all duration-300 border sm:w-auto border-dark-border hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/5"
          >
            <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            GITHUB
          </a>
        </div>
      </motion.div>
    </section>);

}