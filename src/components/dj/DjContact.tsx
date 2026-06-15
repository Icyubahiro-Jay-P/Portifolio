import { motion } from "framer-motion";
import { useState } from "react";
import {
  InstagramIcon,
  MailIcon,
  SendIcon,
  YoutubeIcon,
  PhoneIcon,
  LoaderIcon,
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "Club Booking",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <section className="relative px-6 py-32 pb-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
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
              reach out directly.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:icyubahiro1980@gmail.com"
                className="flex min-w-110 w-full items-center gap-6 p-6 transition-all border-2 group rounded-2xl bg-dark-surface border-dark-border hover:border-neon-pink"
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

              {/* <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4"> */}
              <div className="flex gap-4">
                {[
                  {
                    icon: InstagramIcon,
                    label: "Instagram",
                    href: "https://www.instagram.com/dj_pro_jay/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks",
                  },
                  {
                    icon: Whatsapp,
                    label: "Whatsapp",
                    href: "https://wa.me/25078912435/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks",
                  },
                  {
                    icon: YoutubeIcon,
                    label: "Youtube",
                    href: "https://youtube.com/@djprojay/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks",
                  },
                  // {
                  //   icon: SoundCloud,
                  //   label: "SoundCloud",
                  //   href: "https://soundcloud.com/djprojay",
                  // },
                  // {
                  //   icon: Discord,
                  //   label: "Discord",
                  //   href: "https://discord.com/users/yourid",
                  // },
                  // {
                  //   icon: Twitch,
                  //   label: "Twitch",
                  //   href: "https://twitch.tv/djprojay",
                  // },
                  // {
                  //   icon: Spotify,
                  //   label: "Spotify",
                  //   href: "https://open.spotify.com/artist/YOUR_SPOTIFY_ID_HERE",
                  // },
                  // {
                  //   icon: Tiktok,
                  //   label: "Tiktok",
                  //   href: "https://tiktok.com/@djprojay",
                  // },
                  // {
                  //   icon: Snapchat,
                  //   label: "Snapchat",
                  //   href: "https://snapchat.com/add/djprojay",
                  // },
                  // { icon: PhoneIcon, label: "Call", href: "tel:0789124135" },
                  // {
                  //   icon: Linktree,
                  //   label: "Linktree",
                  //   href: "https://linktr.ee/djprojay",
                  // },
                  // {
                  //   icon: Mixcloud,
                  //   label: "Mixcloud",
                  //   href: "https://mixcloud.com/djprojay",
                  // },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-8 transition-all border-2 group rounded-2xl bg-dark-surface border-dark-border hover:border-neon-pink w-full"
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-10 overflow-hidden border-2 bg-dark-surface rounded-3xl border-dark-border"
          >
            <div className="absolute w-48 h-48 rounded-full -top-24 -right-24 bg-neon-pink/20 blur-3xl"></div>

            <form
              className="relative z-10 space-y-8"
              action="https://formsubmit.co/icyubahiro1980@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label className="block mb-3 font-sans text-xs font-bold tracking-widest text-gray-400 uppercase">
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 font-sans text-white transition-colors border-b-2 bg-dark border-dark-border focus:border-neon-pink focus:outline-none"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-3 font-sans text-xs font-bold tracking-widest text-gray-400 uppercase">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 font-sans text-white transition-colors border-b-2 bg-dark border-dark-border focus:border-neon-pink focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-3 font-sans text-xs font-bold tracking-widest text-gray-400 uppercase">
                  EVENT TYPE / INQUIRY
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full p-3 font-sans text-white transition-colors border-b-2 appearance-none bg-dark border-dark-border focus:border-neon-pink focus:outline-none"
                >
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
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 font-sans text-white transition-colors border-b-2 resize-none bg-dark border-dark-border focus:border-neon-pink focus:outline-none"
                  placeholder="Tell me about your event..."
                  required
                />
              </div>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full gap-3 py-5 mt-8 text-xl font-bold tracking-widest text-white transition-all duration-300 rounded-full bg-neon-pink font-display hover:bg-white hover:text-neon-pink group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    SENDING... <LoaderIcon className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    SEND REQUEST{" "}
                    <SendIcon className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </>
                )}
              </button>
              <p className="text-xs text-gray-400 text-center">
                You'll be redirected after submission
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
