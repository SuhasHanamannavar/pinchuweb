"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ListTodo, Brain, MessageSquare, ArrowRight, GitBranch, Terminal } from "lucide-react";

const workflowSteps = [
  {
    icon: ListTodo,
    title: "Capture",
    subtitle: "Add your tasks",
    description: "Type or speak your tasks in natural language. Pinchu classifies them, assigns priorities, and organizes your day automatically.",
    details: ["Natural language input", "Auto-classification", "Priority detection", "Voice input"],
    mockUI: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs" style={{ color: "#8b8e9c" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
          Task Input
        </div>
        {["Finish project report", "30 min exercise", "Review pull requests"].map((task, i) => (
          <div key={task} className="flex items-center gap-2 px-3 py-2" style={{ background: "#08080a", border: "1px solid #17171c", borderRadius: "3px" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: i === 2 ? "#eab308" : "#22c55e" }} />
            <span className="text-xs font-mono" style={{ color: "#aeaac0" }}>{task}</span>
            <span className="ml-auto text-[10px]" style={{ color: "#62626f" }}>{["AI", "Health", "Work"][i]}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Brain,
    title: "Track",
    subtitle: "Monitor activity",
    description: "Pinchu watches your activity in real-time — coding, browsing, working, or gaming. It knows when you're focused and when you need a break.",
    details: ["12 activity types", "Window tracking", "Focus detection", "Break nudges"],
    mockUI: (
      <div className="space-y-2">
        <div className="text-xs mb-2" style={{ color: "#8b8e9c" }}>Activity Monitor</div>
        <div className="relative h-32" style={{ background: "#08080a", border: "1px solid #17171c", borderRadius: "3px", overflow: "hidden" }}>
          <div className="absolute inset-0 p-3 space-y-2">
            {[
              { label: "Coding", pct: 45, color: "#22c55e" },
              { label: "Browsing", pct: 25, color: "#8e6ce4" },
              { label: "Meeting", pct: 20, color: "#eab308" },
              { label: "Break", pct: 10, color: "#ef4444" },
            ].map((a) => (
              <div key={a.label} className="flex items-center gap-2">
                <span className="text-[9px] w-14" style={{ color: "#62626f" }}>{a.label}</span>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: "#17171c" }}>
                  <div className="h-full rounded-full" style={{ width: `${a.pct}%`, background: a.color }} />
                </div>
                <span className="text-[9px]" style={{ color: "#62626f" }}>{a.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: MessageSquare,
    title: "Assist",
    subtitle: "Get things done",
    description: "Chat with Pinchu about your tasks, get daily summaries, and receive proactive nudges to keep you on track throughout the day.",
    details: ["AI chat", "Daily summaries", "Progress reports", "Voice output"],
    mockUI: (
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="px-3 py-1.5 text-xs" style={{ background: "rgba(142,108,228,0.1)", border: "1px solid rgba(142,108,228,0.2)", borderRadius: "3px", color: "#ab8ff1" }}>
            How am I doing today?
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="px-3 py-1.5 text-xs max-w-[80%]" style={{ background: "#0d0d12", border: "1px solid #31313a", borderRadius: "3px", color: "#aeaac0" }}>
            You&apos;ve completed 3 of 5 tasks. Productivity score: 82%. 2 tasks pending — want me to focus on those?
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: GitBranch,
    title: "Learn",
    subtitle: "Memory that grows",
    description: "Pinchu builds a knowledge graph from your activity. It learns your patterns across sessions, and you can optimize or clear memory anytime.",
    details: ["Knowledge graph", "Context chaining", "Improve/forget", "Team sharing"],
    mockUI: (
      <div className="space-y-2">
        <div className="text-xs mb-2" style={{ color: "#8b8e9c" }}>Knowledge Graph</div>
        <div className="relative h-32 flex items-center justify-center" style={{ background: "#08080a", border: "1px solid #17171c", borderRadius: "3px", overflow: "hidden" }}>
          <svg viewBox="0 0 200 120" className="w-full h-full" style={{ padding: "8px" }}>
            {/* Nodes */}
            <circle cx="100" cy="30" r="12" fill="#8e6ce4" opacity="0.8" />
            <circle cx="50" cy="70" r="10" fill="#22c55e" opacity="0.8" />
            <circle cx="150" cy="70" r="10" fill="#eab308" opacity="0.8" />
            <circle cx="70" cy="100" r="8" fill="#ab8ff1" opacity="0.6" />
            <circle cx="130" cy="100" r="8" fill="#8960f0" opacity="0.6" />
            {/* Edges */}
            <line x1="100" y1="30" x2="50" y2="70" stroke="#31313a" strokeWidth="1" />
            <line x1="100" y1="30" x2="150" y2="70" stroke="#31313a" strokeWidth="1" />
            <line x1="50" y1="70" x2="70" y2="100" stroke="#31313a" strokeWidth="1" />
            <line x1="150" y1="70" x2="130" y2="100" stroke="#31313a" strokeWidth="1" />
            <line x1="70" y1="100" x2="130" y2="100" stroke="#31313a" strokeWidth="1" />
            {/* Labels */}
            <text x="100" y="28" textAnchor="middle" fill="#dad7de" fontSize="7" fontFamily="monospace">Tasks</text>
            <text x="50" y="72" textAnchor="middle" fill="#dad7de" fontSize="6" fontFamily="monospace">Code</text>
            <text x="150" y="72" textAnchor="middle" fill="#dad7de" fontSize="6" fontFamily="monospace">Email</text>
            <text x="70" y="102" textAnchor="middle" fill="#dad7de" fontSize="5" fontFamily="monospace">Focus</text>
            <text x="130" y="102" textAnchor="middle" fill="#dad7de" fontSize="5" fontFamily="monospace">Break</text>
          </svg>
        </div>
      </div>
    ),
  },
];

export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section ref={containerRef} id="workflow" className="relative py-32 aurora-section-glow">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-medium mb-4 block" style={{ color: "#8e6ce4", letterSpacing: "0.08em", textTransform: "uppercase" }}>The Flow</span>
          <h2 className="display-text text-4xl md:text-5xl font-bold mb-5">
            From tasks to<br />accomplishment
          </h2>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "#8b8e9c" }}>
            The complete workflow — capture, track, assist, learn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-3">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  border: activeStep === i ? "1px solid rgba(142,108,228,0.3)" : "1px solid #31313a",
                  borderRadius: "3px",
                  background: activeStep === i ? "#17171c" : "#0d0d12",
                }}
                className="p-5 cursor-pointer transition-all duration-300"
                onClick={() => setActiveStep(i)}
                onMouseEnter={() => setActiveStep(i)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ borderRadius: "3px", background: "#08080a", border: "1px solid #17171c" }}>
                    <step.icon className="w-4 h-4" style={{ color: activeStep === i ? "#8e6ce4" : "#62626f" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-mono" style={{ color: activeStep === i ? "#8e6ce4" : "#62626f" }}>0{i + 1}</span>
                      <h3 className="text-sm font-semibold" style={{ color: "#dad7de" }}>{step.title}</h3>
                      <span className="text-[10px]" style={{ color: "#62626f" }}>— {step.subtitle}</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#8b8e9c" }}>{step.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.details.map((d) => (
                        <span key={d} className="px-2 py-0.5 text-[10px]" style={{ background: "#08080a", border: "1px solid #17171c", borderRadius: "3px", color: "#62626f" }}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  {i < 3 && (
                    <ArrowRight className="w-3 h-3 mt-3 hidden lg:block" style={{ color: "#31313a" }} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block sticky top-24"
          >
            <div style={{ border: "1px solid #31313a", borderRadius: "3px", overflow: "hidden" }}>
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "#0d0d12", borderBottom: "1px solid #31313a" }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#eab308" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
                <span className="ml-2 text-xs font-mono" style={{ color: "#62626f" }}>Pinchu — Live Preview</span>
                <div className="ml-auto flex gap-1.5">
                  {workflowSteps.map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                      style={{ background: activeStep === i ? "#8e6ce4" : "#31313a" }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-5 space-y-4" style={{ background: "#08080a" }}>
                {workflowSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    animate={{ opacity: activeStep === i ? 1 : 0.3, scale: activeStep === i ? 1 : 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.mockUI}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
