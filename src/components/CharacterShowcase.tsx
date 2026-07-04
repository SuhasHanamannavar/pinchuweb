"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Mic, MessageSquare, Sparkles, Gamepad2, Volume2, Palette, Zap } from "lucide-react";
import PinchuCharacter from "./PinchuCharacter";

const moods = [
  { mood: "excited" as const, icon: Sparkles, label: "Excited", color: "#ab8ff1", when: "When you code" },
  { mood: "curious" as const, icon: Eye, label: "Curious", color: "#8960f0", when: "Browsing files" },
  { mood: "happy" as const, icon: Gamepad2, label: "Playful", color: "#8e6ce4", when: "Gaming detected" },
  { mood: "excited" as const, icon: Volume2, label: "Chatty", color: "#ab8ff1", when: "Voice active" },
  { mood: "curious" as const, icon: Palette, label: "Creative", color: "#8960f0", when: "Design apps" },
  { mood: "happy" as const, icon: Zap, label: "Focused", color: "#8e6ce4", when: "Deep work mode" },
];

const capabilities = [
  { icon: Eye, title: "Activity Detection", desc: "12 activity types from foreground window analysis. Pinchu knows when you're coding, gaming, watching, or working." },
  { icon: Mic, title: "Voice Interaction", desc: "Pikachu mode with edge-tts. Push-to-talk with Ctrl+Space. faster-whisper for local speech recognition." },
  { icon: MessageSquare, title: "Proactive Memory", desc: "Surfaces relevant context from your knowledge graph. Bridges chat sessions to permanent memory automatically." },
];

const moodCycle = ["excited", "curious", "happy", "sleepy"] as const;

export default function CharacterShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const characterY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const characterScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  const [activeMood, setActiveMood] = useState(0);

  // Auto-cycle moods
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMood((prev) => (prev + 1) % moodCycle.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentMood = moodCycle[activeMood];
  const moodColors: Record<string, string> = {
    excited: "rgba(142, 108, 228, 0.15)",
    curious: "rgba(137, 96, 240, 0.12)",
    happy: "rgba(171, 143, 241, 0.1)",
    sleepy: "rgba(142, 108, 228, 0.08)",
  };
  const moodLabels: Record<string, string> = {
    excited: "Excited — you're coding!",
    curious: "Curious — browsing files",
    happy: "Happy — gaming detected",
    sleepy: "Sleepy — idle mode",
  };

  return (
    <section ref={sectionRef} id="character" className="relative py-32 overflow-hidden aurora-section-glow">
      {/* Ambient aurora glows — per mood */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-[8%] w-72 h-72 rounded-full blur-[120px] animate-float"
          animate={{ background: moodColors[currentMood] }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-56 h-56 rounded-full blur-[100px] animate-float-delayed"
          animate={{ background: moodColors[currentMood] }}
          transition={{ duration: 1 }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[150px]" style={{ background: "rgba(171, 143, 241, 0.03)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-medium mb-4 block" style={{ color: "#8e6ce4", letterSpacing: "0.08em", textTransform: "uppercase" }}>Your AI Companion</span>
          <h2 className="display-text text-4xl md:text-5xl font-bold mb-5">
            Meet <span className="gradient-text">Pinchu</span>
          </h2>
          <p className="text-sm max-w-lg leading-relaxed" style={{ color: "#8b8e9c" }}>
            An always-on-top animated companion that detects your activity, reacts with emotion, and speaks with personality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Character with glow and mood display */}
          <motion.div
            style={{ y: characterY, scale: characterScale, opacity }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer glow halo — changes with mood */}
              <motion.div
                className="absolute -inset-8 pointer-events-none"
                style={{ filter: "blur(40px)" }}
                animate={{
                  background: `radial-gradient(circle, ${moodColors[currentMood]} 0%, transparent 70%)`,
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ background: { duration: 0.5 }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
              />

              <div style={{ border: "1px solid #31313a", borderRadius: "3px", overflow: "hidden" }}>
                <div className="p-8" style={{ background: "#0d0d12" }}>
                  <div className="relative flex flex-col items-center">
                    {/* Character with floating animation */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <PinchuCharacter size={180} mood={currentMood} />
                    </motion.div>

                    {/* Mood indicator — dynamic */}
                    <div className="mt-6 px-5 py-3 text-center w-full" style={{ background: "#08080a", border: "1px solid #17171c", borderRadius: "3px" }}>
                      <div className="text-[10px] mb-1.5" style={{ color: "#62626f", letterSpacing: "0.08em", textTransform: "uppercase" }}>Current Mood</div>
                      <motion.div
                        key={currentMood}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-medium flex items-center justify-center gap-2"
                        style={{ color: "#dad7de" }}
                      >
                        <motion.span
                          className="w-2 h-2 rounded-full"
                          style={{ background: "#22c55e" }}
                          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        {moodLabels[currentMood]}
                      </motion.div>
                    </div>

                    {/* Mood picker row */}
                    <div className="flex gap-2 mt-4">
                      {moodCycle.map((m, i) => (
                        <motion.div
                          key={m}
                          className="flex items-center justify-center cursor-pointer"
                          style={{
                            width: 36, height: 36, background: "#08080a",
                            border: activeMood === i ? "1px solid rgba(142,108,228,0.4)" : "1px solid #17171c",
                            borderRadius: "3px",
                          }}
                          whileHover={{ borderColor: "rgba(142,108,228,0.3)", scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => setActiveMood(i)}
                        >
                          <PinchuCharacter size={24} mood={m} animated={false} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Capabilities + Emotion grid */}
          <div className="space-y-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <motion.div
                  style={{ border: "1px solid #31313a", borderRadius: "3px", background: "#0d0d12" }}
                  className="p-5"
                  whileHover={{ borderColor: "rgba(142,108,228,0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ borderRadius: "3px", background: "#08080a", border: "1px solid #17171c" }}>
                      <cap.icon className="w-4 h-4" style={{ color: "#8e6ce4" }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1" style={{ color: "#dad7de" }}>{cap.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#8b8e9c" }}>{cap.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Emotion Reactions — interactive grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ border: "1px solid #31313a", borderRadius: "3px", background: "#0d0d12" }}
              className="p-5"
            >
              <h4 className="text-[10px] font-medium mb-4" style={{ color: "#62626f", letterSpacing: "0.08em", textTransform: "uppercase" }}>Emotion Reactions</h4>
              <div className="grid grid-cols-3 gap-2">
                {moods.map((e, i) => (
                  <motion.div
                    key={e.label}
                    className="text-center p-2.5 cursor-default"
                    style={{ background: "#08080a", border: "1px solid #17171c", borderRadius: "3px" }}
                    whileHover={{
                      borderColor: `${e.color}33`,
                      background: `rgba(142,108,228,0.03)`,
                      y: -2,
                    }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <e.icon className="w-4 h-4 mx-auto mb-1" style={{ color: e.color }} />
                    </motion.div>
                    <div className="text-[11px] font-medium" style={{ color: "#dad7de" }}>{e.label}</div>
                    <div className="text-[9px]" style={{ color: "#62626f" }}>{e.when}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
