import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinchu — Your AI Productivity Buddy",
  description:
    "A desktop AI companion that manages your tasks, monitors your activity, and keeps you focused. Voice interaction, animated character, and Cognee cloud memory. All open source.",
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
  ],
  openGraph: {
    title: "Pinchu — Your AI Productivity Buddy",
    description:
      "Manage tasks. Monitor activity. Stay focused. An AI productivity companion with voice, animation, and cloud memory.",
    type: "website",
    url: "https://pinchu.dev",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinchu — Your AI Productivity Buddy",
    description:
      "Manage tasks. Monitor activity. Stay focused. An AI productivity companion with voice, animation, and cloud memory.",
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
