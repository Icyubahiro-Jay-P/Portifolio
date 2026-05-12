import React from "react";
import { motion } from "framer-motion";
import { InstagramIcon, MailIcon, MusicIcon, SendIcon, YoutubeIcon} from "lucide-react";
export function DjContact() {
  return (
    <section className="py-32 px-6 relative pb-48">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
            <h2 className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8">
              LET'S <span className="text-neon-pink">CONNECT</span>
            </h2>

            <p className="font-sans text-gray-400 text-xl mb-12 leading-relaxed">
              For bookings, remixes, or general inquiries, fill out the form or
              reach out directly via email.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:icyubahiro1980@gmail.com"
                className="group flex items-center gap-6 p-6 rounded-2xl bg-dark-surface border-2 border-dark-border hover:border-neon-pink transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center group-hover:bg-neon-pink/20 transition-colors">
                  <MailIcon className="w-8 h-8 text-gray-400 group-hover:text-neon-pink transition-colors" />
                </div>
                <div>
                  <div className="font-sans font-bold text-gray-500 tracking-widest uppercase text-sm mb-1">
                    BOOKINGS
                  </div>
                  <div className="font-display text-xl text-white group-hover:text-neon-pink transition-colors">
                    icyubahiro1980@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex gap-6">
                {[
                  {
                    icon: InstagramIcon,
                    label: "Instagram",
                    href: "https://instagram.com/dj_pro_jay",
                  },
                  {
                    icon: MusicIcon,
                    label: "SoundCloud",
                    href: "https://soundcloud.com/djprojay/"
                  },
                  {
                    icon: YoutubeIcon,
                    label: "Youtube",
                    href: "https://youtube.com/@djprojay"
                  }, // Using MusicIcon as placeholder for Spotify/SoundCloud
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex-1 group flex flex-col items-center justify-center p-8 rounded-2xl bg-dark-surface border-2 border-dark-border hover:border-neon-pink transition-all"
                  >
                    <social.icon className="w-10 h-10 text-gray-400 group-hover:text-neon-pink transition-colors mb-4" />
                    <span className="font-sans font-bold text-gray-500 tracking-widest uppercase text-xs group-hover:text-white transition-colors">
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
            className="bg-dark-surface rounded-3xl p-10 border-2 border-dark-border relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-pink/20 blur-3xl rounded-full"></div>

            <form
              className="space-y-8 relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-sans font-bold text-gray-400 tracking-widest uppercase text-xs mb-3">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark border-b-2 border-dark-border focus:border-neon-pink focus:outline-none text-white p-3 font-sans transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block font-sans font-bold text-gray-400 tracking-widest uppercase text-xs mb-3">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full bg-dark border-b-2 border-dark-border focus:border-neon-pink focus:outline-none text-white p-3 font-sans transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans font-bold text-gray-400 tracking-widest uppercase text-xs mb-3">
                  EVENT TYPE / INQUIRY
                </label>
                <select className="w-full bg-dark border-b-2 border-dark-border focus:border-neon-pink focus:outline-none text-white p-3 font-sans transition-colors appearance-none">
                  <option>Club Booking</option>
                  <option>Festival Booking</option>
                  <option>Private Event</option>
                  <option>Remix Request</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block font-sans font-bold text-gray-400 tracking-widest uppercase text-xs mb-3">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-dark border-b-2 border-dark-border focus:border-neon-pink focus:outline-none text-white p-3 font-sans transition-colors resize-none"
                  placeholder="Tell me about your event..."
                ></textarea>
              </div>

              <button className="w-full py-5 bg-neon-pink text-white font-display font-bold text-xl tracking-widest hover:bg-white hover:text-neon-pink transition-all duration-300 rounded-full flex items-center justify-center gap-3 group mt-8">
                SEND REQUEST
                <SendIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
