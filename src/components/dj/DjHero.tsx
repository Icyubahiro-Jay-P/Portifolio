import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

const MARQUEE_ITEMS = [
  "TECHNO",
  "TECH HOUSE",
  "DEEP HOUSE",
  "AFRO HOUSE",
  "DRUM & BASS",
  "INDUSTRIAL",
  "PEAK TIME",
  "MELODIC TECHNO",
];

export function DjHero() {
  const handleScrollToSets = () => {
    document.getElementById("dj-sets")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    document.getElementById("dj-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,0,229,0.12),transparent)] pointer-events-none" />

      {/* Vertical thin line accents */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
      <div className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />

      {/* Equalizer bars — bottom decoration, precise and thin */}
      <div className="absolute bottom-0 left-0 flex items-end justify-center w-full h-40 gap-[3px] opacity-15 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: ["15%", "100%", "30%", "70%", "15%"] }}
            transition={{
              repeat: Infinity,
              duration: 2 + (i % 5) * 0.4,
              ease: "easeInOut",
              delay: (i % 7) * 0.15,
            }}
            className="w-1 flex-shrink-0"
            style={{
              background: `linear-gradient(to top, #ff00e5, #a020f0)`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 max-w-6xl w-full text-center"
      >
        {/* Pre-title label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-neon-pink" />
          <span className="font-mono text-xs tracking-[0.4em] text-neon-pink uppercase">
            DJ / Producer / Performer
          </span>
          <div className="h-px w-12 bg-neon-pink" />
        </motion.div>

        {/* Main name */}
        <h1 className="font-display font-black uppercase leading-none tracking-tighter text-white mb-2">
          <span className="block text-[clamp(3.5rem,12vw,10rem)]">DJ PRO</span>
          <span
            className="block text-[clamp(3.5rem,12vw,10rem)]"
            style={{ WebkitTextStroke: "2px #ff00e5", color: "transparent" }}
          >
            JAY
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-white/20" />
          <div className="w-2 h-2 bg-neon-pink rotate-45" />
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-white/20" />
        </div>

        {/* Tagline */}
        <p className="font-sans text-gray-400 text-lg md:text-xl tracking-widest uppercase mb-12">
          Kigali · Rwanda&nbsp;&nbsp;—&nbsp;&nbsp;Est. 2019
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="dj-hero-book"
            onClick={handleScrollToContact}
            className="group flex items-center gap-3 px-10 py-4 bg-neon-pink text-white font-display font-bold tracking-widest uppercase text-sm transition-all duration-300 hover:bg-white hover:text-neon-pink"
          >
            Book A Set
            <ArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
          <button
            id="dj-hero-listen"
            onClick={handleScrollToSets}
            className="flex items-center gap-3 px-10 py-4 border border-white/20 text-white font-display font-bold tracking-widest uppercase text-sm transition-all duration-300 hover:border-neon-pink hover:text-neon-pink"
          >
            Listen Now
          </button>
        </div>
      </motion.div>

      {/* Scrolling marquee strip */}
      <div className="absolute bottom-44 left-0 w-full overflow-hidden border-y border-white/5 py-3 bg-white/[0.02]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap w-max"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-[0.3em] text-white/20 uppercase"
            >
              {item}
              <span className="mx-6 text-neon-pink/40">◆</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDownIcon className="w-4 h-4 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
