"use client";

import { motion } from "framer-motion";
import {
  ListTodo, Activity, MonitorSpeaker, MessageSquare, Shield, Mic, BarChart3, Cloud,
} from "lucide-react";

const features = [
  { icon: ListTodo, title: "AI Task Management", description: "Natural language task input with automatic classification, priority assignment, and deadline detection. Pinchu organizes your day.", color: "#ab8ff1" },
  { icon: Activity, title: "Activity Monitoring", description: "Tracks what you're doing in real-time — coding, browsing, gaming, or working. 12 activity types from foreground window analysis.", color: "#8960f0" },
  { icon: MonitorSpeaker, title: "Desktop Overlay", description: "Pinchu floats on your screen as an animated companion. Always visible, always aware of your context and progress.", color: "#8e6ce4" },
  { icon: MessageSquare, title: "AI Chat", description: "Ask anything about your tasks, schedule, or what you were doing. Pinchu remembers your conversation history across sessions.", color: "#ab8ff1" },
  { icon: Mic, title: "Voice Interaction", description: "Push-to-talk voice input with speech recognition. Pinchu speaks back with text-to-speech summaries and nudges.", color: "#8960f0" },
  { icon: BarChart3, title: "Daily Summaries", description: "Auto-generated progress reports with productivity scores. See what you accomplished and what needs attention.", color: "#8e6ce4" },
  { icon: Cloud, title: "Cognee Cloud Memory", description: "Cognitive memory layer in the cloud. Pinchu learns your patterns, preferences, and context over time.", color: "#ab8ff1" },
  { icon: Shield, title: "Privacy-First", description: "Your data stays yours. Local JSON storage with optional cloud sync. No telemetry, no tracking, no subscriptions.", color: "#8960f0" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 aurora-section-glow">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(142,108,228,0.04) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-medium mb-4 block" style={{ color: "#8e6ce4", letterSpacing: "0.08em", textTransform: "uppercase" }}>Features</span>
          <h2 className="display-text text-4xl md:text-5xl font-bold mb-5">
            Everything you need<br />to stay on track
          </h2>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "#8b8e9c" }}>
            An AI productivity assistant that manages your tasks, monitors your activity, and keeps you focused — all from your desktop.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "#31313a" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <motion.div
                className="p-6 h-full relative overflow-hidden"
                style={{ background: "#08080a" }}
                whileHover={{
                  background: "#0d0d12",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${feature.color}10 0%, ${feature.color}04 40%, transparent 70%)` }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5 relative"
                  style={{ borderRadius: "3px", background: "#0d0d12", border: "1px solid #17171c" }}
                >
                  <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>
                <h3 className="text-base font-semibold mb-2 relative" style={{ color: "#dad7de" }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed relative" style={{ color: "#8b8e9c" }}>{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
