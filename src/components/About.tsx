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
              Built because I<br />kept forgetting
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#8b8e9c" }}>
              <p>
                I&apos;d write an API auth doc at 2am, then spend 40 minutes searching for it
                two months later. I&apos;d have three versions of the same project notes scattered
                across folders. I&apos;d ask myself &ldquo;what was I working on last week?&rdquo; and get nothing.
              </p>
              <p>
                Pinchu started as a weekend hack — a Python script that reads my files and answers
                questions. Then Cognee&apos;s local graph database clicked: what if the memory wasn&apos;t
                just a vector search, but a real knowledge graph that understands connections?
              </p>
              <p>
                Now it&apos;s a desktop companion with a cute brain character that floats on my screen,
                detects what I&apos;m doing, and proactively surfaces context. Everything stays on my machine.
                No cloud. No subscriptions. Just memory that works.
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
                description: "It's the architecture. Kuzu, LanceDB, FastEmbed — all local. Your memory graph never leaves your machine.",
              },
              {
                icon: Sparkles,
                title: "Cognee-native",
                description: "Uses the full lifecycle: remember, recall, improve, forget. Custom DataPoint models. Session bridging. Not a wrapper — a user.",
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
