// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { HomeIcon, Code2Icon, Disc3Icon } from 'lucide-react';
// export function RealmNav() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isDev = location.pathname === '/dev';
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 50
//       }}
//       animate={{
//         opacity: 1,
//         y: 0
//       }}
//       transition={{
//         delay: 1
//       }}
//       className="fixed z-50 flex items-center gap-2 p-2 -translate-x-1/2 border rounded-full bottom-6 left-1/2 bg-dark-surface/90 backdrop-blur-md border-dark-border">
      
//       <button
//         onClick={() => navigate('/')}
//         className="p-3 text-gray-400 transition-colors rounded-full hover:bg-white/10 hover:text-white"
//         title="Portal">
        
//         <HomeIcon className="w-5 h-5" />
//       </button>

//       <div className="w-px h-6 mx-2 bg-dark-border"></div>

//       <button
//         onClick={() => navigate('/dev')}
//         className={`p-3 rounded-full transition-all ${isDev ? 'bg-neon-cyan/20 text-neon-cyan neon-box-cyan' : 'text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10'}`}
//         title="Dev Matrix">
        
//         <Code2Icon className="w-5 h-5" />
//       </button>

//       <button
//         onClick={() => navigate('/dj')}
//         className={`p-3 rounded-full transition-all ${!isDev ? 'bg-neon-pink/20 text-neon-pink neon-box-pink' : 'text-gray-400 hover:text-neon-pink hover:bg-neon-pink/10'}`}
//         title="DJ Den">
        
//         <Disc3Icon className="w-5 h-5" />
//       </button>
//     </motion.div>);

// }




import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, Code2Icon, Disc3Icon } from 'lucide-react';

export function RealmNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDev = location.pathname === '/dev';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 
                 flex items-center gap-2 p-2 
                 bg-dark-surface/90 backdrop-blur-md 
                 border border-dark-border rounded-full
                 shadow-2xl" // added subtle shadow for that premium pop
    >
      {/* Home Button */}
      <button
        onClick={() => navigate('/')}
        className="p-3 text-gray-400 transition-colors rounded-full hover:bg-white/10 hover:text-white"
        title="Portal"
      >
        <HomeIcon className="w-5 h-5" />
      </button>

      <div className="w-px h-6 mx-1 bg-dark-border" /> {/* tighter divider */}

      {/* Dev Button */}
      <button
        onClick={() => navigate('/dev')}
        className={`p-3 rounded-full transition-all ${
          isDev 
            ? 'bg-neon-cyan/20 text-neon-cyan neon-box-cyan' 
            : 'text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10'
        }`}
        title="Dev Matrix"
      >
        <Code2Icon className="w-5 h-5" />
      </button>

      {/* DJ Button */}
      <button
        onClick={() => navigate('/dj')}
        className={`p-3 rounded-full transition-all ${
          !isDev 
            ? 'bg-neon-pink/20 text-neon-pink neon-box-pink' 
            : 'text-gray-400 hover:text-neon-pink hover:bg-neon-pink/10'
        }`}
        title="DJ Den"
      >
        <Disc3Icon className="w-5 h-5" />
      </button>
    </motion.div>
  );
}