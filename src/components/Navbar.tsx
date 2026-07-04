"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PinchuCharacter from "./PinchuCharacter";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Character", href: "#character" },
  { label: "Workflow", href: "#workflow" },
  { label: "Integrations", href: "#integrations" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(8, 8, 10, 0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#31313a" }} />

      <div className="relative max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 relative z-10">
          <PinchuCharacter size={18} animated={false} />
          <span className="text-sm font-medium" style={{ color: "#dad7de", letterSpacing: "-0.02em" }}>pinchu</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium transition-colors duration-200"
              style={{ color: "#8b8e9c", letterSpacing: "-0.01em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#dad7de")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8b8e9c")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/SuhasHanamannavar/pinchu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium transition-colors duration-200"
            style={{ color: "#8b8e9c" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#dad7de")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8b8e9c")}
          >
            GitHub
          </a>
          <a href="#download" className="btn-primary text-xs py-1.5 px-4">
            Download
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1 relative z-10"
          style={{ color: "#8b8e9c" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative overflow-hidden"
            style={{ background: "rgba(8, 8, 10, 0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid #31313a" }}
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm py-1"
                  style={{ color: "#8b8e9c" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2" style={{ borderTop: "1px solid #31313a" }}>
                <a href="#download" className="btn-primary text-xs py-2 px-5 w-full justify-center">
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
