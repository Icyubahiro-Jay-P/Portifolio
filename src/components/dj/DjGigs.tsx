import { ExternalLinkIcon, MapPinIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { gigs } from "@/data/dj";
import { DjSectionHeader, DjReveal } from "./DjSectionHeader";

const DjGigs = () => {
  const upcoming = gigs.filter((g) => g.status === "upcoming");
  const past = gigs.filter((g) => g.status === "past");

  const Row = ({
    venue,
    city,
    detail,
    year,
    live,
  }: {
    venue: string;
    city: string;
    detail: string;
    year: string;
    live: boolean;
  }) => (
    <div className="group flex items-center gap-4 border-b border-dj-line px-2 py-5 transition-colors hover:bg-dj-smoke/40">
      <span
        className={cn(
          "w-2 h-2 shrink-0 rounded-full",
          live ? "bg-dj-ember dj-live-dot" : "bg-dj-stone/50",
        )}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-dj text-base font-bold text-dj-bone">
            {venue}
          </span>
          {live && (
            <span className="font-mono text-[10px] tracking-[0.25em] text-dj-ember uppercase border border-dj-ember/40 rounded-full px-2 py-0.5">
              Up next
            </span>
          )}
        </div>
        <div className="font-mono text-xs text-dj-stone mt-0.5 uppercase flex items-center gap-1.5">
          <MapPinIcon className="w-3 h-3" />
          {city} · {detail}
        </div>
      </div>
      <div className="font-mono text-sm text-dj-stone tabular-nums shrink-0">
        {year}
      </div>
    </div>
  );

  return (
    <section className="relative px-6 py-24 border-t border-dj-line/60 md:py-32">
      <div className="mx-auto max-w-6xl">
        <DjSectionHeader
          index="05"
          title="On the road"
          right={
            <a
              href="#dj-contact"
              className="group flex items-center gap-2 pb-1 font-mono text-xs tracking-widest uppercase border-b transition-colors text-dj-ash hover:text-dj-ember border-dj-line"
            >
              Book your venue
              <ExternalLinkIcon className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <DjReveal>
            <h3 className="pb-4 mb-2 font-mono text-sm tracking-widest uppercase text-dj-ember">
              // upcoming
            </h3>
            <div className="border-t border-dj-line">
              {upcoming.map((g) => (
                <Row key={g.venue} {...g} live />
              ))}
            </div>
          </DjReveal>

          <DjReveal delay={0.1}>
            <h3 className="pb-4 mb-2 font-mono text-sm tracking-widest uppercase text-dj-stone">
              // recent
            </h3>
            <div className="border-t border-dj-line">
              {past.map((g) => (
                <Row key={g.venue} {...g} live={false} />
              ))}
            </div>
          </DjReveal>
        </div>
      </div>
    </section>
  );
};

export default DjGigs;
