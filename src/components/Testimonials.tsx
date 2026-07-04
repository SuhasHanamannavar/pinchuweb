"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Database, Lock, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "It remembers what you forget",
    description: "Pinchu doesn't just store tasks — it builds context. What you were working on yesterday. Which projects need attention. When you're most focused. Cognee turns raw activity into understanding.",
    color: "#ab8ff1",
  },
  {
    icon: Zap,
    title: "It learns your rhythm",
    description: "Every task you complete, every window you switch to, every break you take — Cognee absorbs it. Over time, Pinchu knows your productivity patterns better than you do.",
    color: "#8960f0",
  },
  {
    icon: Database,
    title: "Memory that bridges sessions",
    description: "Close Pinchu, reopen it a week later — it still knows your context. Cognee's cognitive memory persists across sessions, making every conversation smarter than the last.",
    color: "#8e6ce4",
  },
  {
    icon: Lock,
    title: "Yours first, always",
    description: "Cognee gives you cloud memory without sacrificing privacy. Your data is encrypted, synced, and yours. No selling, no tracking. Just intelligence that respects you.",
    color: "#ab8ff1",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-medium mb-4 block" style={{ color: "#8e6ce4", letterSpacing: "0.08em", textTransform: "uppercase" }}>Why Cognee matters</span>
          <h2 className="display-text text-4xl md:text-5xl font-bold mb-5">
            Not just memory.<br />Understanding.
          </h2>
          <p className="text-sm max-w-lg leading-relaxed" style={{ color: "#8b8e9c" }}>
            Most to-do apps forget everything when you close them. Pinchu doesn&apos;t.
            Cognee gives it a brain that grows with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-16" style={{ background: "#31313a" }}>
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: "#08080a" }}
              className="p-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ borderRadius: "3px", background: "#0d0d12", border: "1px solid #17171c" }}>
                  <r.icon className="w-5 h-5" style={{ color: r.color }} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#dad7de" }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8e9c" }}>{r.description}</p>
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
          className="text-center"
        >
          <p className="text-base mb-6" style={{ color: "#8b8e9c" }}>
            Without Cognee, Pinchu is a to-do list. <span style={{ color: "#dad7de" }}>With it, Pinchu is a companion.</span>
          </p>
          <a
            href="https://docs.cognee.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "#8e6ce4" }}
          >
            Learn more about Cognee
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
