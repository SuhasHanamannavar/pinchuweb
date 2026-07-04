"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Pinchu?",
    answer: "Pinchu is an AI memory companion for your desktop. It reads your files, builds a knowledge graph using Cognee, and lets you ask questions in natural language — 'What was I working on last week?' 'Where did I put that API doc?' It's like having a second brain that actually remembers.",
  },
  {
    question: "Is it really free?",
    answer: "Yes. Pinchu is MIT-licensed open source. No subscriptions, no premium tiers, no data harvesting. You bring your own LLM API key (OpenAI, Anthropic, or any compatible provider) and everything else runs locally on your machine.",
  },
  {
    question: "How does Cognee work inside Pinchu?",
    answer: "Pinchu uses Cognee's full memory lifecycle: remember (ingest files into the knowledge graph), recall (hybrid graph+vector retrieval), improve (enrich with triplet embeddings and bridge sessions), and forget (delete data when no longer needed). It uses custom DataPoint models built specifically for personal memory.",
  },
  {
    question: "What file formats does it support?",
    answer: "30+ formats including .txt, .md, .pdf, .docx, .py, .js, .ts, .json, .csv, .html, .css, and more. It uses hash-based incremental scanning so it only processes new or changed files. You can also set up a file watcher for automatic detection.",
  },
  {
    question: "Does my data leave my machine?",
    answer: "No. Pinchu uses Kuzu (graph database), LanceDB (vector database), and FastEmbed (embeddings) — all running locally. The only external call is to your LLM provider for chat responses. Your knowledge graph, file content, and embeddings never leave your device.",
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
