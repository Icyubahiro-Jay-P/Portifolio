import * as m from "motion/react-m";
import { PlayIcon, ArrowUpRightIcon } from "lucide-react";

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
    <section id="dj-sets" className="relative px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 mb-16 md:flex-row md:items-end">
          <div>
            <span className="block mb-4 text-xs font-bold tracking-[0.35em] uppercase text-dj-clay">
              On rotation
            </span>
            <h2 className="font-poster text-[clamp(3.5rem,9vw,7.5rem)] font-black uppercase leading-[0.85]">
              Recent mixes
            </h2>
          </div>
          <a
            href="https://soundcloud.com/djprojay"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 pb-1 text-xs font-bold tracking-[0.25em] uppercase border-b-2 border-dj-clay text-dj-bone transition-colors hover:text-dj-clay"
          >
            All on SoundCloud
            <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {sets.map((set, idx) => (
            <m.a
              key={set.number}
              href={set.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="block group"
            >
              {/* Sleeve with the record peeking out */}
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute top-[5%] left-[30%] w-[68%] aspect-square rounded-full shadow-[inset_0_0_0_1px_rgba(239,231,218,0.18)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[14%] group-hover:rotate-120"
                  style={{
                    background:
                      "conic-gradient(from 30deg, rgba(239,231,218,0.10), transparent 18%, rgba(239,231,218,0.08) 50%, transparent 68%), repeating-radial-gradient(circle, #2a2520 0 1.5px, #110f0d 1.5px 4px)",
                  }}
                >
                  <div className="absolute inset-[34%] rounded-full bg-dj-clay flex items-center justify-center">
                    <span className="font-poster text-sm font-black text-dj-soot">
                      {set.number}
                    </span>
                  </div>
                  <div className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-dj-soot" />
                </div>

                <div className="relative w-[80%] aspect-square overflow-hidden bg-dj-clay shadow-[10px_10px_0_0_rgba(0,0,0,0.6)]">
                  <img
                    src={set.image}
                    alt={set.title}
                    loading="lazy"
                    className="object-cover w-full h-full grayscale contrast-125 mix-blend-multiply transition duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:mix-blend-normal"
                  />
                  <span className="absolute bottom-0 left-0 flex items-center justify-center w-14 h-14 bg-dj-clay text-dj-soot translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                    <PlayIcon className="w-5 h-5 ml-0.5 fill-current" />
                  </span>
                </div>
              </div>

              {/* Liner notes */}
              <div className="flex gap-5 pt-6 mt-6 border-t-2 border-dj-line">
                <span className="font-poster text-3xl font-black leading-none text-dj-clay tabular-nums">
                  {set.number}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-extrabold leading-tight text-dj-bone transition-colors group-hover:text-dj-clay">
                    {set.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold tracking-[0.18em] uppercase text-dj-ash">
                    {set.genre}
                  </p>
                  <p className="mt-3 text-sm tabular-nums text-dj-bone/70">
                    {set.duration}
                    <span className="mx-2 text-dj-clay">◆</span>
                    {set.plays} plays
                  </p>
                </div>
              </div>
            </m.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DjSets;
