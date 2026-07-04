import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinchu — Your AI Never Forgets",
  description:
    "A desktop AI companion that scans your files, builds a permanent knowledge graph, and lets you chat with your own memory across infinite sessions. Privacy-first. All data stays on your machine.",
  keywords: [
    "Pinchu",
    "AI memory",
    "knowledge graph",
    "desktop AI",
    "privacy-first",
    "Cognee",
    "personal AI",
    "file scanner",
    "memory management",
    "AI companion",
  ],
  openGraph: {
    title: "Pinchu — Your AI Never Forgets",
    description:
      "Scan your files. Build a knowledge graph. Chat with your memory. All local, all private.",
    type: "website",
    url: "https://pinchu.dev",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinchu — Your AI Never Forgets",
    description:
      "Scan your files. Build a knowledge graph. Chat with your memory. All local, all private.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#030014] text-slate-200 font-sans">
        {children}
      </body>
    </html>
  );
}
