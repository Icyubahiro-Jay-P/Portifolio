import { useState } from "react";
import { ExternalLinkIcon, PlayIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { sets } from "@/data/dj";
import { DjSectionHeader } from "./DjSectionHeader";
import DjPlayer from "./DjPlayer";

const DjSets = () => {
  const [activeId, setActiveId] = useState(sets[0].id);
  const active = sets.find((s) => s.id === activeId) ?? sets[0];

  return (
    <section
      id="dj-sets"
      className="relative px-6 py-24 border-t border-dj-line/60 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <DjSectionHeader
          index="01"
          title="The mixes"
          right={
            <a
              href="https://soundcloud.com/djprojay"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 pb-1 font-mono text-xs tracking-widest uppercase border-b transition-colors text-dj-ash hover:text-dj-bone border-dj-line hover:border-dj-ember"
            >
              All on SoundCloud
              <ExternalLinkIcon className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Featured player */}
          <div className="lg:sticky lg:top-24 self-start">
            <DjPlayer key={active.id} set={active} />
            <p className="mt-4 font-mono text-[11px] tracking-[0.2em] text-dj-stone uppercase">
              {active.genre} · {active.duration}
            </p>
          </div>

          {/* Track selector */}
          <div className="flex flex-col border-t border-dj-line">
            {sets.map((set) => {
              const isActive = set.id === activeId;
              return (
                <button
                  key={set.id}
                  onClick={() => setActiveId(set.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "group flex items-center gap-4 border-b border-dj-line px-2 py-4 text-left transition-colors duration-200",
                    isActive
                      ? "bg-dj-smoke/40"
                      : "hover:bg-dj-smoke/30",
                  )}
                >
                  <div className="relative flex items-center justify-center w-9 h-9 shrink-0">
                    <span
                      className={cn(
                        "font-mono text-sm tabular-nums transition-all duration-300",
                        isActive
                          ? "opacity-0 scale-50"
                          : "text-dj-stone group-hover:opacity-0 group-hover:scale-50",
                      )}
                    >
                      {set.number}
                    </span>
                    <PlayIcon
                      className={cn(
                        "w-4 h-4 text-dj-ember absolute transition-all duration-300 ml-0.5",
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100",
                      )}
                    />
                  </div>

                  <div className="flex items-center gap-4 min-w-0">
                    <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-sm bg-dj-smoke">
                      <img
                        src={set.image}
                        alt={set.title}
                        loading="lazy"
                        className={cn(
                          "object-cover w-full h-full transition-all duration-500",
                          isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0",
                        )}
                      />
                      {isActive && (
                        <span className="absolute top-1 left-1 w-2 h-2 rounded-full bg-dj-ember dj-live-dot" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div
                        className={cn(
                          "font-dj text-sm font-bold truncate transition-colors",
                          isActive ? "text-white" : "text-dj-bone",
                        )}
                      >
                        {set.title}
                      </div>
                      <div className="font-mono text-xs text-dj-stone mt-0.5 uppercase truncate">
                        {set.genre}
                      </div>
                    </div>
                  </div>

                  <div className="ml-auto shrink-0 text-right">
                    <div className="font-mono text-sm text-dj-stone tabular-nums">
                      {set.duration}
                    </div>
                    <div className="font-mono text-[10px] text-dj-stone mt-0.5 uppercase hidden sm:block">
                      {set.plays}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DjSets;
