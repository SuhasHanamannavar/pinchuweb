"use client";

import { motion } from "framer-motion";

interface PinchuCharacterProps {
  size?: number;
  className?: string;
  animated?: boolean;
  mood?: "happy" | "excited" | "sleepy" | "curious";
}

export default function PinchuCharacter({
  size = 120,
  className = "",
  animated = true,
  mood = "happy",
}: PinchuCharacterProps) {
  const id = `pinchu-${Math.random().toString(36).slice(2, 8)}`;

  // Eye direction based on mood
  const eyeOffset = {
    happy: { lx: 0, ly: 0, rx: 0, ry: 0 },
    excited: { lx: -1, ly: -2, rx: 1, ry: -2 },
    sleepy: { lx: 0, ly: 2, rx: 0, ry: 2 },
    curious: { lx: 2, ly: -1, rx: 2, ry: -1 },
  }[mood];

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={animated ? { scale: 1.08, y: -5 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="30%" y1="20%" x2="70%" y2="80%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="40%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id={`${id}-cheek`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-shadow`}>
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#7c3aed" floodOpacity="0.3" />
        </filter>
        <filter id={`${id}-inner`}>
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow behind body */}
      <motion.ellipse
        cx="100"
        cy="115"
        rx="65"
        ry="60"
        fill={`url(#${id}-glow)`}
        animate={animated ? {
          rx: [65, 70, 65],
          ry: [60, 65, 60],
          opacity: [0.5, 0.7, 0.5],
        } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Shadow on ground */}
      <motion.ellipse
        cx="100"
        cy="170"
        rx="40"
        ry="6"
        fill="rgba(0,0,0,0.2)"
        animate={animated ? {
          rx: [40, 35, 40],
          opacity: [0.2, 0.15, 0.2],
        } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Body — round brain shape */}
      <motion.g
        filter={`url(#${id}-shadow)`}
        animate={animated ? { y: [0, -4, 0] } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Main body */}
        <ellipse
          cx="100"
          cy="105"
          rx="55"
          ry="58"
          fill={`url(#${id}-body)`}
        />

        {/* Brain fold lines */}
        <path
          d="M70 80 Q85 75 100 80 Q115 85 130 80"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M68 95 Q85 90 100 95 Q115 100 132 95"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M72 110 Q85 105 100 110 Q115 115 128 110"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Center line */}
        <line
          x1="100"
          y1="55"
          x2="100"
          y2="155"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />

        {/* Highlight */}
        <ellipse
          cx="85"
          cy="80"
          rx="20"
          ry="12"
          fill="rgba(255,255,255,0.08)"
          transform="rotate(-15 85 80)"
        />

        {/* Eyes — big, cute */}
        <g filter={`url(#${id}-inner)`}>
          {/* Left eye */}
          <ellipse cx="82" cy="95" rx="12" ry="13" fill="white" />
          <motion.ellipse
            cx={82 + eyeOffset.lx}
            cy={97 + eyeOffset.ly}
            rx="7"
            ry="8"
            fill="#1e1b4b"
            animate={animated ? {
              cy: [97, 96, 97],
            } : undefined}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx={79 + eyeOffset.lx} cy={94 + eyeOffset.ly} r="3" fill="white" />

          {/* Right eye */}
          <ellipse cx="118" cy="95" rx="12" ry="13" fill="white" />
          <motion.ellipse
            cx={118 + eyeOffset.rx}
            cy={97 + eyeOffset.ry}
            rx="7"
            ry="8"
            fill="#1e1b4b"
            animate={animated ? {
              cy: [97, 96, 97],
            } : undefined}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          <circle cx={115 + eyeOffset.rx} cy={94 + eyeOffset.ry} r="3" fill="white" />
        </g>

        {/* Mouth — little smile */}
        <path
          d="M92 115 Q100 122 108 115"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cheeks — blush */}
        <ellipse cx="72" cy="108" rx="8" ry="5" fill={`url(#${id}-cheek)`} opacity="0.3" />
        <ellipse cx="128" cy="108" rx="8" ry="5" fill={`url(#${id}-cheek)`} opacity="0.3" />

        {/* Neural antenna — top of head */}
        <motion.g
          animate={animated ? { rotate: [-3, 3, -3] } : undefined}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 50px" }}
        >
          <line x1="100" y1="50" x2="100" y2="30" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
          <motion.circle
            cx="100"
            cy="28"
            r="5"
            fill="#c084fc"
            animate={animated ? {
              r: [5, 6, 5],
              opacity: [0.8, 1, 0.8],
            } : undefined}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.circle
            cx="100"
            cy="28"
            r="8"
            fill="none"
            stroke="#c084fc"
            strokeWidth="1"
            opacity="0.3"
            animate={animated ? {
              r: [8, 12, 8],
              opacity: [0.3, 0, 0.3],
            } : undefined}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* Tiny arms */}
        <motion.path
          d="M48 110 Q40 105 38 115"
          stroke="#7c3aed"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          animate={animated ? { d: ["M48 110 Q40 105 38 115", "M48 110 Q38 100 36 112", "M48 110 Q40 105 38 115"] } : undefined}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M152 110 Q160 105 162 115"
          stroke="#7c3aed"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          animate={animated ? { d: ["M152 110 Q160 105 162 115", "M152 110 Q162 100 164 112", "M152 110 Q160 105 162 115"] } : undefined}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Tiny feet */}
        <ellipse cx="85" cy="158" rx="10" ry="5" fill="#6d28d9" />
        <ellipse cx="115" cy="158" rx="10" ry="5" fill="#6d28d9" />
      </motion.g>

      {/* Floating neural sparks */}
      {animated && (
        <>
          <motion.circle
            cx="55"
            cy="70"
            r="2"
            fill="#c084fc"
            animate={{
              cy: [70, 60, 70],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          />
          <motion.circle
            cx="145"
            cy="65"
            r="2"
            fill="#22d3ee"
            animate={{
              cy: [65, 55, 65],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.circle
            cx="60"
            cy="140"
            r="1.5"
            fill="#f472b6"
            animate={{
              cy: [140, 130, 140],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle
            cx="140"
            cy="135"
            r="1.5"
            fill="#34d399"
            animate={{
              cy: [135, 125, 135],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          />
        </>
      )}
    </motion.svg>
  );
}
