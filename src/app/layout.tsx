import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinchu — AI that watches, learns, and acts",
  description:
    "A self-improving personal memory agent that learns your productivity patterns, predicts burnout, and shares team intelligence — powered by Cognee's hybrid graph-vector memory.",
  keywords: [
    "Pinchu",
    "AI productivity",
    "task management",
    "desktop AI",
    "privacy-first",
    "Cognee",
    "AI companion",
    "activity monitoring",
    "voice assistant",
    "open source",
    "burnout prediction",
    "knowledge graph",
    "memory agent",
  ],
  openGraph: {
    title: "Pinchu — AI that watches, learns, and acts",
    description:
      "A self-improving personal memory agent that learns your productivity patterns, predicts burnout, and shares team intelligence.",
    type: "website",
    url: "https://pinchu.dev",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinchu — AI that watches, learns, and acts",
    description:
      "A self-improving personal memory agent that learns your productivity patterns, predicts burnout, and shares team intelligence.",
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
