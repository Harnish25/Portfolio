"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Large ambient orbs */}
        <div className="absolute top-[-20%] left-[-15%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.12] blur-[100px] animate-float" />
        <div className="absolute bottom-[-20%] right-[-15%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/[0.12] blur-[100px] animate-float-delayed" />
        <div className="absolute top-[30%] right-[20%] h-[300px] w-[300px] rounded-full bg-violet-500/[0.08] blur-[80px] animate-float-slow" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Logo in corner */}
      {isMounted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-6 left-6 z-20"
        >
          <Logo size="md" />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Glitch-style 404 Number */}
        {isMounted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 relative"
          >
            {/* Shadow layers for depth */}
            <h1 
              className="absolute inset-0 text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-cyan-500/20 blur-sm leading-none select-none"
              aria-hidden
            >
              404
            </h1>
            <h1 
              className="absolute inset-0 text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-fuchsia-500/10 blur-md translate-x-2 leading-none select-none"
              aria-hidden
            >
              404
            </h1>
            
            {/* Main 404 text */}
            <h1 className="relative text-[10rem] md:text-[14rem] lg:text-[18rem] font-black leading-none">
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(0,217,255,0.5)]">
                404
              </span>
            </h1>
          </motion.div>
        ) : (
          <div className="mb-6 relative">
            <h1 className="relative text-[10rem] md:text-[14rem] lg:text-[18rem] font-black leading-none">
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </div>
        )}

        {/* Decorative line */}
        {isMounted ? (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        ) : (
          <div className="w-32 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        )}

        {/* Message */}
        {isMounted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4 mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 drop-shadow-[0_0_10px_rgba(0,217,255,0.8)]">
                Lost in Space
              </p>
              <Sparkles className="h-5 w-5 text-cyan-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Page</span>{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,217,255,0.6)]">
                Not Found
              </span>
            </h2>
            
            <p className="text-lg text-white/50 max-w-md mx-auto leading-relaxed">
              Oops! The page you&apos;re looking for seems to have drifted into the void. 
              Let&apos;s get you back on track.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
                Lost in Space
              </p>
              <Sparkles className="h-5 w-5 text-cyan-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Page Not Found
            </h2>
            
            <p className="text-lg text-white/50 max-w-md mx-auto leading-relaxed">
              Oops! The page you&apos;re looking for seems to have drifted into the void. 
              Let&apos;s get you back on track.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        {isMounted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 px-8 py-4 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] overflow-hidden"
            >
              <Home className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-semibold text-white/85 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-white/[0.1] hover:shadow-[0_0_30px_rgba(0,217,255,0.15)]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Go Back
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 px-8 py-4 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <Home className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-semibold text-white/85 backdrop-blur-xl transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        )}

        {/* Animated dots */}
        {isMounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center gap-3"
            aria-hidden
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
