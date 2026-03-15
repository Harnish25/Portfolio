"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  year: string;
  type: string;
  summary: string;
  stack: string[];
  accent: string;
};

export function ProjectCard({ title, year, type, summary, stack, accent }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-px backdrop-blur-2xl"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Gradient border glow (hover) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-60 rounded-2xl`}
      />

      {/* Card inner */}
      <div className="relative z-10 m-px rounded-[calc(1rem-1px)] bg-black p-5 sm:p-6 h-full">
        {/* Accent gradient wash */}
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-25 rounded-[calc(1rem-1px)] transition-opacity duration-500 group-hover:opacity-50`} />

        <div className="relative z-10 flex h-full flex-col gap-5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400/80 sm:text-xs sm:tracking-[0.35em]">{type}</p>
              <h3 className="mt-2 text-lg font-semibold text-white leading-snug sm:text-xl">{title}</h3>
            </div>
            <span className="flex-shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/50">
              {year}
            </span>
          </div>

          <p className="text-sm leading-6 text-white/55 flex-1 sm:leading-7">{summary}</p>

          {/* Footer: stack tags + link icon */}
          <div className="flex items-end justify-between gap-3 pt-2 border-t border-white/[0.06]">
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] text-white/50 transition-colors duration-200 group-hover:border-cyan-400/20 group-hover:text-white/70 sm:px-3 sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
            <ExternalLink className="h-4 w-4 flex-shrink-0 text-white/20 transition-all duration-300 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
