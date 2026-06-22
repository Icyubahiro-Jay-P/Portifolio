import { useEffect } from "react";
import * as m from "motion/react-m";
import DevHero from "../components/dev/DevHero";
import DevAbout from "../components/dev/DevAbout";
import DevProjects from "../components/dev/DevProjects";
import DevSkills from "../components/dev/DevSkills";
import DevFAQ from "../components/dev/DevFAQ";
import DevContact from "../components/dev/DevContact";
import RealmNav from "@/components/shared/RealmNav";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const DevRealm = () => {
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
      className="relative min-h-screen text-white bg-dark dev-theme"
    >
      <ScrollProgress className="h-1 bg-neon-cyan" />

      <div className="scanlines"></div>

      {/* Subtle Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <DevHero />
        <DevAbout />
        <DevProjects />
        <DevSkills />
        <DevFAQ />
        <DevContact />
      </div>

      <RealmNav />
    </m.div>
  );
}
export default DevRealm;