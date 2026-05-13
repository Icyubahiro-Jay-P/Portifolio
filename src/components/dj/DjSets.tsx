import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, HeartIcon, Share2Icon } from 'lucide-react';
const sets = [
{
  title: 'MIDNIGHT PROTOCOL // VOL 1',
  genre: 'Techno / Peak Time',
  duration: '1:02:45',
  plays: '12.4K',
  image:
  'Mix 1.png'
},
{
  title: 'WAREHOUSE SESSIONS 004',
  genre: 'Hard Techno / Industrial',
  duration: '2:15:30',
  plays: '8.9K',
  image:
  'Mix 2.png'
},
{
  title: 'NEON DREAMS MIX',
  genre: 'Deep House / Melodic',
  duration: '0:58:20',
  plays: '15.2K',
  image:
  'Mix 3.png'
},
{
  title: 'SYSTEM OVERRIDE (LIVE)',
  genre: 'Tech House',
  duration: '1:30:00',
  plays: '22.1K',
  image:
  'Mix 4.png'
}];

export function DjSets() {
  return (
    <section className="py-32 px-6 relative bg-dark-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
              LATEST <span className="text-neon-pink">MIXES</span>
            </h2>
          </div>
          <button className="font-sans font-bold text-neon-pink hover:text-white transition-colors tracking-widest uppercase">
            VIEW ALL ON SOUNDCLOUD →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sets.map((set, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: idx * 0.1
            }}
            className="group relative bg-dark border-2 border-dark-border hover:border-neon-pink transition-all duration-300 rounded-xl overflow-hidden flex flex-col sm:flex-row">
            
              <div className="relative w-full sm:w-48 h-48 flex-shrink-0">
                <img
                src={set.image}
                alt={set.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              
                <div className="absolute inset-0 bg-neon-pink/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="absolute inset-0 m-auto w-16 h-16 bg-neon-pink/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                  <PlayIcon className="w-8 h-8 text-white ml-1" />
                </button>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-sans text-xs font-bold text-neon-pink tracking-widest uppercase bg-neon-pink/10 px-2 py-1 rounded">
                      {set.genre}
                    </span>
                    <span className="font-mono text-xs text-gray-500">
                      {set.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-neon-pink transition-colors">
                    {set.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-dark-border">
                  <div className="flex items-center gap-2 text-gray-400">
                    <PlayIcon className="w-4 h-4" />
                    <span className="font-mono text-sm">{set.plays}</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="text-gray-500 hover:text-neon-pink transition-colors">
                      <HeartIcon className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-white transition-colors">
                      <Share2Icon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}