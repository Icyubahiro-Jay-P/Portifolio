import * as m from "motion/react-m";

type Props = {
  index: string;
  title: string;
  accent?: boolean;
  right?: React.ReactNode;
};

export const DjSectionHeader = ({ index, title, right }: Props) => (
  <div className="flex flex-col items-start justify-between gap-8 mb-14 md:flex-row md:items-end">
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm tabular-nums text-dj-ember">
        {index}
      </span>
      <h2 className="font-dj text-3xl font-black tracking-tight uppercase text-dj-bone md:text-5xl">
        {title}
      </h2>
    </div>
    {right}
  </div>
);

export const DjReveal = ({
  children,
  delay = 0,
  y = 24,
  x = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}) => (
  <m.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: "-12%" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </m.div>
);
