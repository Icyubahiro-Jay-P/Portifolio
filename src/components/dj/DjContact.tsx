import { motion } from "framer-motion";
import {
  InstagramIcon,
  MailIcon,
  SendIcon,
  YoutubeIcon,
  PhoneIcon
} from "lucide-react";
import Spotify from "../../assets/icons/Spotify";
import Tiktok from "../../assets/icons/Tiktok";
import Twitch from "../../assets/icons/Twitch";
import SoundCloud from "../../assets/icons/SoundCloud";
import Discord from "../../assets/icons/Discord";
import Whatsapp from "../../assets/icons/Whatsapp";
import Snapchat from "../../assets/icons/Snapchat";
import Linktree from "../../assets/icons/Linktree";
import Mixcloud from "../../assets/icons/Mixcloud";
export function DjContact() {
  // Custom Spotify SVG with hover support

  return (
    <section className="relative px-6 py-32 pb-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Left Side - Text & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-5xl font-black tracking-tighter text-white uppercase font-display md:text-7xl">
              LET'S <span className="text-neon-pink">CONNECT</span>
            </h2>

            <p className="mb-12 font-sans text-xl leading-relaxed text-gray-400">
              For bookings, remixes, or general inquiries, fill out the form or
              reach out directly via email.
            </p>

            <div className="flex flex-col gap-6">
              {/* Email Box */}
              <a
                href="mailto:icyubahiro1980@gmail.com"
                className="flex items-center gap-6 p-6 transition-all border-2 group rounded-2xl bg-dark-surface border-dark-border hover:border-neon-pink"
              >
                <div className="flex items-center justify-center w-16 h-16 transition-colors rounded-full bg-dark group-hover:bg-neon-pink/20">
                  <MailIcon className="w-8 h-8 text-gray-400 transition-colors group-hover:text-neon-pink" />
                </div>
                <div>
                  <div className="mb-1 font-sans text-sm font-bold tracking-widest text-gray-500 uppercase">
                    BOOKINGS
                  </div>
                  <div className="text-xl text-white transition-colors font-display group-hover:text-neon-pink">
                    icyubahiro1980@gmail.com
                  </div>
                </div>
              </a>

              {/* Social Icons */}
              {/* Social Icons */}
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {[
                  {
                    icon: InstagramIcon,
                    label: "Instagram",
                    href: "https://instagram.com/dj_pro_jay",
                  },
                  {
                    icon: SoundCloud,
                    label: "SoundCloud",
                    href: "https://soundcloud.com/djprojay/",
                  },
                  {
                    icon: Discord,
                    label: "Discord",
                    href: "https://discord.com/djprojay/",
                  },
                  {
                    icon: Twitch,
                    label: "Twitch",
                    href: "https://twitch.com/djprojay/",
                  },
                  {
                    icon: Spotify,
                    label: "Spotify",
                    href: "https://open.spotify.com/artist/YOUR_SPOTIFY_ID_HERE",
                  },
                  {
                    icon: YoutubeIcon,
                    label: "Youtube",
                    href: "https://youtube.com/@djprojay",
                  },
                  {
                    icon: Tiktok,
                    label: "Tiktok",
                    href: "https://tiktok.com/djprojay",
                  },
                  {
                    icon: Whatsapp,
                    label: "Whatsapp",
                    href: "https://wa.me/25078912435",
                  },
                  {
                    icon: Snapchat,
                    label: "Snapchat",
                    href: "https://snapchat.com/add/djprojay",
                  },
                  {
                    icon: PhoneIcon,
                    label: "Call",
                    href: "tel:0789124135",
                  },
                  {
                    icon: Linktree,
                    label: "Linktree",
                    href: "https://linktr.ee/djprojay",
                  },
                  {
                    icon: Mixcloud,
                    label: "Mixcloud",
                    href: "https://mixcloud/djprojay",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-8 transition-all border-2 group rounded-2xl bg-dark-surface border-dark-border hover:border-neon-pink"
                  >
                    <social.icon className="w-10 h-10 mb-4 text-gray-400 transition-all duration-300 group-hover:text-neon-pink group-hover:scale-110" />
                    <span className="font-sans text-xs font-bold tracking-widest text-center text-gray-500 uppercase transition-colors group-hover:text-white">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-10 overflow-hidden border-2 bg-dark-surface rounded-3xl border-dark-border"
          >
            <div className="absolute w-48 h-48 rounded-full -top-24 -right-24 bg-neon-pink/20 blur-3xl"></div>

            <form
              className="relative z-10 space-y-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label className="block mb-3 font-sans text-xs font-bold tracking-widest text-gray-400 uppercase">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 font-sans text-white transition-colors border-b-2 bg-dark border-dark-border focus:border-neon-pink focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block mb-3 font-sans text-xs font-bold tracking-widest text-gray-400 uppercase">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 font-sans text-white transition-colors border-b-2 bg-dark border-dark-border focus:border-neon-pink focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-3 font-sans text-xs font-bold tracking-widest text-gray-400 uppercase">
                  EVENT TYPE / INQUIRY
                </label>
                <select className="w-full p-3 font-sans text-white transition-colors border-b-2 appearance-none bg-dark border-dark-border focus:border-neon-pink focus:outline-none">
                  <option>Club Booking</option>
                  <option>Festival Booking</option>
                  <option>Private Event</option>
                  <option>Remix Request</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-3 font-sans text-xs font-bold tracking-widest text-gray-400 uppercase">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 font-sans text-white transition-colors border-b-2 resize-none bg-dark border-dark-border focus:border-neon-pink focus:outline-none"
                  placeholder="Tell me about your event..."
                ></textarea>
              </div>

              <button className="flex items-center justify-center w-full gap-3 py-5 mt-8 text-xl font-bold tracking-widest text-white transition-all duration-300 rounded-full bg-neon-pink font-display hover:bg-white hover:text-neon-pink group">
                SEND REQUEST
                <SendIcon className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
