"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Pinchu?",
    answer: "Pinchu is a self-improving personal memory agent for your desktop. It learns your productivity patterns, predicts burnout, and shares team intelligence — powered by Cognee's hybrid graph-vector memory. Think of it as a personal assistant that actually knows what you're doing and gets smarter every day.",
  },
  {
    question: "Is it really free?",
    answer: "Yes. Pinchu is MIT-licensed open source. No subscriptions, no premium tiers, no data harvesting. You bring your own LLM API key (OpenAI, Anthropic, or any compatible provider) and everything else runs on your machine or Cognee cloud.",
  },
  {
    question: "How does the activity monitoring work?",
    answer: "Pinchu tracks your foreground window to detect what you're doing — coding, browsing, watching videos, or gaming. It recognizes 12 activity types and uses this context to provide smarter suggestions and productivity insights.",
  },
  {
    question: "What about the Cognee cloud integration?",
    answer: "Pinchu uses Cognee cloud as a cognitive memory layer. It learns your work patterns, preferences, and productivity rhythms over time. When offline, it falls back to local JSON storage so you always have full functionality.",
  },
  {
    question: "Does my data leave my machine?",
    answer: "Your task data is stored locally by default. Cognee cloud sync is optional — when enabled, your data is encrypted and synced to your personal cloud space. The only external calls are to your LLM provider for chat responses and Cognee for memory (if enabled).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 aurora-section-glow">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-medium mb-4 block" style={{ color: "#8e6ce4", letterSpacing: "0.08em", textTransform: "uppercase" }}>FAQ</span>
          <h2 className="display-text text-4xl md:text-5xl font-bold">
            Questions
          </h2>
        </motion.div>

        <div className="space-y-px" style={{ background: "#31313a" }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{ background: "#0d0d12" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="text-sm font-medium" style={{ color: "#dad7de" }}>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "#62626f" }} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-xs leading-relaxed" style={{ color: "#8b8e9c", borderTop: "1px solid #17171c", paddingTop: "12px" }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
