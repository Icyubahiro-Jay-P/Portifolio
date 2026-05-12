import React from 'react';
import { motion } from 'framer-motion';
const genres = [
'Techno',
'Tech House',
'Deep House',
'Afro House',
'Drum & Bass',
'Industrial'];

const equipment = [
'CDJ-3000s',
'DJM-900NXS2',
'Ableton Live',
'Push 2',
'Moog Sub37',
'Roland TR-8S'];

export function DjSkills() {
  return (
    // <section className="py-32 px-6 relative">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
    //       <motion.div
    //         initial={{
    //           opacity: 0,
    //           x: -30
    //         }}
    //         whileInView={{
    //           opacity: 1,
    //           x: 0
    //         }}
    //         viewport={{
    //           once: true
    //         }}>
            
    //         <h3 className="font-display text-3xl font-bold text-white mb-8 tracking-wider uppercase">
    //           Sonic <span className="text-neon-pink">Palette</span>
    //         </h3>
    //         <div className="flex flex-wrap gap-4">
    //           {genres.map((genre, idx) =>
    //           <motion.div
    //             key={idx}
    //             whileHover={{
    //               scale: 1.05
    //             }}
    //             className="px-6 py-3 rounded-full border-2 border-dark-border hover:border-neon-pink hover:bg-neon-pink/10 transition-all cursor-default">
                
    //               <span className="font-sans font-bold text-gray-300 hover:text-white tracking-widest uppercase text-sm">
    //                 {genre}
    //               </span>
    //             </motion.div>
    //           )}
    //         </div>
    //       </motion.div>

    //       <motion.div
    //         initial={{
    //           opacity: 0,
    //           x: 30
    //         }}
    //         whileInView={{
    //           opacity: 1,
    //           x: 0
    //         }}
    //         viewport={{
    //           once: true
    //         }}>
            
    //         <h3 className="font-display text-3xl font-bold text-white mb-8 tracking-wider uppercase">
    //           Hardware <span className="text-neon-purple">&</span> Software
    //         </h3>
    //         <div className="flex flex-wrap gap-4">
    //           {equipment.map((item, idx) =>
    //           <motion.div
    //             key={idx}
    //             whileHover={{
    //               scale: 1.05
    //             }}
    //             className="px-6 py-3 rounded-full border-2 border-dark-border hover:border-neon-purple hover:bg-neon-purple/10 transition-all cursor-default">
                
    //               <span className="font-sans font-bold text-gray-300 hover:text-white tracking-widest uppercase text-sm">
    //                 {item}
    //               </span>
    //             </motion.div>
    //           )}
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
    <div></div>
  );

}