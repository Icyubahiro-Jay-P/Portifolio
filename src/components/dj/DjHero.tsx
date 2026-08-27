import * as m from "motion/react-m";
import { ArrowDownIcon, Volume2Icon } from "lucide-react";
import { useEffect, useState } from "react";

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

const DjHero = () => {
  const [heat, setHeat] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setHeat((h) => (h + 2 + (Math.random() * 10) % 8) % 100),
      120,
    );
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      {/* Heat-haze background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 38%, rgba(255,106,61,0.16), rgba(124,92,255,0.05) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-[120vw] h-40 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 opacity-[0.04]"
        style={{
          background:
            "repeating-linear-gradient(90deg, #e8b04b 0 2px, transparent 2px 90px)",
        }}
      />

      {/* Status / BPM readout — top edge */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 flex items-center gap-4 px-5 py-2 border border-dj-line rounded-full backdrop-blur-sm bg-dj-base-2/50">
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex w-full h-full rounded-full animate-ping bg-dj-heat opacity-60" />
          <span className="relative inline-flex w-2 h-2 rounded-full bg-dj-heat" />
        </span>
        <span className="font-mono text-[11px] tracking-[0.3em] text-dj-paper/80 uppercase">
          Live · Kigali, RW
        </span>
        <span className="hidden h-3 w-px bg-dj-line sm:block" />
        <span className="hidden font-mono text-[11px] tracking-[0.2em] text-dj-heat-soft sm:block tabular-nums">
          BPM {132 + Math.floor(heat / 25)}
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl text-center mt-16">
        {/* Eyebrow */}
        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-mono text-[11px] tracking-[0.45em] text-dj-heat-soft uppercase mb-4"
        >
          Afrobeats · Amapiano · Afro House
        </m.p>

        {/* Wordmark + record */}
        <div className="relative flex flex-col items-center">
          {/* Spinning record disc behind wordmark */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -z-10 w-[min(78vw,560px)] aspect-square rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #1a130e 22%, #0b0806 22.5%, #0b0806 34%, #171310 34.5%, #0b0806 35%, #0b0806 100%)",
              boxShadow:
                "0 40px 120px -40px rgba(255,106,61,0.35), inset 0 0 0 1px rgba(255,241,224,0.06)",
            }}
          >
            {/* grooved rotation */}
            <m.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "repeating-radial-gradient(circle at 50% 50%, rgba(255,241,224,0.05) 0 1px, transparent 1px 6px)",
              }}
            />
            {/* label / portrait ring */}
            <div className="absolute inset-[24%] rounded-full overflow-hidden ring-1 ring-dj-heat/40">
              <img
                src="Dj Jay P.png"
                alt="DJ Pro Jay"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-dj-base/70 via-transparent to-transparent" />
            </div>
          </m.div>

          <h1 className="font-dj font-black leading-[0.85] tracking-tighter uppercase select-none">
            <m.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(2.6rem,10vw,7.5rem)] text-dj-paper"
            >
              DJ Pro
            </m.span>
            <m.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(3.2rem,13vw,10rem)] dj-heat-text"
            >
              Jay
            </m.span>
          </h1>
        </div>

        {/* Tagline */}
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-8 max-w-md font-sans text-base leading-relaxed text-dj-muted md:text-lg"
        >
          Engineering nights out of sound — building tension, dropping
          basslines, and reading the room like a waveform.
        </m.p>

        {/* CTAs */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="relative flex flex-col items-center justify-center gap-4 mt-12 sm:flex-row"
        >
          <button
            onClick={() => scrollTo("dj-contact")}
            className="flex items-center gap-3 px-9 py-4 text-sm font-bold tracking-widest text-dj-base uppercase rounded-full bg-dj-heat font-dj transition-transform duration-200 hover:scale-[1.03] hover:bg-dj-heat-soft active:scale-[0.98]"
          >
            Book a set
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo("dj-sets")}
            className="flex items-center gap-3 px-9 py-4 text-sm font-bold tracking-widest text-dj-paper uppercase rounded-full border border-dj-line font-dj transition-colors duration-200 hover:border-dj-heat/60 hover:text-dj-heat-soft min-w-[44px] min-h-[44px]"
          >
            <Volume2Icon className="w-4 h-4" />
            Listen now
          </button>
        </m.div>
      </div>

      {/* Scrolling genre marquee */}
      <div className="absolute left-0 w-full py-4 overflow-hidden bottom-16 border-y border-dj-line bg-dj-base-2/40 backdrop-blur-sm">
        <m.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap w-max"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-dj text-sm font-semibold tracking-[0.3em] text-dj-paper/25 uppercase"
            >
              {item}
              <span className="mx-5 inline-block w-1.5 h-1.5 rounded-full align-middle bg-dj-electric/50" />
            </span>
          ))}
        </m.div>
      </div>

      {/* Scroll hint */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <m.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDownIcon className="w-4 h-4 text-dj-muted/50" />
        </m.div>
      </m.div>
    </section>
  );
};

export default DjHero;
