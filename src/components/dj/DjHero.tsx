import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

const MARQUEE_ITEMS = [
  "AFROBEAT",
  "AMAPIANO",
  "DANCEHALL",
  "AFRO HOUSE",
  "KOMPA",
  "3-STEP",
  "RNB",
  "HIP HOP",
];

export function DjHero() {
  const handleScrollToSets = () => {
    document.getElementById("dj-sets")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    document.getElementById("dj-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pb-40 overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,0,229,0.12),transparent)] pointer-events-none" />

      {/* Vertical thin line accents */}
      <div className="absolute top-0 bottom-0 hidden w-px left-12 bg-linear-to-b from-transparent via-white/5 to-transparent lg:block" />
      <div className="absolute top-0 bottom-0 hidden w-px right-12 bg-linear-to-b from-transparent via-white/5 to-transparent lg:block" />



      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 w-full max-w-6xl text-center"
      >
        {/* Pre-title label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <div className="w-12 h-px bg-neon-pink" />
          <span className="font-mono text-xs tracking-[0.4em] text-neon-pink uppercase select-none">
            DJ / Producer / Performer
          </span>
          <div className="w-12 h-px bg-neon-pink" />
        </motion.div>

        {/* Main name */}
        <h1 className="mb-12 font-black leading-none tracking-tighter text-white uppercase select-none font-display">
          <span className="block text-[clamp(3.5rem,12vw,10rem)]">DJ PRO</span>
          <span
            className="block text-[clamp(3.5rem,12vw,10rem)]"
            style={{ WebkitTextStroke: "2px #ff00e5", color: "transparent" }}
          >
            JAY
          </span>
        </h1>

        {/* Divider */}
        {/* I got lost to where to put it but anyways this was superhard to pull off */}
        
        {/* <div className="flex items-center justify-center gap-4 my-8 -translate-8">
          <div className="flex-1 h-px max-w-xs bg-linear-to-r from-transparent to-white/20" />
          <div className="w-2 h-2 rotate-45 bg-neon-pink" />
          <div className="flex-1 h-px max-w-xs bg-linear-to-l from-transparent to-white/20" />
        </div> */}


        {/* CTAs */}
        <div className="relative flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
          {/* Equalizer bars — moved behind the buttons */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[150%] max-w-4xl h-32 gap-0.75 opacity-15 pointer-events-none -z-10">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: ["15%", "100%", "30%", "70%", "15%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + (i % 5) * 0.4,
                  ease: "easeInOut",
                  delay: (i % 7) * 0.15,
                }}
                className="w-1 shrink-0"
                style={{
                  background: `linear-gradient(to top, #ff00e5, #a020f0)`,
                }}
              />
            ))}
          </div>

          <button
            id="dj-hero-book"
            onClick={handleScrollToContact}
            className="flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 group bg-neon-pink font-display hover:bg-white hover:text-neon-pink"
          >
            Book A Set
            <ArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
          <button
            id="dj-hero-listen"
            onClick={handleScrollToSets}
            className="flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 border border-white/20 font-display hover:border-neon-pink hover:text-neon-pink"
          >
            Listen Now
          </button>
        </div>
      </motion.div>

      {/* Scrolling marquee strip */}
      <div className="absolute left-0 w-full py-3 overflow-hidden bottom-24 border-y border-white/5 bg-white/2">
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
        className="absolute flex flex-col items-center gap-2 -translate-x-1/2 bottom-6 left-1/2"
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
