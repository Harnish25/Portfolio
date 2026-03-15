"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Ambient background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-[-10%] left-[-10%] h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-3xl animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-fuchsia-500/[0.08] blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent leading-none">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-lg text-white/60 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 px-8 py-4 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-semibold text-white/85 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/35 hover:bg-white/[0.1]"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center gap-2"
          aria-hidden
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="h-2 w-2 rounded-full bg-cyan-400"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
