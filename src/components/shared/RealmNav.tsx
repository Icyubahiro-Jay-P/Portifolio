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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
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
//               ? 'bg-neon-pink/20 text-neon-pink neon-box-pink'
//               : 'text-gray-400 hover:text-neon-pink hover:bg-neon-pink/10'
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

const RealmNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDev = location.pathname === "/dev";
  const isDj = location.pathname === "/dj";
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed z-50 flex items-center justify-center w-full px-2 overflow-x-auto bottom-6 scrollbar-none"
    >
      <TooltipProvider>
        <Dock
          direction="middle"
          className="rounded-full transform-gpu border-dark-border"
        >
          <DockIcon
            onClick={() => navigate("/")}
            className="text-gray-400 rounded-full hover:bg-white/10 hover:text-white"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <HomeIcon className="size-6" />
              </TooltipTrigger>
              <TooltipContent className="h-10 w-fit text-center flex justify-center items-center text-md rounded-lg -translate-y-2 bg-[#0a0a0a] border border-dark-border">
                <p>Portal</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator
            orientation="vertical"
            className="h-full mr-2 bg-dark-border"
          />
          <DockIcon
            onClick={() => navigate("/dev")}
            className={`${
              isDev
                ? "bg-neon-cyan/20 text-neon-cyan neon-box-cyan"
                : "text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10"
            }`}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Code2Icon className="size-6" />
              </TooltipTrigger>
              <TooltipContent className="h-10 w-fit text-center flex justify-center items-center text-md rounded-lg -translate-y-2 bg-[#0a0a0a] border border-dark-border">
                <p>Dev Matrix</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon
            onClick={() => navigate("/dj")}
            className={`${
              isDj
                ? "bg-dj-ember/20 text-dj-ember dj-ember-box"
                : "text-gray-400 hover:text-dj-ember hover:bg-dj-ember/10"
            }`}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Disc3Icon className="size-6" />
              </TooltipTrigger>
              <TooltipContent className="h-10 w-fit text-center flex justify-center items-center text-md rounded-lg -translate-y-2 bg-[#0a0a0a] border border-dj-ember/40">
                <p>DJ Den</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator
            orientation="vertical"
            className="h-full ml-2 bg-dark-border"
          />
          <DockIcon className="text-gray-400 rounded-full hover:bg-white/10 hover:text-white">
            <a
              href="https://github.com/Icyubahiro-Jay-P"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Github className="size-6" />
                </TooltipTrigger>
                <TooltipContent className="h-10 w-fit text-center flex justify-center items-center text-md rounded-lg -translate-y-2 bg-[#0a0a0a] border border-dark-border">
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
            </a>
          </DockIcon>
          <DockIcon className="text-gray-400 rounded-full hover:bg-white/10 hover:text-white">
            <a
              href="https://instagram.com/dj_pro_jay/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <InstagramIcon className="size-6" />
                </TooltipTrigger>
                <TooltipContent className="h-10 w-fit text-center flex justify-center items-center text-md rounded-lg -translate-y-2 bg-[#0a0a0a] border border-dark-border">
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </a>
          </DockIcon>
          {/* <DockIcon className="text-gray-400 rounded-full hover:bg-white/10 hover:text-white">
            <a
              href="https://www.linkedin.com/in/dj-pro-jay-4956293ba/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Linkedin className="size-6" />
                </TooltipTrigger>
                <TooltipContent className="h-10 w-fit text-center flex justify-center items-center text-md rounded-lg -translate-y-2 bg-[#0a0a0a] border border-dark-border">
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </a>
          </DockIcon> */}
          <DockIcon className="text-gray-400 rounded-full hover:bg-white/10 hover:text-white">
            <a
              href="https://wa.me/250789124135/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="scale-50">
                    <Whatsapp />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="h-10 w-fit text-center flex justify-center items-center text-md rounded-lg -translate-y-2 bg-[#0a0a0a] border border-dark-border">
                  <p>Whatsapp</p>
                </TooltipContent>
              </Tooltip>
            </a>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </m.div>
  );
};
export default RealmNav;
