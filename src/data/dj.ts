// ============================================================
// DJ REALM — SINGLE SOURCE OF TRUTH
// Edit this file to update sets, gigs, stats and socials.
// ------------------------------------------------------------
// AUDIO WIRING:
// To enable INLINE playback, replace each set's `audio` URL with
// a directly-hosted audio file (.mp3 / .m4a / .ogg) — e.g. a
// CDN / Cloudinary / Google Drive / Dropbox direct link, or your
// S3/Backblaze bucket. A SoundCloud *page* link will NOT play
// inline; it only works as a `link` out to the profile.
// ============================================================

export type DjSet = {
  id: string;
  number: string;
  title: string;
  genre: string;
  duration: string; // mm:ss for the player + metadata
  durationSeconds?: number; // for accurate scrubbing
  plays: string;
  tag: string; // short descriptor shown in the player
  image: string;
  audio?: string; // direct audio URL, or undefined -> "sample"/outbound
  link: string; // outbound (SoundCloud / Spotify / etc.)
  year: string;
};

export type DjGig = {
  venue: string;
  city: string;
  detail: string;
  status: "past" | "upcoming";
  year: string;
};

export const sets: DjSet[] = [
  {
    id: "midnight-protocol",
    number: "001",
    title: "Midnight Protocol",
    genre: "Afro House / Peak Time",
    duration: "1:02:45",
    durationSeconds: 3765,
    plays: "12.4K",
    tag: "DARK & DRIVING",
    image: "Mix 1.png",
    // TODO: replace with hosted audio URL to enable inline playback
    audio: undefined,
    link: "https://soundcloud.com/djprojay",
    year: "2024",
  },
  {
    id: "late-night-service",
    number: "002",
    title: "Late Night Service",
    genre: "Amapiano / 3-Step",
    duration: "1:48:20",
    durationSeconds: 6500,
    plays: "9.8K",
    tag: "AFRO & SWING",
    image: "Mix 2.png",
    audio: undefined,
    link: "https://soundcloud.com/djprojay",
    year: "2024",
  },
  {
    id: "neon-dreams",
    number: "003",
    title: "Neon Dreams",
    genre: "Afrobeats / R&B",
    duration: "0:58:20",
    durationSeconds: 3500,
    plays: "15.2K",
    tag: "WARM & MELLOW",
    image: "Mix 3.png",
    audio: undefined,
    link: "https://soundcloud.com/djprojay",
    year: "2025",
  },
  {
    id: "system-override",
    number: "004",
    title: "System Override",
    genre: "Afro Tech / Club",
    duration: "1:30:00",
    durationSeconds: 5400,
    plays: "22.1K",
    tag: "FULL VOLUME",
    image: "Mix 4.png",
    audio: undefined,
    link: "https://soundcloud.com/djprojay",
    year: "2025",
  },
];

export const gigs: DjGig[] = [
  {
    venue: "Bamboo Kigali",
    city: "Kigali",
    detail: "Afro House / late-night residency",
    status: "upcoming",
    year: "2025",
  },
  {
    venue: "K-Club",
    city: "Kigali",
    detail: "Amapiano warehouse night",
    status: "upcoming",
    year: "2025",
  },
  {
    venue: "The Zone",
    city: "Kigali",
    detail: "Open-air afrobeats session",
    status: "past",
    year: "2024",
  },
  {
    venue: "Rush 2",
    city: "Kigali",
    detail: "3-step after-hours set",
    status: "past",
    year: "2024",
  },
];

export const djStats = [
  { label: "Sets played", value: "150+" },
  { label: "Cities", value: "12" },
  { label: "Hours mixed", value: "2K+" },
  { label: "Originals", value: "8" },
];

export const genres = [
  "Afrobeat",
  "Amapiano",
  "Dancehall",
  "Afro House",
  "Kompa",
  "3-Step",
  "R&B",
  "Hip Hop",
];

export const equipment = [
  { name: "CDJ-3000s", tag: "Players" },
  { name: "DJM-900NXS2", tag: "Mixer" },
  { name: "Serato DJ Pro", tag: "Software" },
  { name: "FL Studio", tag: "Production" },
];

export const marqueeItems = [
  "AFROBEAT",
  "AMAPIANO",
  "DANCEHALL",
  "AFRO HOUSE",
  "KOMPA",
  "3-STEP",
  "R&B",
  "HIP HOP",
];

export const djSocials = [
  {
    label: "Email",
    value: "icyubahiro1980@gmail.com",
    href: "mailto:icyubahiro1980@gmail.com",
  },
  {
    label: "Instagram",
    value: "@dj_pro_jay",
    href: "https://www.instagram.com/dj_pro_jay/",
  },
  {
    label: "YouTube",
    value: "@djprojay",
    href: "https://youtube.com/@djprojay/",
  },
  {
    label: "SoundCloud",
    value: "djprojay",
    href: "https://soundcloud.com/djprojay",
  },
];

export const djFaqs = [
  {
    q: "How do I book you for an event?",
    a: "Fill out the booking form below with your event details, date, and venue. I'll get back to you within 48 hours to discuss availability and terms.",
  },
  {
    q: "Do you play private events?",
    a: "Yes, I'm available for select private events provided the musical direction aligns with my style. Reach out with your event brief and we can discuss further.",
  },
  {
    q: "What is your technical rider?",
    a: "I can work with most standard club setups. A full technical rider is provided upon confirmed booking. CDJ-3000s and a DJM-900NXS2 are preferred.",
  },
  {
    q: "Do you travel internationally?",
    a: "Yes — international bookings are available. Travel, accommodation, and visa costs are to be covered by the promoter or event organiser.",
  },
  {
    q: "Do you offer remix or production services?",
    a: "Yes. I take on selective remix and original production work. Timelines and fees vary by project — send me your brief and I'll respond with availability.",
  },
];
