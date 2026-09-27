import { useId } from "react";

// Imigongo  Rwandan relief art. Stacked zigzags and concentric diamonds,
// used as the DJ realm's structural motif (bands, dividers, backdrops).
type Props = {
  variant?: "zigzag" | "diamond";
  className?: string;
};

const Imigongo = ({ variant = "zigzag", className = "" }: Props) => {
  const id = "imi" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const zig = variant === "zigzag";

  return (
    <svg aria-hidden="true" className={className} width="100%" height="100%">
      <defs>
        <pattern
          id={id}
          width={zig ? 28 : 56}
          height={zig ? 28 : 56}
          patternUnits="userSpaceOnUse"
        >
          {zig ? (
            <g fill="none" stroke="currentColor" strokeWidth="3.5">
              <path d="M-14 0 L0 14 L14 0 L28 14 L42 0" />
              <path d="M-14 14 L0 28 L14 14 L28 28 L42 14" />
              <path d="M-14 28 L0 42 L14 28 L28 42 L42 28" />
            </g>
          ) : (
            <g fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M28 3 L53 28 L28 53 L3 28Z" />
              <path d="M28 14 L42 28 L28 42 L14 28Z" />
              <path d="M28 23 L33 28 L28 33 L23 28Z" fill="currentColor" />
            </g>
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

export default Imigongo;
