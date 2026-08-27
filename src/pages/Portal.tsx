import * as m from "motion/react-m";
import { useNavigate } from "react-router-dom";
import {
  Code2Icon,
  TerminalIcon,
  Disc3Icon,
  HeadphonesIcon,
  ArrowRightIcon,
} from "lucide-react";

const Portal = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-8 overflow-hidden font-sans bg-dark">
      <div className="scanlines"></div>

      {/* Background Grid — cyber floor, receding */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            transform:
              "perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
            transformOrigin: "top center",
          }}
        />
      </div>

      {/* dual-tinted horizon light — cyan left, ember right */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,240,255,0.07) 0%, rgba(0,240,255,0.02) 40%, transparent 50%, rgba(255,122,26,0.02) 60%, rgba(255,122,26,0.07) 100%)",
        }}
      />

      <div className="z-10 text-center mb-14 md:mb-10">
        <m.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="p-1 text-3xl font-black tracking-widest text-white font-display md:text-6xl"
        >
          IRAKOZE ICYUBAHIRO JEAN PIERRE
        </m.h1>
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm md:text-base tracking-[0.3em] text-gray-400"
        >
          QUIET BY DAY · QUITE LOUD AT NIGHT
        </m.p>
      </div>

      <div className="z-10 flex flex-col w-full max-w-5xl gap-8 px-6 md:flex-row md:gap-10 md:items-stretch">
        {/* ================= DEV PORTAL ================= */}
        <m.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => navigate("/dev")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/dev")}
          aria-label="Enter Dev Matrix"
          className="flex-1 cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-cyan"
        >
          <div className="relative flex flex-col items-center justify-center overflow-hidden transition-all duration-500 border-2 h-70 md:h-95 border-dark-border group-hover:neon-border-cyan bg-dark-surface/80 backdrop-blur-sm">
            {/* ambient cyan fill on hover */}
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-neon-cyan/5 group-hover:opacity-100" />

            {/* light sweep on hover */}
            <div className="absolute inset-0 transition-transform duration-700 -translate-x-full pointer-events-none group-hover:translate-x-full">
              <div className="w-1/2 h-full bg-linear-to-r from-transparent via-neon-cyan/10 to-transparent" />
            </div>

            {/* corner brackets */}
            <div className="absolute w-4 h-4 transition-colors duration-500 border-t-2 border-l-2 top-3 left-3 border-neon-cyan/0 group-hover:border-neon-cyan/70" />
            <div className="absolute w-4 h-4 transition-colors duration-500 border-b-2 border-r-2 bottom-3 right-3 border-neon-cyan/0 group-hover:border-neon-cyan/70" />

            <div className="relative z-10 flex flex-col items-center">
              <m.div
                animate={{ rotate: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <Code2Icon className="mb-6 text-gray-600 transition-colors duration-500 w-14 h-14 group-hover:text-neon-cyan" />
              </m.div>
              <h2 className="text-3xl font-bold tracking-wider text-gray-400 transition-all duration-500 font-display group-hover:text-white group-hover:neon-text-cyan">
                DEV MATRIX
              </h2>

              <div className="flex items-center gap-2 mt-6 font-mono text-xs tracking-widest transition-colors duration-500 text-neon-cyan/0 group-hover:text-neon-cyan">
                <TerminalIcon className="w-4 h-4" />
                <span>&gt; BOOT_SYSTEM</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </m.div>

        {/* ================= DJ PORTAL ================= */}
        <m.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => navigate("/dj")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/dj")}
          aria-label="Enter DJ Den"
          className="flex-1 cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dj-ember"
        >
          <div className="relative flex flex-col items-center justify-center overflow-hidden transition-all duration-500 border-2 h-70 md:h-95 border-dark-border group-hover:dj-ember-border bg-dark-surface/80 backdrop-blur-sm">
            {/* ambient ember fill + rising heat from the floor */}
            <div className="absolute inset-x-0 bottom-0 transition-opacity duration-500 opacity-0 h-2/3 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,122,26,0.16), transparent)",
              }}
            />

            {/* light sweep */}
            <div className="absolute inset-0 transition-transform duration-700 -translate-x-full pointer-events-none group-hover:translate-x-full">
              <div className="w-1/2 h-full bg-linear-to-r from-transparent via-dj-ember/10 to-transparent" />
            </div>

            {/* corner brackets (ember) */}
            <div className="absolute w-4 h-4 transition-colors duration-500 border-t-2 border-r-2 top-3 right-3 border-dj-ember/0 group-hover:border-dj-ember/70" />
            <div className="absolute w-4 h-4 transition-colors duration-500 border-b-2 border-l-2 bottom-3 left-3 border-dj-ember/0 group-hover:border-dj-ember/70" />

            <div className="relative z-10 flex flex-col items-center">
              {/* spinning record icon */}
              <div className="relative mb-6">
                <m.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  className="text-gray-600 transition-colors duration-500 group-hover:text-dj-ember"
                >
                  <Disc3Icon className="w-14 h-14" />
                </m.div>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-dj-ember opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h2 className="text-3xl font-bold tracking-wider text-gray-400 transition-all duration-500 font-display group-hover:text-white">
                DJ DEN
              </h2>

              <div className="flex items-center gap-2 mt-6 font-mono text-xs tracking-widest transition-colors duration-500 text-dj-ember/0 group-hover:text-dj-ember">
                <HeadphonesIcon className="w-4 h-4" />
                <span>DROP_THE_BEAT</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </m.div>
      </div>

      {/* footer hint */}
      <m.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="z-10 mt-12 font-mono text-[11px] tracking-[0.35em] text-gray-600 uppercase"
      >
        choose your frequency ↓
      </m.p>
    </div>
  );
};
export default Portal;
