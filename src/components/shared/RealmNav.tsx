import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as m from "motion/react-m";
import {
  HomeIcon,
  Code2Icon,
  Disc3Icon,
  InstagramIcon,
  Github,
  // Linkedin,
} from "lucide-react";
import Whatsapp from "@/assets/icons/Whatsapp";
// This was PLAN A but i never used it, i ended up making a more generic dock component that i can reuse in other places, but i left this here for posterity and to show the evolution of the design

// export function RealmNav() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isDev = location.pathname === '/dev';

//   return (
//     <m.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 1 }}
//       className="fixed z-50 flex items-center justify-center w-full bottom-6 " // added subtle shadow for that premium pop
//     >
//       <div className='flex items-center gap-2 p-2 border rounded-full shadow-2xl bg-dark-surface/90 backdrop-blur-md border-dark-border w-fit'>
//         {/* Home Button */}
//         <button
//           onClick={() => navigate('/')}
//           className="p-3 text-gray-400 transition-colors rounded-full hover:bg-white/10 hover:text-white"
//           title="Portal"
//         >
//           <HomeIcon className="w-5 h-5" />
//         </button>

//         <div className="w-px h-6 mx-1 bg-dark-border" /> {/* tighter divider */}

//         {/* Dev Button */}
//         <button
//           onClick={() => navigate('/dev')}
//           className={`p-3 rounded-full transition-all ${
//             isDev
//               ? 'bg-neon-cyan/20 text-neon-cyan neon-box-cyan'
//               : 'text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10'
//           }`}
//           title="Dev Matrix"
//         >
//           <Code2Icon className="w-5 h-5" />
//         </button>

//         {/* DJ Button */}
//         <button
//           onClick={() => navigate('/dj')}
//           className={`p-3 rounded-full transition-all ${
//             !isDev
//               ? 'bg-neon-clay/20 text-neon-clay neon-box-clay'
//               : 'text-gray-400 hover:text-neon-clay hover:bg-neon-clay/10'
//           }`}
//           title="DJ Den"
//         >
//           <Disc3Icon className="w-5 h-5" />
//         </button>
//       </div>
//     </m.div>
//   );
// }


import { Dock, DockIcon } from "@/components/ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

// CSS-only tooltip; the parent DockIcon carries `group relative`.
const tip =
  "pointer-events-none absolute bottom-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap h-10 w-fit flex items-center justify-center px-3 py-1.5 text-md text-background rounded-lg bg-[#0a0a0a] border opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100";

const RealmNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDev = location.pathname === "/dev";
  const isDj = location.pathname === "/dj";
  const go = (path: string) => ({
    role: "button",
    tabIndex: 0,
    onClick: () => navigate(path),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigate(path);
      }
    },
  });
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed z-50 flex items-center justify-center w-full px-2 overflow-x-auto md:overflow-visible bottom-6 scrollbar-none"
    >
      <Dock
        direction="middle"
        className="rounded-full transform-gpu border-dark-border"
      >
        <DockIcon
          {...go("/")}
          aria-label="Portal"
          className="relative group text-gray-400 rounded-full hover:bg-white/10 hover:text-white"
        >
          <HomeIcon className="size-6" />
          <span role="tooltip" className={`${tip} border-dark-border`}>
            Portal
          </span>
        </DockIcon>
        <div aria-hidden className="w-px h-full mr-2 shrink-0 bg-dark-border" />
        <DockIcon
          {...go("/dev")}
          aria-label="Dev Matrix"
          className={`relative group ${
            isDev
              ? "bg-neon-cyan/20 text-neon-cyan neon-box-cyan"
              : "text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10"
          }`}
        >
          <Code2Icon className="size-6" />
          <span role="tooltip" className={`${tip} border-dark-border`}>
            Dev Matrix
          </span>
        </DockIcon>
        <DockIcon
          {...go("/dj")}
          aria-label="DJ Den"
          className={`relative group ${
            isDj
              ? "bg-dj-clay text-dj-soot"
              : "text-gray-400 hover:text-dj-clay hover:bg-dj-clay/15"
          }`}
        >
          <Disc3Icon className="size-6" />
          <span role="tooltip" className={`${tip} border-dj-clay/40`}>
            DJ Den
          </span>
        </DockIcon>
        <div aria-hidden className="w-px h-full ml-2 shrink-0 bg-dark-border" />
        <DockIcon className="relative group text-gray-400 rounded-full hover:bg-white/10 hover:text-white">
          <a
            href="https://github.com/Icyubahiro-Jay-P"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <Github className="size-6" />
          </a>
          <span role="tooltip" className={`${tip} border-dark-border`}>
            Github
          </span>
        </DockIcon>
        <DockIcon className="relative group text-gray-400 rounded-full hover:bg-white/10 hover:text-white">
          <a
            href="https://instagram.com/dj_pro_jay/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className="size-6" />
          </a>
          <span role="tooltip" className={`${tip} border-dark-border`}>
            Instagram
          </span>
        </DockIcon>
        {/* <DockIcon className="relative group text-gray-400 rounded-full hover:bg-white/10 hover:text-white">
          <a
            href="https://www.linkedin.com/in/dj-pro-jay-4956293ba/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-6" />
          </a>
          <span role="tooltip" className={`${tip} border-dark-border`}>
            LinkedIn
          </span>
        </DockIcon> */}
        <DockIcon className="relative group text-gray-400 rounded-full hover:bg-white/10 hover:text-white">
          <a
            href="https://wa.me/250789124135/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
          >
            <Whatsapp size={24} className="text-gray-400 transition-colors group-hover:text-white" />
          </a>
          <span role="tooltip" className={`${tip} border-dark-border`}>
            Whatsapp
          </span>
        </DockIcon>
      </Dock>
    </m.div>
  );
};
export default RealmNav;
