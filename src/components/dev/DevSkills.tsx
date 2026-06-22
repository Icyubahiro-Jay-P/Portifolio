import * as m from "motion/react-m";
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

const DevSkills = () => {
  return (
    <section className="relative px-6 py-24 border-t border-dark-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-wider text-white font-display md:text-5xl">
            <span className="text-neon-cyan">03.</span> TECH_STACK
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-neon-cyan/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, idx) => (
            <m.div
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
              <h3 className="pb-4 mb-6 font-mono text-lg tracking-widest border-b text-neon-cyan border-dark-border">
                // {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 cursor-default group"
                  >
                    <div className="w-1.5 h-1.5 bg-dark-border group-hover:bg-neon-cyan transition-colors duration-300"></div>
                    <span className="font-sans text-gray-400 transition-colors duration-300 group-hover:text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default DevSkills;