import { forwardRef, type SVGProps } from "react";

export type DiscordProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

/**
 * Discord brand icon.
 *
 * Behaves like a lucide-react icon: accepts `size`, `className`, `color`
 * (via `currentColor`), and spreads any additional SVG props onto the
 * underlying <svg>. Stroke-based glyph, inherits `currentColor`.
 */
const Discord = forwardRef<SVGSVGElement, DiscordProps>(
  ({ size = 24, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
      data-lucide="discord"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          d="M17.59,34.1733c-.89,1.3069-1.8944,2.6152-2.91,3.8267C7.3,37.79,4.5,33,4.5,33A44.83,44.83,0,0,1,9.31,13.48,16.47,16.47,0,0,1,18.69,10l1,2.31A32.6875,32.6875,0,0,1,24,12a32.9643,32.9643,0,0,1,4.33.3l1-2.31a16.47,16.47,0,0,1,9.38,3.51A44.8292,44.8292,0,0,1,43.5,33s-2.8,4.79-10.18,5a47.4193,47.4193,0,0,1-2.86-3.81m6.46-2.9c-3.84,1.9454-7.5555,3.89-12.92,3.89s-9.08-1.9446-12.92-3.89"
        />
        <circle
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          cx="17.847"
          cy="26.23"
          r="3.35"
        />
        <circle
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          cx="30.153"
          cy="26.23"
          r="3.35"
        />
      </g>
    </svg>
  ),
);

Discord.displayName = "Discord";

export default Discord;
