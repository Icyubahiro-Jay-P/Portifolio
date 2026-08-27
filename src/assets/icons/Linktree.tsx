import { forwardRef, type SVGProps } from "react";

export type LinktreeProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

/**
 * Linktree brand icon.
 *
 * Behaves like a lucide-react icon: accepts `size`, `className`, `color`
 * (via `currentColor`), and spreads any additional SVG props onto the
 * underlying <svg>. Fill-based glyph, inherits `currentColor`.
 */
const Linktree = forwardRef<SVGSVGElement, LinktreeProps>(
  ({ size = 24, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
      data-lucide="linktree"
      {...props}
    >
      <path
        d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z"
        fill="currentColor"
      />
    </svg>
  ),
);

Linktree.displayName = "Linktree";

export default Linktree;
