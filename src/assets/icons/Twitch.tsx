import { forwardRef, type SVGProps } from "react";

export type TwitchProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

/**
 * Twitch brand icon.
 *
 * Behaves like a lucide-react icon: accepts `size`, `className`, `color`
 * (via `currentColor`), and spreads any additional SVG props onto the
 * underlying <svg>. Fill-based glyph, inherits `currentColor`.
 */
const Twitch = forwardRef<SVGSVGElement, TwitchProps>(
  ({ size = 24, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      data-lucide="twitch"
      {...props}
    >
      <path d="M31.16,12.16v8.19h2.47V12.16Zm-7.75,0v8.19H26V12.16ZM14.11,4.5,7.23,11.34l0,25.12h8.3l0,7,7.06-7H28.2L40.77,24V4.5Zm1.42,2.89H38v15.2L32.55,28H26.94l-5.12,5.13V28H15.53Z" />
    </svg>
  ),
);

Twitch.displayName = "Twitch";

export default Twitch;
