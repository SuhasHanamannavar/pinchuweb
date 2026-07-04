"use client";

import { motion } from "framer-motion";
import { Download, Apple, Monitor, Terminal, Sparkles } from "lucide-react";
import PinchuCharacter from "./PinchuCharacter";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function DownloadCTA() {
  return (
    <section id="download" className="relative py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px]" style={{ background: "rgba(142, 108, 228, 0.09)" }} />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px]" style={{ background: "rgba(171, 143, 241, 0.05)" }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ border: "1px solid #31313a", borderRadius: "3px", background: "#0d0d12" }}
          className="p-10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(142,108,228,0.4), transparent)" }} />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(142,108,228,0.03), transparent)" }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="mb-6 relative inline-block"
          >
            <motion.div
              className="absolute -inset-5 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(142,108,228,0.15) 0%, transparent 70%)", filter: "blur(15px)" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <PinchuCharacter size={80} mood="happy" />
            </motion.div>
          </motion.div>

          <h2 className="display-text text-3xl md:text-4xl font-bold mb-3">
            Start focusing
          </h2>
          <p className="max-w-md mx-auto mb-10 text-xs leading-relaxed" style={{ color: "#8b8e9c" }}>
            Free and open source. Download Pinchu, add your tasks,
            and let it help you stay on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <motion.button
              className="btn-primary relative overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
              />
              <Sparkles className="w-4 h-4" />
              Download for Windows
            </motion.button>
            <a
              href="https://github.com/SuhasHanamannavar/pinchu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GithubIcon className="w-4 h-4" />
              Source code
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 text-xs" style={{ color: "#62626f" }}>
            <span className="flex items-center gap-1.5"><Monitor className="w-3 h-3" /> Windows</span>
            <span className="flex items-center gap-1.5"><Apple className="w-3 h-3" /> macOS</span>
            <span className="flex items-center gap-1.5"><Terminal className="w-3 h-3" /> Linux</span>
          </div>

          <div className="mt-6 pt-6" style={{ borderTop: "1px solid #17171c" }}>
            <p className="text-[10px]" style={{ color: "#62626f" }}>
              Python 3.10+ &middot; Any LLM API key (OpenAI, Anthropic, or compatible)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
