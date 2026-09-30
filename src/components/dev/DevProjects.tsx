import * as m from "motion/react-m";
import {
  ExternalLinkIcon,
  GithubIcon,
  FolderGit2Icon,
  LockIcon,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  visibility: "public" | "private";
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "MYDOCK LINUX",
    description:
      "A macOS-style dock, Finder bar, Launchpad, Stage Manager and genie minimize for GNOME Shell 46-48 on X11 and Wayland.",
    tech: ["GNOME Shell", "JavaScript", "Python", "Shell"],
    visibility: "public",
    github: "https://github.com/Icyubahiro-Jay-P/MyDock-Linux",
  },
  {
    title: "MY PORTFOLIO",
    description:
      "My personal portfolio that showcases my skills, projects, and achievements in the fields of both web development and being a dj.",
    tech: ["React", "TypeScript", "TailwindCSS", "Shadcn"],
    visibility: "public",
    github: "https://github.com/Icyubahiro-Jay-P/Portifolio",
    live: "https://djprojay.vercel.app",
  },
  {
    title: "SOCIETE NIANDAKORO MINING COMPANY",
    description:
      "A French-language storefront for certified Guinean gold ingots from 1g to 1kg, with certificate verification and WhatsApp ordering.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    visibility: "private",
    live: "https://societe-niandakoro-mining-company.com",
  },
  {
    title: "AIDO GROUP COMPANY LIMITED",
    description:
      "An Inventory Management System that monitors product sales and tracks profits and losses with real-time data.",
    tech: ["React", "Express", "MongoDB", "TailwindCSS"],
    visibility: "private",
    live: "https://aido-group-company-ltd.vercel.app",
  },
  {
    title: "SAINT VINCENT PALLOTTI MASAKA",
    description:
      "The official website of a Catholic school in Kigali: programs from Day Care to TVET, Cambridge and National curricula, admissions, gallery and news.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    visibility: "private",
    live: "https://stvincentpallottimasaka.vercel.app",
  },
  {
    title: "THERABRIDGE",
    description:
      "A platform that helps people with mental health challenges get the therapy they cannot afford through secure channels.",
    tech: ["React JS", "TailwindCSS", "Shadcn", "Magic UI"],
    visibility: "private",
    live: "https://therabridge.vercel.app",
  },
];

const DevProjects = () => {
  return (
    <section
      id="deployments"
      className="relative px-6 py-24 border-t border-dark-border/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-wider text-white font-display md:text-5xl">
            <span className="text-neon-cyan">02.</span> DEPLOYMENTS
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-neon-cyan/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <m.div
              key={idx}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: idx * 0.1,
              }}
              className="relative p-8 transition-all duration-300 border group bg-dark-surface border-dark-border hover:neon-border-cyan"
            >
              <div className="absolute top-0 left-0 w-full h-1 transition-transform duration-300 origin-left scale-x-0 bg-neon-cyan group-hover:scale-x-100"></div>

              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <FolderGit2Icon className="w-10 h-10 text-neon-cyan" />
                  <span className="font-mono text-xs text-gray-600 tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  {project.visibility === "public" ? (
                    <span className="px-3 py-1 font-mono text-xs border rounded-full text-neon-cyan border-neon-cyan/40 bg-neon-cyan/5">
                      OPEN SOURCE
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs text-gray-400 border rounded-full bg-white/5 border-white/10">
                      <LockIcon className="w-3 h-3" />
                      PRIVATE
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      <GithubIcon className="w-6 h-6" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live site`}
                      className="text-gray-400 transition-colors hover:text-neon-cyan"
                    >
                      <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white transition-colors font-display group-hover:text-neon-cyan">
                {project.title}
              </h3>

              <p className="mb-8 font-sans text-gray-400 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 font-mono text-xs text-gray-300 border rounded-full bg-white/5 border-white/10 transition-colors duration-200 group-hover:border-neon-cyan/40 group-hover:text-neon-cyan/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default DevProjects;