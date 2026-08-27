import * as m from "motion/react-m";
import { ArrowDownIcon, Volume2Icon } from "lucide-react";

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
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col min-h-screen px-6 overflow-hidden">
      {/* Soft tonal glow — single warm light source, no color */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 68% 55% at 72% 42%, rgba(242,240,235,0.07), transparent 70%)",
        }}
      />

      {/* Status readout — mirrors Dev's SYSTEM.ONLINE pill but monochrome */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-max flex items-center gap-4 px-5 py-2 border border-dj-line rounded-full backdrop-blur-sm bg-dj-void-2/60">
        <span className="font-mono text-[11px] tracking-[0.3em] text-dj-bone/70 uppercase">
          ɴᴏᴡ ᴘʟᴀʏɪɴɢ
        </span>
        <span className="hidden h-3 w-px bg-dj-line sm:block" />
        <span className="hidden font-mono text-[11px] tracking-[0.2em] text-dj-ash sm:block tabular-nums">
          BPM 132
        </span>
      </div>

      {/* Main grid — asymmetric, like a record sleeve */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-10 py-24 md:flex-row md:gap-8">
        {/* Left: copy */}
        <div className="w-full max-w-xl text-center md:text-left order-2 md:order-1 md:ml-8 lg:ml-16">
          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.45em] text-dj-ash uppercase mb-5"
          >
            Afrobeats · Amapiano · Afro House
          </m.p>

          <h1 className="font-dj font-black leading-[0.85] tracking-tighter uppercase select-none">
            <m.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block text-dj-bone text-[clamp(3rem,11vw,8.5rem)]"
            >
              DJ Pro
            </m.span>
            <m.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block dj-fade-text text-[clamp(3.6rem,14vw,11rem)] leading-[0.9]"
            >
              Jay
            </m.span>
          </h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-7 max-w-md font-sans text-base leading-relaxed text-dj-ash md:mx-0 md:text-lg"
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
              className="flex items-center gap-3 px-9 py-4 text-sm font-bold tracking-widest text-dj-void uppercase rounded-full bg-dj-bone font-dj transition-colors duration-200 hover:bg-white active:scale-[0.98] min-w-[44px] min-h-[44px]"
            >
              Book a set
              <ArrowDownIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("dj-sets")}
              className="flex items-center gap-3 px-9 py-4 text-sm font-bold tracking-widest text-dj-bone uppercase rounded-full border border-dj-line font-dj transition-colors duration-200 hover:border-dj-bone hover:text-white min-w-[44px] min-h-[44px]"
            >
              <Volume2Icon className="w-4 h-4" />
              Listen now
            </button>
          </m.div>
        </div>

        {/* Right: spinning vinyl with grayscale portrait label */}
        <m.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 md:order-2 shrink-0"
        >
          <div
            className="relative w-[min(62vw,300px)] md:w-[min(40vw,430px)] aspect-square rounded-full overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #1c1b19 0 26%, #0c0c0b 27%, #0c0c0b 34%, #1c1b19 35%, #0c0c0b 36%, #0c0c0b 100%)",
              boxShadow:
                "0 50px 120px -40px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(242,240,235,0.08)",
            }}
          >
            {/* rotating grooves — hairline neutral lines */}
            <m.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "repeating-radial-gradient(circle at 50% 50%, rgba(242,240,235,0.06) 0 1px, transparent 1px 5px)",
              }}
            />
            {/* portrait label */}
            <div className="absolute inset-[25%] rounded-full overflow-hidden ring-1 ring-dj-line">
              <img
                src="Dj Jay P.png"
                alt="DJ Pro Jay"
                className="object-cover w-full h-full grayscale"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-dj-void/50 via-transparent to-transparent" />
            </div>
            {/* centre spindle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-dj-bone/70" />
          </div>

          {/* floating caption */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -right-2 bottom-6 px-3 py-2 border border-dj-line rounded-full bg-dj-void-2/80 backdrop-blur-sm"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-dj-ash uppercase">
              Volume up
            </span>
          </m.div>
        </m.div>
      </div>

      {/* Scrolling genre marquee */}
      <div className="relative z-10 w-full py-4 border-y border-dj-line bg-dj-void-2/40 backdrop-blur-sm">
        <m.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap w-max"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-dj text-sm font-semibold tracking-[0.3em] text-dj-stone uppercase"
            >
              {item}
              <span className="mx-5 inline-block w-1 h-1 rounded-full align-middle bg-dj-stone" />
            </span>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default DjHero;
