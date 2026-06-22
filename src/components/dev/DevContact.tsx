import * as m from "motion/react-m";
import { useState } from "react";
import { toast } from "sonner";
import {
  MailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
  LoaderIcon,
} from "lucide-react";

const DevContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/icyubahiro1980@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative px-6 py-24 pb-40 border-t border-dark-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-wider text-white font-display md:text-5xl">
            <span className="text-neon-cyan">05.</span> ESTABLISH_CONNECTION
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-neon-cyan/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                    href: "https://www.github.com/icyubahiro-Jay-P",
                  },
                  {
                    icon: LinkedinIcon,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/djprojay",
                  },
                  {
                    icon: InstagramIcon,
                    label: "Instagram",
                    href: "https://www.instagram.com/__j.a.y.p__",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 border bg-dark-surface border-dark-border"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-neon-cyan to-transparent"></div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 font-mono text-xs text-neon-cyan">
                  NAME_
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 font-sans text-white transition-colors border bg-dark border-dark-border focus:border-neon-cyan focus:outline-none"
                  placeholder="Full names"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-mono text-xs text-neon-cyan">
                  EMAIL_
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 font-sans text-white transition-colors border bg-dark border-dark-border focus:border-neon-cyan focus:outline-none"
                  placeholder="email@domain.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-mono text-xs text-neon-cyan">
                  MESSAGE_
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 font-sans text-white transition-colors border resize-none bg-dark border-dark-border focus:border-neon-cyan focus:outline-none"
                  placeholder="Enter your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full gap-3 py-4 font-mono font-bold tracking-widest transition-all duration-300 border bg-neon-cyan/10 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    TRANSMITTING...
                    <LoaderIcon className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    TRANSMIT
                    <SendIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
}
export default DevContact;