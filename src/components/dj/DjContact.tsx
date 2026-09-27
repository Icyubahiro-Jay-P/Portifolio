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
  ChevronDownIcon,
} from "lucide-react";
import Imigongo from "./Imigongo";

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
  "w-full py-3 text-base text-dj-bone transition-colors duration-200 bg-transparent border-b-2 border-dj-line focus:border-dj-clay outline-none placeholder:text-dj-ash/60";

const labelBase =
  "block mb-2 text-[11px] font-bold tracking-[0.25em] uppercase text-dj-ash";

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
    <section id="dj-contact" className="relative">
      {/* Clay header band */}
      <div className="relative overflow-hidden bg-dj-clay text-dj-soot">
        <Imigongo
          variant="diamond"
          className="absolute inset-0 text-dj-clay-deep/35"
        />
        <div className="relative px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <span className="inline-block px-3 py-1.5 mb-6 text-xs font-bold tracking-[0.35em] uppercase bg-dj-soot text-dj-bone">
              Bookings open
            </span>
            <h2 className="font-poster text-[clamp(4.5rem,15vw,12rem)] font-black uppercase leading-[0.8]">
              Book a slot
            </h2>
          </div>
        </div>
      </div>

      <div className="px-6 pt-20 pb-40 md:px-12 md:pt-28">
        <div className="grid grid-cols-1 gap-16 mx-auto max-w-7xl lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          {/* Left: info */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-sm mb-12 text-lg leading-relaxed text-dj-bone/80">
              For bookings, remix requests, or general inquiries send the form,
              or reach me directly through any channel below.
            </p>

            <div className="border-t-[3px] border-dj-bone">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 py-5 border-b border-dj-line transition-colors hover:bg-dj-soot-2"
                >
                  <span className="flex items-center justify-center w-11 h-11 shrink-0 border-2 border-dj-line text-dj-bone transition-colors group-hover:bg-dj-clay group-hover:border-dj-clay group-hover:text-dj-soot">
                    <s.icon className="w-5 h-5" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="mb-0.5 text-[11px] font-bold tracking-[0.25em] uppercase text-dj-ash">
                      {s.label}
                    </div>
                    <div className="text-base font-semibold truncate text-dj-bone">
                      {s.value}
                    </div>
                  </div>
                  <ArrowUpRightIcon className="w-5 h-5 mr-2 text-dj-ash transition-all group-hover:text-dj-clay group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </m.div>

          {/* Right: form */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form
              className="p-6 space-y-8 border-2 border-dj-line bg-dj-soot-2 md:p-10"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="dj-name" className={labelBase}>
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
                  <label htmlFor="dj-email" className={labelBase}>
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
                <label htmlFor="dj-type" className={labelBase}>
                  Inquiry type
                </label>
                <div className="relative">
                  <select
                    id="dj-type"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={`${inputBase} appearance-none cursor-pointer [&>option]:bg-dj-soot`}
                  >
                    <option>Club Booking</option>
                    <option>Festival Booking</option>
                    <option>Private Event</option>
                    <option>Remix Request</option>
                    <option>Other</option>
                  </select>
                  <ChevronDownIcon className="absolute right-0 w-4 h-4 -translate-y-1/2 pointer-events-none top-1/2 text-dj-clay" />
                </div>
              </div>

              <div>
                <label htmlFor="dj-message" className={labelBase}>
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
                className="group flex items-center justify-center w-full gap-3 px-8 py-5 text-sm font-extrabold tracking-[0.25em] uppercase bg-dj-clay text-dj-soot transition-colors hover:bg-dj-bone active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
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
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default DjContact;
