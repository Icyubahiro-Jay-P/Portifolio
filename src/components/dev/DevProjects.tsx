import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, FolderGit2Icon } from "lucide-react";
const projects = [
  {
    title: "MY PORTIFOLIO",
    description:
      "My personal portifolio that showcases my skills, projects, and achievements in the fields of both web development and being a dj.",
    tech: ["React", "TypeScript", "TailwindCSS", "Shadcn"],
    links: {
      github: "https://github.com/Icyubahiro-Jay-P/Portifolio",
      live: "https://djprojay.vercel.app",
    },
  },
  {
    title: "BEST DECOR v 3.0",
    description:
      "A high-performance system that allows users to manage their rental products efficiently.",
    tech: ["React JS", "Express JS", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/Icyubahiro-Jay-P/BEST-DECOR-v3",
      live: "#",
    },
  },
  {
    title: "THERABRIDGE",
    description:
      "This is an open source platform to help people with mental problems get the therapy they can not afford through secure channels.",
    tech: ["React JS", "TailwindCSS", "Shadcn", "Magic UI"],
    links: {
      github: "https://github.com/Icyubahiro-Jay-P/therabridge-frontend",
      live: "#",
    },
  },
  {
    title: "NEURO_WRITE",
    description:
      "AI-powered writing assistant that adapts to user's tone and style using fine-tuned LLMs.",
    tech: ["React", "OpenAI API", "Express", "MongoDB"],
    links: {
      github: "#",
      live: "#",
    },
  },
];

export function DevProjects() {
  return (
    <section className="relative px-6 py-24 border-t border-dark-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-wider text-white font-display md:text-5xl">
            <span className="text-neon-cyan">02.</span> DEPLOYMENTS
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-neon-cyan/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
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
                <FolderGit2Icon className="w-10 h-10 text-neon-cyan" />
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    <GithubIcon className="w-6 h-6" />
                  </a>
                  <a
                    href={project.links.live}
                    className="text-gray-400 transition-colors hover:text-neon-cyan"
                  >
                    <ExternalLinkIcon className="w-6 h-6" />
                  </a>
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
                    className="px-3 py-1 font-mono text-xs text-gray-300 border rounded-full bg-white/5 border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
