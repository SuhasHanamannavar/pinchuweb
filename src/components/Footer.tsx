"use client";

import PinchuCharacter from "./PinchuCharacter";

export default function Footer() {
  return (
    <footer className="relative py-16" style={{ borderTop: "1px solid #31313a" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(142, 108, 228, 0.2), transparent)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <PinchuCharacter size={18} animated={false} />
              <span className="text-sm font-medium" style={{ color: "#dad7de" }}>pinchu</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "#62626f" }}>
              A self-improving personal memory agent that learns your productivity patterns, predicts burnout, and shares team intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="text-[10px] font-medium mb-3" style={{ color: "#62626f", letterSpacing: "0.08em", textTransform: "uppercase" }}>Product</div>
              <div className="space-y-2">
                <a href="#features" className="block text-xs link-violet" style={{ color: "#8b8e9c" }}>Features</a>
                <a href="#character" className="block text-xs link-violet" style={{ color: "#8b8e9c" }}>Character</a>
                <a href="#workflow" className="block text-xs link-violet" style={{ color: "#8b8e9c" }}>Workflow</a>
                <a href="#download" className="block text-xs link-violet" style={{ color: "#8b8e9c" }}>Download</a>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-medium mb-3" style={{ color: "#62626f", letterSpacing: "0.08em", textTransform: "uppercase" }}>Resources</div>
              <div className="space-y-2">
                <a
                  href="https://github.com/SuhasHanamannavar/pinchu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs link-violet"
                  style={{ color: "#8b8e9c" }}
                >
                  GitHub
                </a>
                <a href="#faq" className="block text-xs link-violet" style={{ color: "#8b8e9c" }}>FAQ</a>
                <a href="#about" className="block text-xs link-violet" style={{ color: "#8b8e9c" }}>About</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid #17171c" }}>
          <div className="text-[10px]" style={{ color: "#62626f" }}>
            &copy; 2026 Pinchu. Open source under MIT.
          </div>
          <div className="text-[10px] flex items-center gap-1.5" style={{ color: "#62626f" }}>
            <span className="w-1 h-1 rounded-full" style={{ background: "#8e6ce4" }} />
            Built with Cognee &middot; Privacy-first AI memory
          </div>
        </div>
      </div>
    </footer>
  );
}
