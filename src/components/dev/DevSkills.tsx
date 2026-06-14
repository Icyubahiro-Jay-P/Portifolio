import { motion } from "framer-motion";
const skillCategories = [
  {
    title: "FRONTEND",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      // "Framer Motion", I used this one for the project sooo i ain't gonna list it here
      "Vue",
    ],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
  },
  {
    title: "DATABASES",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    title: "DEVOPS",
    skills: ["Docker", "AWS", "CI/CD", "Vercel", "Linux"],
  },
];

export function DevSkills() {
  return (
    <section className="py-24 px-6 relative border-t border-dark-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-wider">
            <span className="text-neon-cyan">03.</span> TECH_STACK
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-neon-cyan/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 20,
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
            >
              <h3 className="font-mono text-neon-cyan text-lg mb-6 tracking-widest border-b border-dark-border pb-4">
                // {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 cursor-default"
                  >
                    <div className="w-1.5 h-1.5 bg-dark-border group-hover:bg-neon-cyan transition-colors duration-300"></div>
                    <span className="font-sans text-gray-400 group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
