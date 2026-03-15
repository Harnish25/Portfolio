"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({ href, children, variant = "primary" }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.2 });

  const baseClass =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
      : "border border-white/20 bg-white/[0.06] text-white/85 backdrop-blur-xl hover:border-cyan-400/35 hover:bg-white/[0.1]";

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;
        x.set(offsetX * 0.18);
        y.set(offsetY * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex"
    >
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)] sm:px-6 sm:py-3 ${baseClass}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
