import  { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DjHero } from '../components/dj/DjHero';
import { DjAbout } from '../components/dj/DjAbout';
import { DjSets } from '../components/dj/DjSets';
import { DjSkills } from '../components/dj/DjSkills';
import { DjFAQ } from '../components/dj/DjFAQ';
import { DjContact } from '../components/dj/DjContact';
import RealmNav from '@/components/shared/RealmNav';
export function DjRealm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.5
      }}
      className="min-h-screen bg-dark text-white dj-theme relative">
      

      <div className="relative z-10">
        <DjHero />
        <DjAbout />
        <DjSets />
        <DjSkills />
        <DjFAQ />
        <DjContact />
      </div>

      <RealmNav />
    </motion.div>);

}