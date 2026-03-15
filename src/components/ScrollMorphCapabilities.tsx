"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "@/components/ui/Globe";
import { Code, Zap, Palette, Rocket, Gauge, Sparkles } from "lucide-react";

// Icon mapping for each capability
const capabilityIcons = [Palette, Zap, Sparkles, Code, Gauge, Rocket];

// Neon accent colours per capability
const accentColors = [
  "from-cyan-300 via-sky-300 to-blue-400",
  "from-fuchsia-300 via-purple-300 to-violet-400",
  "from-emerald-300 via-teal-300 to-cyan-400",
  "from-pink-300 via-rose-300 to-fuchsia-400",
  "from-amber-300 via-orange-300 to-yellow-400",
  "from-violet-300 via-purple-300 to-fuchsia-400",
];

interface ScrollMorphCapabilitiesProps {
  capabilities?: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ScrollMorphCapabilities({
  capabilities = [
    "Premium portfolio websites",
    "High-conversion landing pages",
    "Motion systems & micro-interactions",
    "Design-to-code implementation",
    "Performance-focused frontend architecture",
    "Responsive product storytelling",
  ],
}: ScrollMorphCapabilitiesProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-black">
      {/* Top divider glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-fuchsia-400/60" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-fuchsia-400 sm:text-xs sm:tracking-[0.4em]">
                Expertise
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-fuchsia-400/60" />
            </div>
            <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              What I{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
                Deliver
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 text-base sm:text-lg">
              Crafting digital experiences that blend creativity, performance, and cutting-edge technology
            </p>
          </motion.div>

          {/* Globe */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow effect behind globe */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-violet-500/20 blur-3xl" />
              <Globe className="relative z-10 max-w-[16rem] sm:max-w-xs md:max-w-sm" />
            </div>
          </motion.div>

          {/* Capabilities Grid */}
          <motion.div
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30"
                >
                  {/* Gradient accent on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accentColors[index]} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                  />

                  {/* Corner glow on hover */}
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </div>

                    {/* Capability Text */}
                    <h3 className="text-base font-semibold text-white leading-snug sm:text-lg">
                      {capability}
                    </h3>

                    {/* Gradient underline */}
                    <div
                      className={`h-1 w-0 rounded-full bg-gradient-to-r ${accentColors[index]} transition-all duration-500 group-hover:w-full`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom divider glow */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
}
