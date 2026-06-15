import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Code2Icon,
  TerminalIcon,
  Disc3Icon,
  HeadphonesIcon } from
'lucide-react';
export function Portal() {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen p-6 overflow-hidden font-sans bg-dark">
      <div className="scanlines"></div>

      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
            'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform:
            'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
            transformOrigin: 'top center'
          }}>
        </div>
      </div>

      <div className="z-10 mb-16 text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="p-2 mb-4 text-4xl font-black tracking-widest text-white font-display md:text-6xl">
          
          IRAKOZE ICYUBAHIRO JEAN PIERRE
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.2
          }}
          className="font-mono text-sm md:text-base tracking-[0.3em] text-gray-400">
          
          QUIET BY DAY · QUITE LOUD AT NIGHT
        </motion.p>
      </div>

      <div className="z-10 flex flex-col w-full max-w-5xl gap-8 px-6 md:flex-row md:gap-16">
        {/* DEV PORTAL */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.4
          }}
          whileHover={{
            scale: 1.05
          }}
          onClick={() => navigate('/dev')}
          className="flex-1 cursor-pointer group">
          
          <div className="h-70 md:h-95 border-2 border-dark-border group-hover:neon-border-cyan bg-dark-surface/80 backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500">
            {/* Hover Effects */}
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-neon-cyan/5 group-hover:opacity-100"></div>

            <div className="relative z-10 flex flex-col items-center">
              <Code2Icon className="w-16 h-16 mb-6 text-gray-600 transition-colors duration-500 group-hover:text-neon-cyan" />
              <h2 className="text-3xl font-bold tracking-wider text-gray-400 transition-all duration-500 font-display group-hover:text-white group-hover:neon-text-cyan">
                DEV MATRIX
              </h2>
              <div className="flex gap-4 mt-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <TerminalIcon className="w-6 h-6 text-neon-cyan" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* DJ PORTAL */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.6
          }}
          whileHover={{
            scale: 1.05
          }}
          onClick={() => navigate('/dj')}
          className="flex-1 cursor-pointer group">
          
          <div className="h-[280px] md:h-[380px] border-2 border-dark-border group-hover:neon-border-pink bg-dark-surface/80 backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500">
            {/* Hover Effects */}
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-neon-pink/5 group-hover:opacity-100"></div>

            <div className="relative z-10 flex flex-col items-center">
              <Disc3Icon className="w-16 h-16 mb-6 text-gray-600 transition-colors duration-500 group-hover:text-neon-pink" />
              <h2 className="text-3xl font-bold tracking-wider text-gray-400 transition-all duration-500 font-display group-hover:text-white group-hover:neon-text-pink">
                DJ DEN
              </h2>
              <div className="flex gap-4 mt-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <HeadphonesIcon className="w-6 h-6 text-neon-pink" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>);

}