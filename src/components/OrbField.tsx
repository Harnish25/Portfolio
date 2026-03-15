"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function OrbField() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.4 });

  const spotlightColor = "rgba(34,211,238,0.14)";
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${smoothX}px ${smoothY}px, ${spotlightColor}, transparent 60%)`;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - bounds.left);
        mouseY.set(event.clientY - bounds.top);
      }}
    >
      <motion.div className="absolute inset-0" style={{ background: spotlight }} />
      
      {/* Floating gradient orbs */}
      <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-fuchsia-500/14 blur-3xl animate-float" />
      <div className="absolute right-[-8%] top-[18%] h-80 w-80 rounded-full bg-cyan-400/16 blur-3xl animate-float-delayed" />
      <div className="absolute bottom-[-10%] left-[24%] h-96 w-96 rounded-full bg-violet-500/14 blur-3xl animate-float-slow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_38%)]" />
    </motion.div>
  );
}
