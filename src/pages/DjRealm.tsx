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
      className="relative min-h-screen text-[--color-dj-paper] bg-dj-base dj-theme font-dj"
    >
      <ScrollProgress className="h-[3px] bg-gradient-to-r from-dj-heat via-dj-gold to-dj-electric" />

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