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
const DjRealm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative min-h-screen text-dj-bone bg-dj-void dj-theme font-dj"
    >
      <ScrollProgress className="h-[3px] bg-dj-bone" />

      {/* Subtle tonal grid — shared motif with Dev realm, monochrome here */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#f2f0ea 1px, transparent 1px), linear-gradient(90deg, #f2f0ea 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>
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
}

export default DjRealm;