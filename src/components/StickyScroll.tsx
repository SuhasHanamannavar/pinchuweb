"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FolderOpen, Brain, MessageSquare, ArrowRight } from "lucide-react";

const workflowSteps = [
  {
    icon: FolderOpen,
    title: "Scan",
    subtitle: "Discover your files",
    description: "Point Pinchu at your projects, notes, documents. It reads 30+ file formats and extracts knowledge automatically with incremental scanning.",
    details: ["Hash-based cache", "30+ formats", "Auto-detection", "File watcher"],
    mockUI: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs" style={{ color: "#8b8e9c" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
          Scanning: ~/Projects/
        </div>
        {["notes/ideas.md", "project/README.md", "docs/architecture.pdf"].map((f) => (
          <div key={f} className="flex items-center gap-2 px-3 py-2" style={{ background: "#08080a", border: "1px solid #17171c", borderRadius: "3px" }}>
            <FolderOpen className="w-3 h-3" style={{ color: "#8e6ce4" }} />
            <span className="text-xs font-mono" style={{ color: "#aeaac0" }}>{f}</span>
            <span className="ml-auto text-[10px]" style={{ color: "#22c55e" }}>done</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Brain,
    title: "Understand",
    subtitle: "Build knowledge graph",
    description: "Cognee extracts entities, relationships, and connections into a hybrid graph-vector knowledge store.",
    details: ["Entity extraction", "Relationship detection", "Graph storage", "Vector embeddings"],
    mockUI: (
      <div className="space-y-2">
        <div className="text-xs mb-2" style={{ color: "#8b8e9c" }}>Knowledge Graph</div>
        <div className="relative h-32" style={{ background: "#08080a", border: "1px solid #17171c", borderRadius: "3px", overflow: "hidden" }}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120">
            <circle cx="100" cy="60" r="18" fill="rgba(142,108,228,0.2)" stroke="rgba(142,108,228,0.4)" strokeWidth="0.5" />
            <circle cx="50" cy="30" r="10" fill="rgba(137,96,240,0.2)" stroke="rgba(137,96,240,0.4)" strokeWidth="0.5" />
            <circle cx="150" cy="30" r="10" fill="rgba(171,143,241,0.2)" stroke="rgba(171,143,241,0.4)" strokeWidth="0.5" />
            <circle cx="40" cy="90" r="8" fill="rgba(142,108,228,0.15)" stroke="rgba(142,108,228,0.3)" strokeWidth="0.5" />
            <circle cx="160" cy="90" r="8" fill="rgba(137,96,240,0.15)" stroke="rgba(137,96,240,0.3)" strokeWidth="0.5" />
            <line x1="100" y1="60" x2="50" y2="30" stroke="rgba(142,108,228,0.15)" strokeWidth="0.5" />
            <line x1="100" y1="60" x2="150" y2="30" stroke="rgba(142,108,228,0.15)" strokeWidth="0.5" />
            <line x1="100" y1="60" x2="40" y2="90" stroke="rgba(142,108,228,0.15)" strokeWidth="0.5" />
            <line x1="100" y1="60" x2="160" y2="90" stroke="rgba(142,108,228,0.15)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    icon: MessageSquare,
    title: "Recall",
    subtitle: "Chat with your memory",
    description: "Ask anything in natural language. Pinchu uses hybrid graph+vector retrieval for context-rich answers across infinite sessions.",
    details: ["Natural language", "Graph context", "Session bridging", "Voice input"],
    mockUI: (
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="px-3 py-1.5 text-xs" style={{ background: "rgba(142,108,228,0.1)", border: "1px solid rgba(142,108,228,0.2)", borderRadius: "3px", color: "#ab8ff1" }}>
            What projects am I working on?
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="px-3 py-1.5 text-xs max-w-[80%]" style={{ background: "#0d0d12", border: "1px solid #31313a", borderRadius: "3px", color: "#aeaac0" }}>
            You have 3 active projects: Memoir Desktop (AI companion), Pinchu (showcase), and a research paper...
          </div>
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
            From files to<br />intelligence
          </h2>
          <p className="text-sm max-w-lg leading-relaxed" style={{ color: "#8b8e9c" }}>
            The complete workflow — scan, understand, recall.
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
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#8b8e9c" }}>{step.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.details.map((d) => (
                        <span key={d} className="px-2 py-0.5 text-[10px]" style={{ background: "#08080a", border: "1px solid #17171c", borderRadius: "3px", color: "#62626f" }}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  {i < 2 && (
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
                {/* Step indicator */}
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
