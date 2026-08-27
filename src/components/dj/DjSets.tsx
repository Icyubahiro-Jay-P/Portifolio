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
    <section id="dj-sets" className="relative px-6 py-28 md:py-36 bg-dj-base-2/50">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 mb-14 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[11px] tracking-[0.4em] text-dj-heat-soft uppercase">
                Recent sets
              </span>
              <div className="flex-1 h-px dj-hairline" />
            </div>
            <h2 className="font-dj text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tighter uppercase text-dj-paper">
              Latest <span className="dj-heat-text">mixes</span>
            </h2>
          </div>
          <a
            href="https://soundcloud.com/djprojay"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 pb-1 font-mono text-xs tracking-widest uppercase transition-colors border-b text-dj-muted hover:text-dj-heat-soft border-dj-line hover:border-dj-heat"
          >
            All on SoundCloud
            <ExternalLinkIcon className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Track listing — a mix set is genuinely sequential, so the ordering is real data */}
        <div className="border-t border-dj-line">
          {sets.map((set, idx) => (
            <m.a
              key={idx}
              href={set.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[2.5rem_1fr_200px_80px_70px] gap-4 md:gap-6 items-center px-3 py-5 md:px-5 border-b border-dj-line transition-colors duration-200 hover:bg-dj-smoke cursor-pointer"
            >
              {/* number / play */}
              <div className="relative flex items-center justify-center w-9 h-9 shrink-0">
                <span className="font-mono text-sm text-dj-muted transition-all duration-300 group-hover:opacity-0 group-hover:scale-50 tabular-nums">
                  {set.number}
                </span>
                <PlayIcon className="w-4 h-4 text-dj-heat absolute opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 ml-0.5" />
              </div>

              {/* title + cover */}
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-sm bg-dj-smoke">
                  <img
                    src={set.image}
                    alt={set.title}
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-dj text-sm font-bold text-dj-paper truncate transition-colors group-hover:text-dj-heat-soft md:text-base">
                    {set.title}
                  </div>
                  <div className="font-mono text-xs text-dj-muted mt-0.5 md:hidden">
                    {set.genre}
                  </div>
                </div>
              </div>

              {/* genre */}
              <div className="hidden lg:block">
                <span className="font-mono text-xs tracking-wider uppercase text-dj-muted">
                  {set.genre}
                </span>
              </div>

              {/* plays */}
              <div className="hidden md:block">
                <span className="font-mono text-sm text-dj-muted tabular-nums">
                  {set.plays}
                </span>
              </div>

              {/* duration */}
              <div className="font-mono text-sm text-right text-dj-muted tabular-nums">
                {set.duration}
              </div>
            </m.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DjSets;
