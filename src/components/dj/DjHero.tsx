import * as m from "motion/react-m";
import { ArrowDownIcon, Volume2Icon } from "lucide-react";
import Imigongo from "./Imigongo";

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

const ease = [0.22, 1, 0.36, 1] as const;

const DjHero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col min-h-svh">
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
        {/* Left: the poster */}
        <div className="relative flex flex-col justify-between gap-12 px-6 pt-8 pb-12 md:px-12 lg:pb-16">
          <div className="flex items-center justify-between text-[11px] font-semibold tracking-[0.3em] uppercase text-dj-ash">
            <span className="flex items-center gap-2.5">
              <span className="w-2 h-2 rotate-45 bg-dj-clay" />
              Now playing
            </span>
            <span className="tabular-nums">BPM 132</span>
          </div>

          <div>
            <m.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-6 text-xs font-semibold tracking-[0.35em] uppercase text-dj-clay"
            >
              Afrobeats · Amapiano · Afro House
            </m.p>

            <h1 className="font-poster font-black uppercase leading-[0.78] tracking-[-0.01em] select-none">
              <m.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.9, ease }}
                className="block pb-[0.06em] text-dj-bone text-[clamp(4.5rem,22vw,10.5rem)] lg:text-[clamp(4.5rem,11.5vw,10.5rem)]"
              >
                DJ Pro
              </m.span>
              <m.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.9, ease }}
                className="block text-dj-clay text-[clamp(6rem,32vw,15rem)] lg:text-[clamp(6rem,16.5vw,15rem)]"
              >
                Jay
              </m.span>
            </h1>
          </div>

          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <p className="max-w-md text-base leading-relaxed md:text-lg text-dj-bone/75">
              Engineering nights out of sound building tension, dropping
              basslines, and reading the room like a waveform.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("dj-contact")}
                className="flex items-center justify-center gap-3 px-7 py-4 text-sm font-extrabold tracking-[0.2em] uppercase bg-dj-clay text-dj-soot transition-colors hover:bg-dj-bone active:translate-y-px"
              >
                Book a set
                <ArrowDownIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("dj-sets")}
                className="flex items-center justify-center gap-3 px-7 py-4 text-sm font-extrabold tracking-[0.2em] uppercase border-2 border-dj-bone/80 text-dj-bone transition-colors hover:bg-dj-bone hover:text-dj-soot active:translate-y-px"
              >
                <Volume2Icon className="w-4 h-4" />
                Listen now
              </button>
            </div>
          </m.div>
        </div>

        {/* Right: portrait on bone, the wall behind him melts into the panel */}
        <m.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ delay: 0.1, duration: 1.1, ease }}
          className="relative min-h-[70svh] overflow-hidden bg-dj-bone lg:min-h-0"
        >
          <img
            src="jay-p-2.webp"
            alt="DJ Pro Jay"
            className="absolute inset-0 object-cover object-[50%_15%] w-full h-full mix-blend-multiply contrast-[1.08]"
          />
          <Imigongo className="absolute inset-y-0 left-0 w-7 text-dj-clay md:w-10" />
          <div className="absolute bottom-0 right-0 flex items-center gap-3 px-5 py-3 bg-dj-soot">
            <span className="w-2 h-2 rotate-45 bg-dj-clay" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-dj-bone">
              Volume up
            </span>
          </div>
        </m.div>
      </div>

      {/* Genre band */}
      <div className="relative overflow-hidden bg-dj-clay text-dj-soot">
        <Imigongo className="absolute inset-x-0 top-0 h-2.5 text-dj-soot/80" />
        <div className="flex py-5 pt-7 w-max dj-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center font-poster text-2xl font-extrabold tracking-wide uppercase md:text-3xl"
            >
              {item}
              <span className="mx-8 w-2.5 h-2.5 rotate-45 bg-dj-soot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DjHero;
