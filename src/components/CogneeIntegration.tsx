"use client";

import { motion } from "framer-motion";
import { Cloud, Brain, Sparkles, Shield, GitBranch, Users, RefreshCw } from "lucide-react";

const operations = [
  { icon: Brain, name: "cognify()", description: "Process tasks and activities into cognitive memory. Pinchu learns your patterns, preferences, and productivity rhythms.", action: "Tasks → Learn → Adapt", color: "#ab8ff1" },
  { icon: Sparkles, name: "recall()", description: "Retrieve context-aware insights from your memory. 'What was I doing yesterday?' 'When am I most productive?'", action: "Query → Context → Answer", color: "#8960f0" },
  { icon: GitBranch, name: "knowledge graph()", description: "Build a visual graph of how your tasks, activities, and context connect. Traverse relationships and discover patterns.", action: "Nodes → Edges → Insights", color: "#8e6ce4" },
  { icon: RefreshCw, name: "improve()", description: "Optimize your memory. Pinchu sharpens patterns, removes noise, and strengthens the connections that matter most.", action: "Raw → Refined → Sharp", color: "#ab8ff1" },
  { icon: Users, name: "share()", description: "Share your memory with teammates. Collaborative context lets your team benefit from Pinchu's learned patterns.", action: "Personal → Shared → Team", color: "#8960f0" },
  { icon: Cloud, name: "cloud sync", description: "Optional cloud storage via Cognee. Your memory persists across sessions and devices while staying encrypted.", action: "Encrypt → Sync → Access", color: "#8e6ce4" },
  { icon: Shield, name: "local fallback", description: "When offline, Pinchu falls back to local JSON storage. Full functionality without internet. Your data stays on your machine.", action: "Detect → Fallback → Store", color: "#ab8ff1" },
];

const techStack = [
  { name: "Cognee Cloud", desc: "Cognitive Memory", icon: Cloud },
  { name: "Local JSON", desc: "Offline Storage", icon: Shield },
  { name: "Edge TTS", desc: "Voice Output", icon: Brain },
];

export default function CogneeIntegration() {
  return (
    <section id="integrations" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-medium mb-4 block" style={{ color: "#8e6ce4", letterSpacing: "0.08em", textTransform: "uppercase" }}>Powered by Cognee</span>
          <h2 className="display-text text-4xl md:text-5xl font-bold mb-5">
            Cognitive memory<br />that grows with you
          </h2>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "#8b8e9c" }}>
            Pinchu uses Cognee cloud to build a memory that understands your work patterns, learns your preferences, and helps you stay focused.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mb-16" style={{ background: "#31313a" }}>
          {operations.map((op, i) => (
            <motion.div
              key={op.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: "#08080a" }}
              className="p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ borderRadius: "3px", background: "#0d0d12", border: "1px solid #17171c" }}>
                  <op.icon className="w-4 h-4" style={{ color: op.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-sm font-semibold font-mono" style={{ color: "#dad7de" }}>{op.name}</h3>
                    <span className="text-[10px] font-mono" style={{ color: "#62626f" }}>{op.action}</span>
                  </div>
                   <p className="text-sm leading-relaxed" style={{ color: "#8b8e9c" }}>{op.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ border: "1px solid #31313a", borderRadius: "3px", background: "#0d0d12" }}
          className="p-8"
        >
          <h3 className="text-sm font-semibold text-center mb-6" style={{ color: "#dad7de" }}>Storage Stack — Cloud + Local</h3>
          <div className="grid grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="text-center">
                <div className="w-11 h-11 flex items-center justify-center mx-auto mb-2.5" style={{ borderRadius: "3px", background: "#08080a", border: "1px solid #17171c" }}>
                  <tech.icon className="w-5 h-5" style={{ color: "#8b8e9c" }} />
                </div>
                <div className="text-xs font-semibold" style={{ color: "#dad7de" }}>{tech.name}</div>
                <div className="text-[10px]" style={{ color: "#62626f" }}>{tech.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
