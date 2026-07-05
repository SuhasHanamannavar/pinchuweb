"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import PinchuCharacter from "./PinchuCharacter";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const auroraOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const characterY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14">
      <div className="absolute inset-0 grid-pattern" />

      {/* Aurora glow halos */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(142,108,228,0.1) 0%, rgba(137,96,240,0.04) 40%, transparent 70%)", filter: "blur(60px)", opacity: auroraOpacity }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(171,143,241,0.06) 0%, transparent 70%)", filter: "blur(80px)", opacity: auroraOpacity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Character */}
        <motion.div
          initial={{ scale: 0, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: 0.1 }}
          className="mb-8 relative"
          style={{ y: characterY }}
        >
          <motion.div
            className="absolute inset-0 -m-8 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(142,108,228,0.18) 0%, transparent 70%)", filter: "blur(20px)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <PinchuCharacter size={110} mood="excited" />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <h1
            className="display-text font-bold gradient-text"
            style={{ fontSize: "clamp(56px, 15vw, 200px)" }}
          >
            pinchu
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed"
          style={{ color: "#8b8e9c" }}
        >
          A self-improving personal memory agent that learns your
          <br className="hidden md:block" />
          productivity patterns, predicts burnout, and shares
          <br className="hidden md:block" />
          team intelligence — powered by Cognee.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <motion.a
            href="#download"
            className="btn-primary relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />
            <Sparkles className="w-4 h-4" />
            Download free
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <a
            href="https://github.com/SuhasHanamannavar/pinchu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source code
          </a>
        </motion.div>

        {/* Specs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center justify-center gap-5 text-[11px] mb-16"
          style={{ color: "#62626f" }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full" style={{ background: "#8e6ce4" }} />
            AI-powered tasks
          </span>
          <span className="w-px h-3" style={{ background: "#31313a" }} />
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full" style={{ background: "#8960f0" }} />
            Activity tracking
          </span>
          <span className="w-px h-3" style={{ background: "#31313a" }} />
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full" style={{ background: "#ab8ff1" }} />
            Voice + Chat
          </span>
          <span className="w-px h-3" style={{ background: "#31313a" }} />
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full" style={{ background: "#22c55e" }} />
            Windows + macOS
          </span>
        </motion.div>

        {/* Product preview */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl"
        >
          <div className="absolute -inset-3 rounded-lg pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(142,108,228,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="relative" style={{ border: "1px solid #31313a", borderRadius: "3px", overflow: "hidden" }}>
            {/* Titlebar */}
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "#0d0d12", borderBottom: "1px solid #31313a" }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#eab308" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
              <span className="ml-2 text-xs font-mono flex items-center gap-1.5" style={{ color: "#62626f" }}>
                <PinchuCharacter size={12} animated={false} />
                pinchu-desktop
              </span>
            </div>
            {/* Content — Dashboard mockup */}
            <div className="p-5 grid grid-cols-3 gap-4 min-h-[280px]" style={{ background: "#08080a" }}>
              {/* Sidebar */}
              <div className="space-y-2">
                <div className="h-3.5 w-20 rounded-sm" style={{ background: "#17171c" }} />
                {["Dashboard", "Tasks", "Summary", "Chat"].map((item) => (
                  <div key={item} className="h-7 rounded-sm flex items-center px-2" style={{ background: item === "Dashboard" ? "rgba(142,108,228,0.15)" : "#0d0d12", border: "1px solid #17171c" }}>
                    <span className="text-[9px] font-mono" style={{ color: item === "Dashboard" ? "#ab8ff1" : "#62626f" }}>{item}</span>
                  </div>
                ))}
              </div>
              {/* Main content */}
              <div className="col-span-2 space-y-3">
                <div className="h-3.5 w-28 rounded-sm" style={{ background: "#17171c" }} />
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Total", value: "5", color: "#ab8ff1" },
                    { label: "Done", value: "3", color: "#22c55e" },
                    { label: "Pending", value: "2", color: "#eab308" },
                  ].map((stat) => (
                    <div key={stat.label} className="h-16 rounded-sm flex flex-col items-center justify-center" style={{ background: "#0d0d12", border: "1px solid #17171c" }}>
                      <span className="text-[9px]" style={{ color: "#62626f" }}>{stat.label}</span>
                      <span className="text-sm font-bold" style={{ color: stat.color }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {["Finish report", "30 min exercise", "Read 20 min"].map((task, i) => (
                    <motion.div
                      key={task}
                      className="h-7 rounded-sm flex items-center gap-2 px-2"
                      style={{ background: "#0d0d12", border: "1px solid #17171c" }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: i < 3 ? "#22c55e" : "#eab308" }} />
                      <span className="text-[9px]" style={{ color: "#aeaac0" }}>{task}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
