import * as m from "motion/react-m";
import { PlayIcon, ExternalLinkIcon } from "lucide-react";

const sets = [
  {
    number: "001",
    title: "Midnight Protocol Vol. 1",
    genre: "Techno / Peak Time",
    duration: "1:02:45",
    plays: "12.4K",
    image: "Mix 1.png",
    link: "https://soundcloud.com/djprojay",
  },
  {
    number: "002",
    title: "Warehouse Sessions 004",
    genre: "Hard Techno / Industrial",
    duration: "2:15:30",
    plays: "8.9K",
    image: "Mix 2.png",
    link: "https://soundcloud.com/djprojay",
  },
  {
    number: "003",
    title: "Neon Dreams Mix",
    genre: "Deep House / Melodic",
    duration: "0:58:20",
    plays: "15.2K",
    image: "Mix 3.png",
    link: "https://soundcloud.com/djprojay",
  },
  {
    number: "004",
    title: "System Override (Live)",
    genre: "Tech House",
    duration: "1:30:00",
    plays: "22.1K",
    image: "Mix 4.png",
    link: "https://soundcloud.com/djprojay",
  },
];

const DjSets = () => {
  return (
    <section id="dj-sets" className="relative px-6 py-32 bg-dark-surface/30">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-6">
          <span className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">
            03 — Mixes
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <div className="flex flex-col items-end justify-between gap-6 mb-16 md:flex-row">
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase font-display md:text-6xl">
            Latest <span className="text-neon-pink">Mixes</span>
          </h2>
          <a
            href="https://soundcloud.com/djprojay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pb-1 font-mono text-xs tracking-widest uppercase transition-colors border-b text-white/40 hover:text-neon-pink border-white/10 hover:border-neon-pink"
          >
            All on SoundCloud
            <ExternalLinkIcon className="w-3 h-3" />
          </a>
        </div>

        {/* Track listing */}
        <div className="space-y-px">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-[3rem_1fr_auto_auto] lg:grid-cols-[3rem_1fr_200px_80px_80px] gap-6 px-6 pb-3 border-b border-white/8">
            <span className="font-mono text-xs tracking-widest text-white/20">
              #
            </span>
            <span className="font-mono text-xs tracking-widest uppercase text-white/20">
              Title
            </span>
            <span className="hidden font-mono text-xs tracking-widest uppercase text-white/20 lg:block">
              Genre
            </span>
            <span className="font-mono text-xs tracking-widest uppercase text-white/20">
              Plays
            </span>
            <span className="font-mono text-xs tracking-widest text-right uppercase text-white/20">
              Duration
            </span>
          </div>

          {sets.map((set, idx) => (
            <m.a
              key={idx}
              href={set.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[3rem_1fr_auto_auto] lg:grid-cols-[3rem_1fr_200px_80px_80px] gap-6 items-center px-6 py-5 border-b border-white/5 hover:bg-white/3 transition-all duration-200 cursor-pointer"
            >
              {/* Number / Play toggle */}
              <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
                <span className="font-mono text-sm transition-opacity text-white/20 group-hover:opacity-0">
                  {set.number}
                </span>
                <PlayIcon className="w-4 h-4 text-neon-pink absolute opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" />
              </div>

              {/* Title + image */}
              <div className="flex items-center min-w-0 gap-4">
                <div className="w-10 h-10 overflow-hidden shrink-0 bg-dark-surface">
                  <img
                    src={set.image}
                    alt={set.title}
                    className="object-cover w-full h-full transition-all duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white truncate transition-colors font-display md:text-base group-hover:text-neon-pink">
                    {set.title}
                  </div>
                  <div className="font-mono text-xs text-white/30 md:hidden mt-0.5">
                    {set.genre}
                  </div>
                </div>
              </div>

              {/* Genre */}
              <div className="hidden lg:block">
                <span className="font-mono text-xs tracking-wider uppercase text-white/30">
                  {set.genre}
                </span>
              </div>

              {/* Plays */}
              <div className="hidden md:block">
                <span className="font-mono text-sm text-white/40">
                  {set.plays}
                </span>
              </div>

              {/* Duration */}
              <div className="font-mono text-sm text-right text-white/40">
                {set.duration}
              </div>
            </m.a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default DjSets;