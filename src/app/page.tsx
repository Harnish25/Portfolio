"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Menu, X, Zap, Layers, TrendingUp, Rocket } from "lucide-react";
import { Suspense, lazy, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MagneticButton } from "@/components/MagneticButton";
import { InfiniteTicker } from "@/components/InfiniteTicker";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollMorphCapabilities } from "@/components/ScrollMorphCapabilities";
import { Logo } from "@/components/Logo";
import { BouncingBalls } from "@/components/ui/BouncingBalls";

// Lazy load TubesBackground to prevent blocking
const TubesBackground = lazy(() => import("@/components/ui/neon-flow").then(mod => ({ default: mod.TubesBackground })));
import {
  profile,
  navItems,
  metrics,
  featuredProjects,
  capabilities,
  processSteps,
  techStack,
  about,
} from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const processIcons = [Zap, Layers, TrendingUp, Rocket];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div id="main-content" className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* ── Navigation ─────────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[rgba(5,8,26,0.78)] backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Logo size="md" className="sm:h-12 sm:w-12 h-10 w-10" />

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ color: "#00d9ff" }}
                className="text-sm text-white/55 transition-colors duration-200 hover:text-cyan-300"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden sm:flex">
            <MagneticButton href="#contact" variant="secondary">
              Get in touch
            </MagneticButton>
          </div>

          <motion.button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-white/[0.05] text-cyan-300 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="border-t border-white/[0.06] bg-[rgba(5,8,26,0.92)] px-4 py-4 backdrop-blur-2xl lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/75 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {item.label}
                  </motion.a>
                ))}

                <div className="pt-2 sm:hidden" onClick={closeMobileMenu}>
                  <MagneticButton href="#contact" variant="secondary">
                    Get in touch
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 w-full h-full bg-black" />}>
          <TubesBackground
            className="absolute inset-0 w-full h-full"
            enableClickInteraction={true}
            initialTubeColors={["#00d9ff", "#a855f7", "#06b6d4"]}
            initialLightColors={["#00d9ff", "#7c3aed", "#ec4899", "#06b6d4"]}
            lightIntensity={220}
          />
        </Suspense>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/30 to-black/60 pointer-events-none" />

        <div className="relative z-20 flex min-h-screen items-center py-28 sm:py-24">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center"
            >
              <div className="flex flex-col justify-center gap-8">
                <motion.div variants={itemVariants} className="space-y-4">
                  <motion.p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300 drop-shadow-[0_0_12px_rgba(0,217,255,0.8)]">
                    Creative Developer
                  </motion.p>
                  <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {profile.name}
                  </h1>
                  <p className="text-lg text-white/80 sm:text-xl">{profile.role}</p>
                </motion.div>
                <motion.p variants={itemVariants} className="max-w-lg text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                  {profile.intro}
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
                  <MagneticButton href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton href="#contact" variant="secondary">Contact Me</MagneticButton>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2 sm:gap-4">
                  {[
                    { icon: Github, href: "https://github.com/Harnish25" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/harnishchothani5555/" },
                    { icon: Mail, href: "mailto:harnishpatel580@gmail.com" },
                  ].map(({ icon: Icon, href }) => (
                    <motion.a
                      key={href} href={href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -4 }}
                      className="rounded-full border border-white/20 bg-white/5 p-3 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4 sm:gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index} variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
                  >
                    <p className="text-3xl font-bold text-cyan-300 drop-shadow-[0_0_16px_rgba(0,217,255,0.6)] sm:text-4xl">{metric.value}</p>
                    <p className="mt-2 text-sm text-white/55">{metric.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 hidden flex-col items-center gap-2 text-white/35 pointer-events-none sm:flex"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            className="h-6 w-px bg-gradient-to-b from-white/35 to-transparent"
            animate={{ scaleY: [1, 0.4, 1] }} transition={{ duration: 1.6, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ── Tech Stack Ticker ──────────────────────────────────── */}
      <AnimatedSection className="relative border-y border-cyan-400/[0.12] py-8 sm:py-10 bg-[rgba(0,217,255,0.02)]">
        {/* Subtle horizontal glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <InfiniteTicker items={techStack} />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
      </AnimatedSection>

      {/* ── Ambient glow orbs for lower sections ───────────────── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute top-[110vh] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
        <div className="absolute top-[160vh] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.05] blur-[100px]" />
        <div className="absolute top-[240vh] left-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.04] blur-[90px]" />
        <div className="absolute top-[330vh] right-[10%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.04] blur-[100px]" />
      </div>

      {/* ── Featured Projects ──────────────────────────────────── */}
      <AnimatedSection id="projects" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
        {/* Bouncing Balls Background */}
        <BouncingBalls
          numBalls={120}
          colors={["rgba(0,217,255,0.6)", "rgba(168,85,247,0.5)", "rgba(236,72,153,0.4)", "rgba(34,211,238,0.5)"]}
          minRadius={0.5}
          maxRadius={2.5}
          speed={0.3}
          interactionRadius={120}
          interactionScale={5}
          interactive={true}
          className="pointer-events-auto z-0"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none z-[1]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 overflow-hidden">
          <motion.div
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Section label */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 max-w-[48px] bg-gradient-to-r from-cyan-400/60 to-transparent" />
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 drop-shadow-[0_0_10px_rgba(0,217,255,0.8)]">Featured Work</p>
              </div>
              <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Selected</span>{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,217,255,0.6)]"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(217,70,239,0.5))' }}>
                  Projects
                </span>
              </h2>
              <p className="max-w-xl text-white/50 text-base sm:text-lg">
                A curated selection of experiences I've shipped — from AI products to luxury brands.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── Process ────────────────────────────────────────────── */}
      <AnimatedSection id="process" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
        {/* Bouncing Balls Background */}
        <BouncingBalls
          numBalls={100}
          colors={["rgba(168,85,247,0.5)", "rgba(0,217,255,0.5)", "rgba(236,72,153,0.4)", "rgba(139,92,246,0.5)"]}
          minRadius={0.5}
          maxRadius={2.5}
          speed={0.25}
          interactionRadius={100}
          interactionScale={4}
          interactive={true}
          className="pointer-events-auto z-0"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none z-[1]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 overflow-hidden">
          <motion.div
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 max-w-[48px] bg-gradient-to-r from-purple-400/60 to-transparent" />
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">How I Work</p>
              </div>
              <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">My</span>{" "}
                <span className="bg-gradient-to-r from-purple-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(0,217,255,0.5))' }}>
                  Process
                </span>
              </h2>
            </motion.div>

            <motion.div variants={containerVariants} className="grid gap-6 md:grid-cols-2">
              {processSteps.map((step, index) => {
                const Icon = processIcons[index];
                return (
                  <motion.div key={index} variants={itemVariants} whileHover={{ y: -6, borderColor: "rgba(0,217,255,0.3)" }} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 h-full">
                    {/* Corner glow on hover */}
                    <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex flex-col gap-5">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
                          <Icon className="h-5 w-5 text-cyan-300" />
                        </div>
                        <span className="text-3xl font-black text-white/[0.06] select-none sm:text-4xl">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">{step.title}</h3>
                        <p className="text-white/50 leading-7 text-sm">{step.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── Capabilities ───────────────────────────────────────── */}
      <ScrollMorphCapabilities capabilities={capabilities} />

      {/* ── About ───────────────────────────────────────────── */}
      <AnimatedSection id="about" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
        {/* Bouncing Balls Background */}
        <BouncingBalls
          numBalls={100}
          colors={["rgba(0,217,255,0.5)", "rgba(56,189,248,0.5)", "rgba(34,211,238,0.4)", "rgba(6,182,212,0.5)"]}
          minRadius={0.5}
          maxRadius={2.5}
          speed={0.25}
          interactionRadius={100}
          interactionScale={4}
          interactive={true}
          className="pointer-events-auto z-0"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none z-[1]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 overflow-hidden">
          <motion.div
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 max-w-[48px] bg-gradient-to-r from-cyan-400/60 to-transparent" />
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 drop-shadow-[0_0_10px_rgba(0,217,255,0.8)]">Get to Know Me</p>
              </div>
              <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">About</span>{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,217,255,0.6)]"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(56,189,248,0.5))' }}>
                  Me
                </span>
              </h2>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              {/* About Content */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  {about.headline}
                </h3>
                <div className="space-y-4">
                  {about.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-white/60 leading-7 text-base sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Highlights Grid */}
              <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4 sm:gap-6">
                {about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -6, borderColor: "rgba(0,217,255,0.3)" }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 sm:p-6 backdrop-blur-xl transition-all duration-500"
                  >
                    {/* Corner glow on hover */}
                    <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    <div className="relative z-10">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-2">
                        {highlight.label}
                      </p>
                      <p className="text-xl font-bold text-cyan-300 drop-shadow-[0_0_12px_rgba(0,217,255,0.5)] sm:text-2xl">
                        {highlight.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <AnimatedSection id="contact" className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
        {/* Bouncing Balls Background */}
        <BouncingBalls
          numBalls={120}
          colors={["rgba(0,217,255,0.5)", "rgba(168,85,247,0.5)", "rgba(236,72,153,0.4)", "rgba(139,92,246,0.5)"]}
          minRadius={0.5}
          maxRadius={2.5}
          speed={0.3}
          interactionRadius={120}
          interactionScale={5}
          interactive={true}
          className="pointer-events-auto z-0"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none z-[1]" />
        {/* Big ambient glow behind CTA */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-[2]">
          <div className="h-[500px] w-[700px] rounded-full bg-cyan-500/[0.06] blur-[100px]" />
          <div className="absolute h-[300px] w-[500px] rounded-full bg-purple-600/[0.06] blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center overflow-hidden">
          <motion.div
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">Let's Work Together</p>
              <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Ready to create{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
                  something amazing?
                </span>
              </h2>
              <p className="mx-auto max-w-lg text-base text-white/50 sm:text-lg">
                Let's collaborate on your next project. I'm available for freelance work and exciting opportunities.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <MagneticButton href="mailto:harnishpatel580@gmail.com">
                Send me an email <ExternalLink className="ml-2 h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="https://wa.me/918200275025?text=Hello%20Harnish" variant="whatsapp">Message on WhatsApp</MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <motion.footer
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="relative border-t border-white/[0.06] py-12"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <span className="text-white/20">·</span>
              <p className="text-sm text-white/35">Creative Frontend Developer</p>
            </div>
            <p className="text-sm text-white/25">© 2025 Harnish Patel · All rights reserved</p>
            <div className="flex gap-6">
              {[
                { label: "GitHub", href: "https://github.com/Harnish25" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/harnishchothani5555/" },
              ].map(({ label, href }) => (
                <motion.a
                  key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ color: "#00d9ff" }}
                  className="text-sm text-white/35 transition-colors duration-200"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
