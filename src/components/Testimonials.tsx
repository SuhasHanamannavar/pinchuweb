"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I pointed it at my notes folder and asked 'what am I building?' — it gave me a better summary than I could've written myself.",
    author: "Shubham",
    role: "Full-stack dev, built 3 side projects with Pinchu",
  },
  {
    quote: "The fact that nothing leaves my machine is the whole point. I've got client data in there I can't send to OpenAI. Pinchu solved that.",
    author: "Kavya",
    role: "Freelance designer, privacy-conscious user",
  },
  {
    quote: "I forgot I had a whole doc about API auth from two months ago. Pinchu pulled it up before I even finished asking.",
    author: "Arjun",
    role: "Backend engineer, uses Pinchu daily",
  },
];

const stats = [
  { value: "56", label: "Tests Passing" },
  { value: "30+", label: "File Formats" },
  { value: "12", label: "Activity Types" },
  { value: "17", label: "Achievements" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats — restrained, no gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{ border: "1px solid #31313a", borderRadius: "3px", background: "#0d0d12" }}
          className="p-8 mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "#dad7de" }}>{stat.value}</div>
                <div className="text-xs" style={{ color: "#62626f" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-medium mb-4 block" style={{ color: "#8e6ce4", letterSpacing: "0.08em", textTransform: "uppercase" }}>From the people using it</span>
          <h2 className="display-text text-4xl md:text-5xl font-bold">
            Actually useful
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "#31313a" }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: "#08080a" }}
              className="p-6 flex flex-col"
            >
              <Quote className="w-4 h-4 mb-4 flex-shrink-0" style={{ color: "#31313a" }} />
              <p className="leading-relaxed mb-6 text-sm flex-1" style={{ color: "#aeaac0" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4" style={{ borderTop: "1px solid #17171c" }}>
                <div className="text-xs font-semibold" style={{ color: "#dad7de" }}>{t.author}</div>
                <div className="text-[10px]" style={{ color: "#62626f" }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
