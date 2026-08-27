import * as m from "motion/react-m";
import { useState } from "react";
import { toast } from "sonner";
import {
  InstagramIcon,
  MailIcon,
  SendIcon,
  YoutubeIcon,
  LoaderIcon,
  ArrowUpRightIcon,
} from "lucide-react";

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
    href: "https://www.instagram.com/dj_pro_jay/",
  },
  {
    icon: YoutubeIcon,
    label: "YouTube",
    value: "@djprojay",
    href: "https://youtube.com/@djprojay/",
  },
];

const inputBase =
  "w-full py-3 font-sans text-sm text-dj-paper transition-colors duration-200 bg-transparent border-b border-dj-line focus:border-dj-heat outline-none placeholder:text-dj-muted/40";

const DjContact = () => {
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
        toast.success("Message sent! I'll get back to you within 48 hours.");
        setFormData({
          name: "",
          email: "",
          eventType: "Club Booking",
          message: "",
        });
      } else {
        toast.error("Send failed. Please check the details and try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="dj-contact" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        {/* label */}
        <div className="flex items-center gap-4 mb-5">
          <span className="font-mono text-[11px] tracking-[0.4em] text-dj-heat-soft uppercase">
            Book a slot
          </span>
          <div className="flex-1 h-px dj-hairline" />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: info */}
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-5 font-dj text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tighter uppercase text-dj-paper">
              Let's <span className="dj-heat-text">connect</span>
            </h2>
            <p className="max-w-sm mb-12 font-sans text-base leading-relaxed text-dj-muted">
              For bookings, remix requests, or general inquiries — send the
              form, or reach me directly through any channel below.
            </p>

            <div className="space-y-1">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 transition-colors duration-200 border-b border-dj-line hover:border-dj-heat/40"
                >
                  <s.icon className="w-5 h-5 shrink-0 text-dj-muted/50 transition-colors group-hover:text-dj-heat" />
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[11px] text-dj-muted/50 tracking-widest uppercase mb-0.5">
                      {s.label}
                    </div>
                    <div className="font-sans text-sm truncate text-dj-paper/60 transition-colors group-hover:text-dj-paper">
                      {s.value}
                    </div>
                  </div>
                  <ArrowUpRightIcon className="w-4 h-4 text-dj-muted/30 transition-all group-hover:text-dj-heat group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </m.div>

          {/* Right: form */}
          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl border border-dj-line bg-dj-base-2/60 p-6 md:p-9 backdrop-blur-sm">
              <form className="space-y-7" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label
                      htmlFor="dj-name"
                      className="block font-mono text-xs text-dj-muted/60 tracking-[0.2em] uppercase mb-3"
                    >
                      Name
                    </label>
                    <input
                      id="dj-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputBase}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dj-email"
                      className="block font-mono text-xs text-dj-muted/60 tracking-[0.2em] uppercase mb-3"
                    >
                      Email
                    </label>
                    <input
                      id="dj-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputBase}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="dj-type"
                    className="block font-mono text-xs text-dj-muted/60 tracking-[0.2em] uppercase mb-3"
                  >
                    Inquiry type
                  </label>
                  <select
                    id="dj-type"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={`${inputBase} appearance-none cursor-pointer bg-dj-base-2`}
                  >
                    <option>Club Booking</option>
                    <option>Festival Booking</option>
                    <option>Private Event</option>
                    <option>Remix Request</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="dj-message"
                    className="block font-mono text-xs text-dj-muted/60 tracking-[0.2em] uppercase mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="dj-message"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${inputBase} resize-none`}
                    placeholder="Tell me about your event or project..."
                    required
                  />
                </div>

                <button
                  id="dj-contact-submit"
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-3 px-8 py-4 w-full text-sm font-bold tracking-widest text-dj-base uppercase rounded-full bg-dj-heat font-dj transition-all duration-200 hover:bg-dj-heat-soft active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      Sending
                      <LoaderIcon className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send message
                      <SendIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default DjContact;
