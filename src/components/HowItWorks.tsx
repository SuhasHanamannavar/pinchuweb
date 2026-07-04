"use client";

import { motion } from "framer-motion";
import { FolderOpen, Brain, MessageSquare, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FolderOpen,
    number: "01",
    title: "Scan Your Folders",
    description:
      "Point Memoir at your projects, notes, documents. It reads 30+ file formats and extracts knowledge automatically.",
    color: "violet",
    glow: "rgba(124, 58, 237, 0.3)",
  },
  {
    icon: Brain,
    number: "02",
    title: "Build Knowledge Graph",
    description:
      "Cognee extracts entities, relationships, and connections into a hybrid graph-vector knowledge store.",
    color: "cyan",
    glow: "rgba(6, 182, 212, 0.3)",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Chat with Your Memory",
    description:
      "Ask questions in natural language. Memoir recalls context from your entire digital life across infinite sessions.",
    color: "rose",
    glow: "rgba(244, 63, 94, 0.3)",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-cyan-400 font-medium tracking-wider uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Three steps to{" "}
            <span className="gradient-text">permanent memory</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No cloud. No subscriptions. Just your files turning into
            intelligent, searchable memory.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-violet-500/50 via-cyan-500/50 to-rose-500/50" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative group"
              >
                <div className="glass rounded-3xl p-8 text-center h-full">
                  {/* Step number */}
                  <div
                    className="text-6xl font-black text-white/5 absolute top-4 right-6"
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, ${step.glow}, transparent)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                      style={{ background: step.glow }}
                    />
                    <step.icon className="w-8 h-8 text-white relative z-10" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (hidden on mobile, shown on desktop between cards) */}
                  {index < 2 && (
                    <div className="hidden lg:flex absolute top-24 -right-4 z-20 w-8 h-8 items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
