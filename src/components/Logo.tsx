"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className={`${sizes[size]} ${className} relative overflow-hidden rounded-full border-2 border-cyan-400/30 shadow-[0_0_20px_rgba(0,217,255,0.3)] cursor-pointer`}
    >
      <Image
        src="/images/hero-section/Gemini_Generated_Image_qhbiaxqhbiaxqhbi.png"
        alt="HP Logo"
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
}
