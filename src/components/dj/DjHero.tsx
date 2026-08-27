import * as m from "motion/react-m";
import { ArrowDownIcon, Volume2Icon, PauseIcon, PlayIcon } from "lucide-react";
import { marqueeItems } from "@/data/dj";
import { useRef, useState } from "react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const LiveEq = ({ active }: { active: boolean }) => (
  <div className="flex items-end gap-0.75 h-3.5" aria-hidden>
    {[0, 1, 2, 3, 4].map((i) => (
      <span
        key={i}
        className={`w-0.75 rounded-full ${
          active
            ? "dj-eq-bar bg-dj-ember"
            : "bg-dj-stone/50"
        }`}
        style={{ height: `${[60, 100, 45, 80, 55][i]}%` }}
      />
    ))}
  </div>
);

const DjHero = () => {
  // Decorative "demo play" toggle so the vinyl + EQ feel alive on load
  const [playing, setPlaying] = useState(true);
  const firstPress = useRef(false);

  const toggle = () => {
    firstPress.current = true;
    setPlaying((p) => !p);
  };

  return (
    <section className="relative flex flex-col min-h-screen px-6 overflow-hidden">
      {/* Ember stage light — a single hot source, top-left, casting heat */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 52% 48% at 18% 8%, rgba(255,122,26,0.16), transparent 66%)",
            "radial-gradient(ellipse 70% 55% at 82% 96%, rgba(255,179,71,0.05), transparent 62%)",
          ].join(","),
        }}
      />

      {/* Status readout — mirrors Dev's SYSTEM.ONLINE, ember-lit live indicator */}
      <div className="absolute flex items-center gap-3 px-5 py-2 -translate-x-1/2 border rounded-full top-6 left-1/2 w-max border-dj-line backdrop-blur-sm bg-dj-void-2/60">
        <span className="flex items-center gap-2">
          <span className="dj-live-dot w-1.5 h-1.5 rounded-full bg-dj-ember" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-dj-bone/80 uppercase">
            Now playing
          </span>
        </span>
        <span className="hidden w-px h-3 bg-dj-line sm:block" />
        <LiveEq active={playing} />
        <span className="hidden font-mono text-[11px] tracking-[0.2em] text-dj-ash sm:block tabular-nums">
          BPM 132
        </span>
      </div>

      {/* Main grid — asymmetric, like a record sleeve */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-12 py-28 md:flex-row md:gap-10">
        {/* Left: copy */}
        <div className="order-2 w-full max-w-xl text-center md:text-left md:order-1 md:ml-8 lg:ml-16">
          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.45em] text-dj-ember uppercase mb-5"
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
              className="block dj-heat-text text-[clamp(3.6rem,14vw,11rem)] leading-[0.9]"
            >
              Jay
            </m.span>
          </h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-md mx-auto font-sans text-base leading-relaxed mt-7 text-dj-ash md:mx-0 md:text-lg"
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
              className="relative flex items-center gap-3 px-9 py-4 text-sm font-bold tracking-widest text-dj-void uppercase rounded-full bg-dj-bone font-dj transition-all duration-200 hover:text-dj-void hover:bg-white active:scale-[0.98] min-w-11 min-h-11"
            >
              Book a set
              <ArrowDownIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("dj-sets")}
              className="flex items-center gap-3 px-9 py-4 text-sm font-bold tracking-widest text-dj-bone uppercase rounded-full border border-dj-line font-dj transition-all duration-200 hover:border-dj-ember/60 hover:dj-ember-border hover:text-white active:scale-[0.98] min-w-11 min-h-11"
            >
              <Volume2Icon className="w-4 h-4" />
              Listen now
            </button>
          </m.div>
        </div>

        {/* Right: spinning vinyl with ember-lit portrait label */}
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
                "radial-gradient(circle at 50% 50%, #201b15 0 26%, #0c0c0b 27%, #0c0c0b 34%, #1c1b19 35%, #0c0c0b 36%, #0c0c0b 100%)",
              boxShadow:
                "0 50px 120px -40px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(242,240,235,0.08)",
            }}
          >
            {/* rotating grooves — hairline neutral lines */}
            <m.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: playing ? 22 : 120,
                ease: "linear",
              }}
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
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 118%, rgba(255,122,26,0.32), transparent 60%)",
                }}
              />
              <div className="absolute inset-0 rounded-full bg-linear-to-t from-dj-void/50 via-transparent to-transparent" />
            </div>
            {/* centre spindle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-dj-bone/70" />
          </div>

          {/* floating play/pause control */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute flex items-center gap-2 px-3 py-2 border rounded-full -left-3 bottom-8 border-dj-line bg-dj-void-2/90 backdrop-blur-sm"
          >
            <button
              onClick={toggle}
              aria-label={playing ? "Pause demo" : "Play demo"}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                firstPress.current || playing
                  ? "bg-dj-ember text-dj-void"
                  : "bg-dj-bone/90 text-dj-void"
              }`}
            >
              {playing ? (
                <PauseIcon className="w-3.5 h-3.5" />
              ) : (
                <PlayIcon className="w-3.5 h-3.5" />
              )}
            </button>
            <span className="font-mono text-[10px] tracking-[0.25em] text-dj-ash uppercase">
              {playing ? "Volume up" : "Held"}
            </span>
          </m.div>
        </m.div>
      </div>

      {/* Scrolling genre marquee */}
      <div className="relative z-10 w-full py-4 overflow-hidden border-y border-dj-line bg-dj-void-2/40 backdrop-blur-sm">
        <m.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap w-max"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-dj text-sm font-semibold tracking-[0.3em] text-dj-stone uppercase"
            >
              <span className="text-dj-ember/70">{item}</span>
              <span className="inline-block w-1 h-1 mx-5 align-middle rounded-full bg-dj-stone" />
            </span>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default DjHero;
