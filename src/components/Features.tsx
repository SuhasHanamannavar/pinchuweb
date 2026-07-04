"use client";

import { motion } from "framer-motion";
import {
  Brain, FileSearch, MessageSquare, Shield, Mic, Eye, BarChart3, Cpu,
} from "lucide-react";

const features = [
  { icon: FileSearch, title: "Smart File Scanner", description: "Reads .txt, .md, .pdf, .docx, .py, .js and 30+ formats. Incremental scanning with hash-based cache.", color: "#ab8ff1" },
  { icon: Brain, title: "Knowledge Graph", description: "Visualizes how your topics, projects, and interests connect. Custom DataPoint models for personal memory.", color: "#8960f0" },
  { icon: MessageSquare, title: "Chat with Memory", description: "Ask anything — 'What was I working on last week?' Hybrid graph+vector retrieval for context-rich answers.", color: "#8e6ce4" },
  { icon: Eye, title: "Desktop Character", description: "Pinchu — your animated companion that reacts to your activity. Always-on-top overlay with voice and personality.", color: "#ab8ff1" },
  { icon: Mic, title: "Voice Interaction", description: "Pikachu mode + push-to-talk voice input. Edge-TTS for speech, faster-whisper for recognition.", color: "#8960f0" },
  { icon: Shield, title: "Privacy-First", description: "All data stays on your machine. Zero cloud uploads. Kuzu graph + LanceDB vectors + FastEmbed.", color: "#8e6ce4" },
  { icon: BarChart3, title: "Activity Detection", description: "Knows when you're coding, gaming, watching, or working. 12 activity types from foreground window analysis.", color: "#ab8ff1" },
  { icon: Cpu, title: "Cognee Lifecycle", description: "Full remember → recall → improve → forget cycle. Session bridging persists chats to permanent memory.", color: "#8960f0" },
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
      {/* Ambient glow */}
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
            Everything your memory<br />needs
          </h2>
          <p className="text-sm max-w-lg leading-relaxed" style={{ color: "#8b8e9c" }}>
            A complete AI memory system that scans, understands, and recalls everything on your machine.
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
                {/* Hover glow accent — aurora radial */}
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
                <h3 className="text-sm font-semibold mb-2 relative" style={{ color: "#dad7de" }}>{feature.title}</h3>
                <p className="text-xs leading-relaxed relative" style={{ color: "#8b8e9c" }}>{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
