"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Target, Flame, BarChart3, Calendar } from "lucide-react";

const weekData = [
  { day: "Mon", score: 82 },
  { day: "Tue", score: 91 },
  { day: "Wed", score: 67 },
  { day: "Thu", score: 88 },
  { day: "Fri", score: 74 },
  { day: "Sat", score: 45 },
  { day: "Sun", score: 30 },
];

const activityBreakdown = [
  { label: "Coding", pct: 38, color: "#22c55e" },
  { label: "Meetings", pct: 22, color: "#eab308" },
  { label: "Browsing", pct: 18, color: "#8e6ce4" },
  { label: "Documents", pct: 14, color: "#8960f0" },
  { label: "Break", pct: 8, color: "#ef4444" },
];

const patterns = [
  {
    icon: Flame,
    title: "Peak focus: 10am — 1pm",
    description: "Pinchu noticed you complete 3x more tasks in the morning. It'll schedule deep work then.",
  },
  {
    icon: TrendingUp,
    title: "87% avg productivity this month",
    description: "Up from 72% last month. Your consistency is improving — Pinchu tracks the trend.",
  },
  {
    icon: Clock,
    title: "2.4 hrs avg focus per session",
    description: "You work in focused bursts. Pinchu nudges you to take breaks after 90 minutes.",
  },
  {
    icon: Target,
    title: "142 tasks completed this quarter",
    description: "Across work, health, and learning. Pinchu knows which categories you follow through on.",
  },
];

export default function InsightsShowcase() {
  const maxScore = Math.max(...weekData.map((d) => d.score));

  return (
    <section id="insights" className="relative py-32 aurora-section-glow">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-medium mb-4 block" style={{ color: "#8e6ce4", letterSpacing: "0.08em", textTransform: "uppercase" }}>Insights</span>
          <h2 className="display-text text-4xl md:text-5xl font-bold mb-5">
            Your year in<br />Pinchu
          </h2>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: "#8b8e9c" }}>
            Not just task lists. Pinchu builds a picture of how you work — your patterns, your focus, your growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px mb-16" style={{ background: "#31313a" }}>
          {/* Productivity Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ background: "#08080a" }}
            className="p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-4 h-4" style={{ color: "#8e6ce4" }} />
              <span className="text-sm font-medium" style={{ color: "#8b8e9c" }}>Today&apos;s Score</span>
            </div>
            <div className="text-6xl font-bold mb-2" style={{ color: "#22c55e" }}>86%</div>
            <div className="text-sm mb-4" style={{ color: "#62626f" }}>5 of 6 tasks completed</div>
            <div className="h-2 rounded-full" style={{ background: "#17171c" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "#22c55e" }}
                initial={{ width: 0 }}
                whileInView={{ width: "86%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <div className="mt-4 text-xs" style={{ color: "#62626f" }}>
              <span style={{ color: "#22c55e" }}>+14%</span> vs last week
            </div>
          </motion.div>

          {/* Weekly Trend */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ background: "#08080a" }}
            className="p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-4 h-4" style={{ color: "#8e6ce4" }} />
              <span className="text-sm font-medium" style={{ color: "#8b8e9c" }}>This Week</span>
            </div>
            <div className="flex items-end gap-2 h-32">
              {weekData.map((d, i) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <motion.div
                    className="w-full rounded-sm"
                    style={{ background: d.score >= 70 ? "#22c55e" : d.score >= 40 ? "#eab308" : "#ef4444" }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(d.score / maxScore) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                  />
                  <span className="text-[10px]" style={{ color: "#62626f" }}>{d.day}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs" style={{ color: "#62626f" }}>
              Avg: <span style={{ color: "#dad7de" }}>68%</span> this week
            </div>
          </motion.div>

          {/* Activity Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ background: "#08080a" }}
            className="p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-4 h-4" style={{ color: "#8e6ce4" }} />
              <span className="text-sm font-medium" style={{ color: "#8b8e9c" }}>Activity Mix</span>
            </div>
            <div className="space-y-3">
              {activityBreakdown.map((a, i) => (
                <div key={a.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs" style={{ color: "#8b8e9c" }}>{a.label}</span>
                    <span className="text-xs font-mono" style={{ color: "#62626f" }}>{a.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: "#17171c" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: a.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What Pinchu Learns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-medium mb-4 block" style={{ color: "#8e6ce4", letterSpacing: "0.08em", textTransform: "uppercase" }}>What Pinchu learns</span>
          <h2 className="display-text text-3xl md:text-4xl font-bold">
            Patterns you didn&apos;t know you had
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "#31313a" }}>
          {patterns.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: "#08080a" }}
              className="p-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ borderRadius: "3px", background: "#0d0d12", border: "1px solid #17171c" }}>
                  <p.icon className="w-5 h-5" style={{ color: "#8e6ce4" }} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "#dad7de" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8e9c" }}>{p.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
