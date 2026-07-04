"use client";

import { motion } from "framer-motion";
import { Heart, Code, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-32 aurora-section-glow">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-medium mb-4 block" style={{ color: "#8e6ce4", letterSpacing: "0.08em", textTransform: "uppercase" }}>The Story</span>
            <h2 className="display-text text-4xl md:text-5xl font-bold mb-6">
              Built because I<br />kept losing focus
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#8b8e9c" }}>
              <p>
                I&apos;d start a task, get distracted by a notification, and forget what I was doing.
                My to-do lists were scattered across sticky notes, apps, and half-remembered thoughts.
                I needed something that would not just list tasks, but actually help me do them.
              </p>
              <p>
                Pinchu started as a simple task tracker — then it grew. Activity monitoring so it
                knows when I&apos;m actually working. Voice interaction so I can talk to it hands-free.
                An animated character that sits on my desktop and nudges me back on track.
              </p>
              <p>
                Now it&apos;s a full productivity companion backed by Cognee cloud memory. It learns my
                patterns, knows my schedule, and proactively helps me stay focused. Everything stored
                locally with optional cloud sync. No subscriptions. Just focus that works.
              </p>
            </div>
          </motion.div>

          {/* Right — Values */}
          <div className="space-y-3">
            {[
              {
                icon: Code,
                title: "Open source, actually",
                description: "MIT licensed. Read every line. Fork it. Run it offline. No telemetry, no tracking, no asterisks.",
              },
              {
                icon: Heart,
                title: "Privacy isn't a feature",
                description: "It's the architecture. Local JSON storage with optional Cognee cloud. Your task data stays yours.",
              },
              {
                icon: Sparkles,
                title: "Cognee-powered memory",
                description: "Cloud cognitive memory that learns your patterns and context. Not just storage — understanding.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ border: "1px solid #31313a", borderRadius: "3px", background: "#0d0d12" }}
                className="p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ borderRadius: "3px", background: "#08080a", border: "1px solid #17171c" }}>
                    <value.icon className="w-4 h-4" style={{ color: "#8e6ce4" }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1" style={{ color: "#dad7de" }}>{value.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#8b8e9c" }}>{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
