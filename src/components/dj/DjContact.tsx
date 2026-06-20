import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import {
  InstagramIcon,
  MailIcon,
  SendIcon,
  YoutubeIcon,
  LoaderIcon,
} from "lucide-react";

import Whatsapp from "../../assets/icons/Whatsapp";

const socials = [
  {
    icon: MailIcon,
    label: "Email",
    value: "icyubahiro1980@gmail.com",
    href: "mailto:icyubahiro1980@gmail.com",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@dj_pro_jay",
    href: "https://www.instagram.com/dj_pro_jay/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks",
  },
  {
    icon: YoutubeIcon,
    label: "YouTube",
    value: "@djprojay",
    href: "https://youtube.com/@djprojay/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks",
  },
  {
    icon: Whatsapp,
    label: "WhatsApp",
    value: "+250 789 124 35",
    href: "https://wa.me/25078912435/?utm_source=google-business-profile&utm_medium=social&utm_campaign=profile-clicks",
  },
];

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
        setFormData({ name: "", email: "", eventType: "Club Booking", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="dj-contact" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-6 mb-6">
          <span className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">
            06 — Contact
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
              Let's <span className="text-neon-pink">Connect</span>
            </h2>
            <p className="font-sans text-gray-400 text-base leading-relaxed mb-12 max-w-sm">
              For bookings, remix requests, or general inquiries — fill out the
              form or reach out directly via any of the channels below.
            </p>

            <div className="space-y-1">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-4 border-b border-white/6 group hover:border-neon-pink/40 transition-colors duration-200"
                >
                  <s.icon className="w-4 h-4 text-white/20 group-hover:text-neon-pink flex-shrink-0 transition-colors" />
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs text-white/20 tracking-widest uppercase mb-0.5">
                      {s.label}
                    </div>
                    <div className="font-sans text-sm text-white/60 group-hover:text-white transition-colors truncate">
                      {s.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Top accent bar */}
            <div className="w-8 h-px bg-neon-pink mb-8" />

            <form className="space-y-7" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div>
                  <label className="block font-mono text-xs text-white/30 tracking-[0.2em] uppercase mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/10 focus:border-neon-pink outline-none py-3 font-sans text-white text-sm placeholder:text-white/20 transition-colors duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-white/30 tracking-[0.2em] uppercase mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/10 focus:border-neon-pink outline-none py-3 font-sans text-white text-sm placeholder:text-white/20 transition-colors duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-white/30 tracking-[0.2em] uppercase mb-3">
                  Inquiry Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full bg-dark border-b border-white/10 focus:border-neon-pink outline-none py-3 font-sans text-white text-sm appearance-none transition-colors duration-200 cursor-pointer"
                >
                  <option>Club Booking</option>
                  <option>Festival Booking</option>
                  <option>Private Event</option>
                  <option>Remix Request</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-white/30 tracking-[0.2em] uppercase mb-3">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 focus:border-neon-pink outline-none py-3 font-sans text-white text-sm placeholder:text-white/20 resize-none transition-colors duration-200"
                  placeholder="Tell me about your event or project..."
                  required
                />
              </div>

              <button
                id="dj-contact-submit"
                type="submit"
                disabled={loading}
                className="group flex items-center gap-3 px-8 py-4 bg-neon-pink text-white font-display font-bold tracking-widest uppercase text-sm transition-all duration-300 hover:bg-white hover:text-neon-pink disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    Sending
                    <LoaderIcon className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <SendIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
