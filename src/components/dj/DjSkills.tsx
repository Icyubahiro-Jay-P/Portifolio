import * as m from "motion/react-m";
import Imigongo from "./Imigongo";

const genres = [
  "Afrobeat",
  "Amapiano",
  "Dancehall",
  "Afro House",
  "Kompa",
  "3-Step",
  "RnB",
  "Hip Hop",
];

const equipment = [
  { name: "CDJ-3000s", tag: "Players" },
  { name: "Pioneer DJ SB 3", tag: "Controller" },
  { name: "Hercules Inpulse 300", tag: "Controller" },
  { name: "Pioneer DJ Rev 1", tag: "Scratch" },
];

const software = ["Serato DJ Pro", "Rekordbox", "Virtual DJ", "FL Studio"];

const RiderTable = ({
  title,
  rows,
}: {
  title: string;
  rows: { name: string; tag?: string }[];
}) => (
  <div>
    <h3 className="pb-3 text-xs font-bold tracking-[0.35em] uppercase border-b-[3px] border-dj-bone text-dj-bone">
      {title}
    </h3>
    <ul>
      {rows.map((row, idx) => (
        <li
          key={row.name}
          className="flex items-baseline justify-between gap-4 py-4 border-b border-dj-line"
        >
          <span className="flex items-baseline gap-4">
            <span className="text-xs tabular-nums text-dj-clay">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="text-base font-semibold text-dj-bone">{row.name}</span>
          </span>
          {row.tag && (
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-dj-ash">
              {row.tag}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const DjSkills = () => {
  return (
    <section className="relative">
      <Imigongo className="block h-5 text-dj-clay" />

      <div className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <span className="block mb-4 text-xs font-bold tracking-[0.35em] uppercase text-dj-clay">
            What the room gets
          </span>
          <h2 className="mb-16 font-poster text-[clamp(3.5rem,9vw,7.5rem)] font-black uppercase leading-[0.85]">
            Sonic signature
          </h2>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
            {/* Genres as a poster line-up */}
            <ul className="border-t-[3px] border-dj-bone">
              {genres.map((genre, idx) => (
                <m.li
                  key={genre}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ delay: idx * 0.04, duration: 0.5 }}
                  className="flex items-center justify-between py-1 border-b border-dj-line group"
                >
                  <span
                    className={`font-poster text-[clamp(2.6rem,6.5vw,5rem)] font-black uppercase leading-[1.05] transition-colors duration-200 group-hover:text-dj-clay ${
                      idx % 2 ? "dj-outline" : "text-dj-bone"
                    }`}
                  >
                    {genre}
                  </span>
                  <span className="w-3 h-3 transition-opacity rotate-45 opacity-0 bg-dj-clay group-hover:opacity-100" />
                </m.li>
              ))}
            </ul>

            {/* Tech rider */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7 }}
              className="space-y-14 lg:pt-4 lg:sticky lg:top-12 lg:self-start"
            >
              <RiderTable title="Hardware" rows={equipment} />
              <RiderTable title="Software" rows={software.map((name) => ({ name }))} />
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DjSkills;
