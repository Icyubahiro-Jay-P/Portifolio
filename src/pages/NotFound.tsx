import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "PORTAL" },
  { to: "/dj", label: "DJ REALM" },
  { to: "/dev", label: "DEV REALM" },
];

const NotFound = () => (
  <main className="flex flex-col items-center justify-center w-full min-h-screen gap-6 p-8 text-center bg-dark">
    <h1 className="text-6xl font-black tracking-widest text-white font-display md:text-8xl">404</h1>
    <p className="font-mono text-xs tracking-[0.3em] text-gray-400 sm:text-sm">
      THIS TRACK IS NOT IN THE CRATE
    </p>
    <nav className="flex flex-wrap justify-center gap-4 mt-4">
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="px-5 py-2 font-mono text-xs tracking-widest text-white transition-colors border border-dark-border hover:border-neon-cyan hover:text-neon-cyan focus-visible:outline-2 focus-visible:outline-neon-cyan"
        >
          {label}
        </Link>
      ))}
    </nav>
  </main>
);

export default NotFound;
