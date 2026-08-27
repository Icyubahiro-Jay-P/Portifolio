import * as m from "motion/react-m";
import { TerminalIcon, GithubIcon, ChevronDownIcon } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const DevHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-neon-cyan/10 via-dark to-dark -z-10"></div>

      <div className="relative z-10 grid items-center w-full max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <m.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full border-neon-cyan/30 bg-neon-cyan/5">
            <TerminalIcon className="w-4 h-4 text-neon-cyan" />
            <span className="font-mono text-sm tracking-wider select-none text-neon-cyan">
              SYSTEM.ONLINE
            </span>
          </div>

          <h1 className="mb-5 text-4xl font-black tracking-tighter text-white select-none font-display md:text-6xl lg:text-7xl crt-flicker neon-text-cyan">
            IRAKOZE ICYUBAHIRO <br className="hidden md:block" /> JEAN PIERRE
          </h1>

          <h2 className="mb-6 font-mono text-lg tracking-widest text-gray-300 md:text-2xl">
            FULL-STACK DEVELOPER
          </h2>

          <p className="max-w-xl mx-auto mb-9 font-sans text-base leading-relaxed text-gray-400 lg:mx-0 md:text-lg">
            Architecting scalable systems and crafting immersive digital
            experiences. Bridging the gap between complex backend logic and
            sleek frontend interfaces.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <button
              className="w-full px-7 py-4 font-mono font-bold tracking-widest transition-all duration-300 border outline-none cursor-pointer sm:w-auto bg-neon-cyan/10 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark neon-box-cyan"
              onClick={() => scrollTo("deployments")}
            >
              VIEW PROJECTS
            </button>
            <a
              href="https://github.com/Icyubahiro-Jay-P"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full gap-3 px-7 py-4 font-mono font-bold tracking-widest text-white transition-all duration-300 border group sm:w-auto border-dark-border hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/5"
            >
              <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              GITHUB
            </a>
          </div>
        </m.div>

        {/* Portrait — neon-framed, gray-to-color on hover */}
        <m.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block group"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-neon-cyan/60 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
          <div className="relative overflow-hidden border border-dark-border">
            <img
              src="Jay P.JPG"
              alt="Irakoze Icyubahiro Jean Pierre — developer"
              className="object-cover w-full h-full aspect-square grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-overlay" />
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-r from-dark/95 to-dark/40">
              <span className="font-mono text-xs tracking-[0.3em] text-neon-cyan uppercase">
                {'{ full_stack.dev }'}
              </span>
            </div>
          </div>
        </m.div>
      </div>

      {/* scroll cue */}
      <m.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        onClick={() => scrollTo("init-profile")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-cyan/50 hover:text-neon-cyan transition-colors cursor-pointer"
      >
        <ChevronDownIcon className="w-7 h-7 animate-bounce" />
      </m.button>
    </section>
  );
};
export default DevHero;
