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
      () => setHeat((h) => (h + 2 + ((Math.random() * 10) % 8)) % 100),
      120,
    );
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col min-h-screen px-6 overflow-hidden">
      {/* Heat-haze background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 40%, rgba(255,106,61,0.16), rgba(124,92,255,0.06) 45%, transparent 72%)",
        }}
      />
      {/* faint longitude lines */}
      <div
        className="absolute w-[130vw] h-40 right-[-15vw] top-1/2 -translate-y-1/2 opacity-[0.04]"
        style={{
          background:
            "repeating-linear-gradient(90deg, #e8b04b 0 2px, transparent 2px 90px)",
        }}
      />

      {/* Status readout — top edge */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-max flex items-center gap-4 px-5 py-2 border border-dj-line rounded-full backdrop-blur-sm bg-dj-base-2/50">
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

      {/* Main grid */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-10 py-24 md:flex-row md:gap-8">
        {/* Left: copy */}
        <div className="w-full max-w-xl text-center md:text-left order-2 md:order-1 md:ml-8 lg:ml-16">
          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.45em] text-dj-heat-soft uppercase mb-5"
          >
            Afrobeats · Amapiano · Afro House
          </m.p>

          <h1 className="font-dj font-black leading-[0.85] tracking-tighter uppercase">
            <m.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(3rem,11vw,8.5rem)] text-dj-paper"
            >
              DJ Pro
            </m.span>
            <m.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(3.6rem,14vw,11rem)] dj-heat-text leading-[0.9]"
            >
              Jay
            </m.span>
          </h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-7 max-w-md font-sans text-base leading-relaxed text-dj-muted md:mx-0 md:text-lg"
          >
            Engineering nights out of sound — building tension, dropping
            basslines, and reading the room like a waveform.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="flex flex-col items-center gap-4 mt-10 sm:flex-row md:items-start md:justify-start"
          >
            <button
              onClick={() => scrollTo("dj-contact")}
              className="flex items-center gap-3 px-9 py-4 text-sm font-bold tracking-widest text-dj-base uppercase rounded-full bg-dj-heat font-dj transition-transform duration-200 hover:scale-[1.03] hover:bg-dj-heat-soft active:scale-[0.98] min-w-[44px] min-h-[44px]"
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

        {/* Right: spinning vinyl with portrait label */}
        <m.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 md:order-2 shrink-0"
        >
          <div
            className="relative w-[min(62vw,300px)] md:w-[min(40vw,440px)] aspect-square rounded-full overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #171310 0 26%, #0c0906 27%, #0c0906 34%, #171310 35%, #0c0906 36%, #0c0906 100%)",
              boxShadow:
                "0 40px 100px -30px rgba(255,106,61,0.4), inset 0 0 0 1px rgba(255,241,224,0.06)",
            }}
          >
            {/* rotating grooves */}
            <m.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "repeating-radial-gradient(circle at 50% 50%, rgba(232,176,75,0.06) 0 1px, transparent 1px 5px)",
              }}
            />
            {/* portrait label */}
            <div className="absolute inset-[25%] rounded-full overflow-hidden ring-1 ring-dj-heat/40">
              <img
                src="Dj Jay P.png"
                alt="DJ Pro Jay"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-dj-base/60 via-transparent to-transparent" />
            </div>
            {/* centre spindle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-dj-heat/80" />
          </div>

          {/* floating genre tag */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -right-2 bottom-6 px-3 py-2 border border-dj-line rounded-full bg-dj-base-2/80 backdrop-blur-sm"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-dj-gold uppercase">
              Volume up
            </span>
          </m.div>
        </m.div>
      </div>

      {/* Scrolling genre marquee */}
      <div className="relative z-10 w-full py-4 border-y border-dj-line bg-dj-base-2/40 backdrop-blur-sm">
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
    </section>
  );
};

export default DjHero;
