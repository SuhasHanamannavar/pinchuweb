"use client";

import { useEffect, useRef } from "react";

export default function MeshGradientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const animate = () => {
      t += 0.0012;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // Aurora band 1 — main hero band, strong
      const a1Y = h * 0.38 + Math.sin(t * 0.35) * 100;
      const a1H = 200 + Math.sin(t * 0.2) * 40;
      const a1Grad = ctx.createLinearGradient(0, a1Y - a1H, 0, a1Y + a1H);
      a1Grad.addColorStop(0, "transparent");
      a1Grad.addColorStop(0.15, "rgba(142, 108, 228, 0.03)");
      a1Grad.addColorStop(0.3, "rgba(142, 108, 228, 0.07)");
      a1Grad.addColorStop(0.45, "rgba(137, 96, 240, 0.12)");
      a1Grad.addColorStop(0.5, "rgba(160, 120, 255, 0.14)");
      a1Grad.addColorStop(0.55, "rgba(137, 96, 240, 0.12)");
      a1Grad.addColorStop(0.7, "rgba(142, 108, 228, 0.07)");
      a1Grad.addColorStop(0.85, "rgba(171, 143, 241, 0.03)");
      a1Grad.addColorStop(1, "transparent");
      ctx.fillStyle = a1Grad;
      ctx.fillRect(0, 0, w, h);

      // Aurora band 2 — offset depth
      const a2Y = h * 0.32 + Math.sin(t * 0.28 + 1.5) * 80;
      const a2H = 160 + Math.sin(t * 0.18) * 30;
      const a2Grad = ctx.createLinearGradient(0, a2Y - a2H, 0, a2Y + a2H);
      a2Grad.addColorStop(0, "transparent");
      a2Grad.addColorStop(0.25, "rgba(171, 143, 241, 0.025)");
      a2Grad.addColorStop(0.45, "rgba(142, 108, 228, 0.06)");
      a2Grad.addColorStop(0.5, "rgba(137, 96, 240, 0.08)");
      a2Grad.addColorStop(0.55, "rgba(142, 108, 228, 0.06)");
      a2Grad.addColorStop(0.75, "rgba(171, 143, 241, 0.025)");
      a2Grad.addColorStop(1, "transparent");
      ctx.fillStyle = a2Grad;
      ctx.fillRect(0, 0, w, h);

      // Aurora band 3 — lower subtle
      const a3Y = h * 0.62 + Math.sin(t * 0.22 + 3) * 60;
      const a3H = 100 + Math.sin(t * 0.15) * 20;
      const a3Grad = ctx.createLinearGradient(0, a3Y - a3H, 0, a3Y + a3H);
      a3Grad.addColorStop(0, "transparent");
      a3Grad.addColorStop(0.35, "rgba(142, 108, 228, 0.02)");
      a3Grad.addColorStop(0.5, "rgba(171, 143, 241, 0.04)");
      a3Grad.addColorStop(0.65, "rgba(137, 96, 240, 0.02)");
      a3Grad.addColorStop(1, "transparent");
      ctx.fillStyle = a3Grad;
      ctx.fillRect(0, 0, w, h);

      // Aurora band 4 — upper accent
      const a4Y = h * 0.22 + Math.sin(t * 0.3 + 4.5) * 50;
      const a4H = 80;
      const a4Grad = ctx.createLinearGradient(0, a4Y - a4H, 0, a4Y + a4H);
      a4Grad.addColorStop(0, "transparent");
      a4Grad.addColorStop(0.4, "rgba(160, 120, 255, 0.015)");
      a4Grad.addColorStop(0.5, "rgba(142, 108, 228, 0.04)");
      a4Grad.addColorStop(0.6, "rgba(160, 120, 255, 0.015)");
      a4Grad.addColorStop(1, "transparent");
      ctx.fillStyle = a4Grad;
      ctx.fillRect(0, 0, w, h);

      // Aurora band 5 — deep bottom
      const a5Y = h * 0.78 + Math.sin(t * 0.17 + 2) * 40;
      const a5H = 60;
      const a5Grad = ctx.createLinearGradient(0, a5Y - a5H, 0, a5Y + a5H);
      a5Grad.addColorStop(0, "transparent");
      a5Grad.addColorStop(0.45, "rgba(137, 96, 240, 0.012)");
      a5Grad.addColorStop(0.5, "rgba(142, 108, 228, 0.03)");
      a5Grad.addColorStop(0.55, "rgba(137, 96, 240, 0.012)");
      a5Grad.addColorStop(1, "transparent");
      ctx.fillStyle = a5Grad;
      ctx.fillRect(0, 0, w, h);

      // Nebula orbs — organic depth, softer edges
      const orbs = [
        { cx: 0.15, cy: 0.28, r: 0.32, color: [142, 108, 228], alpha: 0.06, speed: 0.22, phase: 0 },
        { cx: 0.82, cy: 0.22, r: 0.26, color: [137, 96, 240], alpha: 0.05, speed: 0.18, phase: 1.8 },
        { cx: 0.5, cy: 0.55, r: 0.34, color: [171, 143, 241], alpha: 0.045, speed: 0.16, phase: 3.5 },
        { cx: 0.88, cy: 0.52, r: 0.22, color: [142, 108, 228], alpha: 0.05, speed: 0.28, phase: 1 },
        { cx: 0.08, cy: 0.68, r: 0.25, color: [137, 96, 240], alpha: 0.04, speed: 0.2, phase: 4 },
        { cx: 0.62, cy: 0.12, r: 0.2, color: [171, 143, 241], alpha: 0.04, speed: 0.14, phase: 2.5 },
        { cx: 0.35, cy: 0.75, r: 0.28, color: [142, 108, 228], alpha: 0.035, speed: 0.19, phase: 5.2 },
        { cx: 0.72, cy: 0.72, r: 0.22, color: [160, 120, 255], alpha: 0.03, speed: 0.24, phase: 0.8 },
      ];

      orbs.forEach((orb) => {
        const baseX = w * orb.cx;
        const baseY = h * orb.cy;
        const cx = baseX + Math.sin(t * orb.speed + orb.phase) * 70;
        const cy = baseY + Math.cos(t * orb.speed * 0.7 + orb.phase) * 55;
        const radius = w * orb.r;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(${orb.color.join(",")}, ${orb.alpha})`);
        grad.addColorStop(0.3, `rgba(${orb.color.join(",")}, ${orb.alpha * 0.6})`);
        grad.addColorStop(0.6, `rgba(${orb.color.join(",")}, ${orb.alpha * 0.2})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      // Central glow — hero accent, stronger
      const glowX = w * 0.5;
      const glowY = h * 0.36;
      const glowR = Math.min(w, h) * 0.4;
      const glowGrad = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, glowR);
      glowGrad.addColorStop(0, "rgba(142, 108, 228, 0.06)");
      glowGrad.addColorStop(0.3, "rgba(142, 108, 228, 0.035)");
      glowGrad.addColorStop(0.6, "rgba(142, 108, 228, 0.015)");
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, w, h);

      // Secondary accent glow — offset
      const glow2X = w * 0.3;
      const glow2Y = h * 0.45;
      const glow2R = Math.min(w, h) * 0.3;
      const glow2Grad = ctx.createRadialGradient(glow2X, glow2Y, 0, glow2X, glow2Y, glow2R);
      glow2Grad.addColorStop(0, "rgba(171, 143, 241, 0.03)");
      glow2Grad.addColorStop(0.5, "rgba(171, 143, 241, 0.01)");
      glow2Grad.addColorStop(1, "transparent");
      ctx.fillStyle = glow2Grad;
      ctx.fillRect(0, 0, w, h);

      // Vignette — deeper
      const vigGrad = ctx.createRadialGradient(w / 2, h / 2, w * 0.12, w / 2, h / 2, w * 0.9);
      vigGrad.addColorStop(0, "transparent");
      vigGrad.addColorStop(0.5, "rgba(8, 8, 10, 0.15)");
      vigGrad.addColorStop(1, "rgba(8, 8, 10, 0.6)");
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, w, h);

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
