import { useEffect } from "react";
import * as m from "motion/react-m";
import DjHero from "../components/dj/DjHero";
import DjAbout from "../components/dj/DjAbout";
import DjSets from "../components/dj/DjSets";
import DjSkills from "../components/dj/DjSkills";
import DjFAQ from "../components/dj/DjFAQ";
import DjContact from "../components/dj/DjContact";
import RealmNav from "@/components/shared/RealmNav";
import { ScrollProgress } from "@/components/ui/scroll-progress";

// Film grain  printed-flyer texture instead of a UI grid
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const DjRealm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen overflow-x-clip text-dj-bone bg-dj-soot dj-theme font-dj"
    >
      <ScrollProgress className="h-0.75 bg-dj-clay" />

      <div
        aria-hidden="true"
        className="fixed inset-0 z-60 pointer-events-none opacity-[0.07] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="relative z-10">
        <DjHero />
        <DjAbout />
        <DjSets />
        <DjSkills />
        <DjFAQ />
        <DjContact />
      </div>

      <RealmNav />
    </m.div>
  );
};

export default DjRealm;
