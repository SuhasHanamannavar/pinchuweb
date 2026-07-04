"use client";

import { motion } from "framer-motion";

interface PinchuLogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function PinchuLogo({
  size = 40,
  className = "",
  animated = true,
}: PinchuLogoProps) {
  const id = `pg-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={animated ? { scale: 1.1, rotate: 8 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
    >
      <defs>
        <linearGradient id={`${id}-main`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
        <linearGradient id={`${id}-glow`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <filter id={`${id}-blur`}>
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id={`${id}-outer`}>
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow ring */}
      {animated && (
        <motion.circle
          cx="60"
          cy="60"
          r="55"
          stroke={`url(#${id}-main)`}
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
          opacity="0.3"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "60px 60px" }}
        />
      )}

      {/* Second ring — counter rotate */}
      {animated && (
        <motion.circle
          cx="60"
          cy="60"
          r="50"
          stroke={`url(#${id}-glow)`}
          strokeWidth="0.5"
          strokeDasharray="3 8"
          fill="none"
          opacity="0.2"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "60px 60px" }}
        />
      )}

      {/* Brain shape */}
      <g filter={`url(#${id}-outer)`}>
        {/* Left lobe */}
        <motion.path
          d="M42 30C42 30 28 40 28 60C28 80 42 90 42 90"
          stroke={`url(#${id}-main)`}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          initial={animated ? { pathLength: 0 } : undefined}
          animate={animated ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        {/* Right lobe */}
        <motion.path
          d="M78 30C78 30 92 40 92 60C92 80 78 90 78 90"
          stroke={`url(#${id}-main)`}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          initial={animated ? { pathLength: 0 } : undefined}
          animate={animated ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.15 }}
        />

        {/* Neural connections — more of them */}
        {[
          { d: "M45 42 Q60 36 75 42", delay: 0.8, width: 2 },
          { d: "M43 52 Q60 46 77 52", delay: 0.95, width: 2.5 },
          { d: "M42 62 Q60 56 78 62", delay: 1.1, width: 2 },
          { d: "M44 72 Q60 66 76 72", delay: 1.25, width: 1.5 },
          { d: "M46 82 Q60 78 74 82", delay: 1.4, width: 1 },
        ].map((conn, i) => (
          <motion.path
            key={i}
            d={conn.d}
            stroke={`url(#${id}-main)`}
            strokeWidth={conn.width}
            strokeLinecap="round"
            fill="none"
            opacity={0.6}
            initial={animated ? { pathLength: 0 } : undefined}
            animate={animated ? { pathLength: 1 } : undefined}
            transition={{ duration: 1, delay: conn.delay }}
          />
        ))}

        {/* Center stem */}
        <motion.line
          x1="60"
          y1="25"
          x2="60"
          y2="95"
          stroke={`url(#${id}-main)`}
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={animated ? { pathLength: 0 } : undefined}
          animate={animated ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Neuron firing dots */}
        {animated ? (
          <>
            <motion.circle
              cx="45" cy="42" r="3"
              fill="#7c3aed"
              animate={{ scale: [1, 2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
            />
            <motion.circle
              cx="75" cy="42" r="3"
              fill="#06b6d4"
              animate={{ scale: [1, 2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
            />
            <motion.circle
              cx="60" cy="52" r="3.5"
              fill="#f43f5e"
              animate={{ scale: [1, 2.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
            />
            <motion.circle
              cx="43" cy="62" r="2.5"
              fill="#10b981"
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
            />
            <motion.circle
              cx="77" cy="62" r="2.5"
              fill="#fbbf24"
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.9 }}
            />
            <motion.circle
              cx="60" cy="72" r="2"
              fill="#a855f7"
              animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
            />
            <motion.circle
              cx="44" cy="82" r="2"
              fill="#22d3ee"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              cx="76" cy="82" r="2"
              fill="#fb7185"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
            />
          </>
        ) : (
          <>
            <circle cx="45" cy="42" r="3" fill="#7c3aed" opacity="0.7" />
            <circle cx="75" cy="42" r="3" fill="#06b6d4" opacity="0.7" />
            <circle cx="60" cy="52" r="3.5" fill="#f43f5e" opacity="0.7" />
            <circle cx="43" cy="62" r="2.5" fill="#10b981" opacity="0.6" />
            <circle cx="77" cy="62" r="2.5" fill="#fbbf24" opacity="0.6" />
            <circle cx="60" cy="72" r="2" fill="#a855f7" opacity="0.5" />
            <circle cx="44" cy="82" r="2" fill="#22d3ee" opacity="0.5" />
            <circle cx="76" cy="82" r="2" fill="#fb7185" opacity="0.5" />
          </>
        )}
      </g>
    </motion.svg>
  );
}
