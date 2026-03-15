type InfiniteTickerProps = {
  items: string[];
};

export function InfiniteTicker({ items }: InfiniteTickerProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="group relative overflow-hidden rounded-full border border-cyan-400/[0.12] bg-white/[0.02] py-3 backdrop-blur-xl">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />

      <div className="flex min-w-max animate-marquee gap-4 px-4 group-hover:[animation-play-state:paused]">
        {loopItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-white/45 transition-colors duration-200 hover:border-cyan-400/30 hover:text-cyan-300/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
