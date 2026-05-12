import { motion } from "framer-motion";
import {
  MailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
} from "lucide-react";
export function DevContact() {
  return (
    <section className="relative px-6 py-24 pb-40 border-t border-dark-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-wider text-white font-display md:text-5xl">
            <span className="text-neon-cyan">05.</span> ESTABLISH_CONNECTION
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="mb-12 font-sans text-lg leading-relaxed text-gray-400">
              Currently open for new opportunities. Whether you have a question,
              a project proposal, or just want to say hi, my inbox is always
              open. I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:icyubahiro1980@gmail.com"
                className="flex items-center gap-6 p-4 transition-colors border group border-dark-border hover:border-neon-cyan bg-dark-surface"
              >
                <div className="p-4 transition-colors border bg-dark border-dark-border group-hover:border-neon-cyan">
                  <MailIcon className="w-6 h-6 text-gray-400 transition-colors group-hover:text-neon-cyan" />
                </div>
                <div>
                  <div className="mb-1 font-mono text-xs text-gray-500">
                    EMAIL
                  </div>
                  <div className="font-sans text-white transition-colors group-hover:text-neon-cyan">
                    icyubahiro1980@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex gap-4">
                {[
                  {
                    icon: GithubIcon,
                    label: "GitHub",
                    href: "https://www.github.com/icyubahiro-Jay-P"
                  },
                  {
                    icon: LinkedinIcon,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/djprojay"
                  },
                  {
                    icon: InstagramIcon,
                    label: "Instagram",
                    href: "https://www.instagram.com/__j.a.y.p__"
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex flex-col items-center justify-center flex-1 p-6 transition-colors border group border-dark-border hover:border-neon-cyan bg-dark-surface"
                  >
                    <social.icon className="w-8 h-8 mb-3 text-gray-400 transition-colors group-hover:text-neon-cyan" />
                    <span className="font-mono text-xs text-gray-500 transition-colors group-hover:text-white">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative p-8 border bg-dark-surface border-dark-border"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-transparent"></div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-2 font-mono text-xs text-neon-cyan">
                  NAME_
                </label>
                <input
                  type="text"
                  className="w-full p-4 font-sans text-white transition-colors border bg-dark border-dark-border focus:border-neon-cyan focus:outline-none"
                  placeholder="Full names"
                />
              </div>

              <div>
                <label className="block mb-2 font-mono text-xs text-neon-cyan">
                  EMAIL_
                </label>
                <input
                  type="email"
                  className="w-full p-4 font-sans text-white transition-colors border bg-dark border-dark-border focus:border-neon-cyan focus:outline-none"
                  placeholder="email@domain.com"
                />
              </div>

              <div>
                <label className="block mb-2 font-mono text-xs text-neon-cyan">
                  MESSAGE_
                </label>
                <textarea
                  rows={5}
                  className="w-full p-4 font-sans text-white transition-colors border resize-none bg-dark border-dark-border focus:border-neon-cyan focus:outline-none"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <button className="flex items-center justify-center w-full gap-3 py-4 font-mono font-bold tracking-widest transition-all duration-300 border bg-neon-cyan/10 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark group">
                TRANSMIT
                <SendIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
