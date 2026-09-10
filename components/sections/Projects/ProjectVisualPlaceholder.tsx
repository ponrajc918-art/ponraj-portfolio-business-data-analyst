"use client";

import { motion } from "framer-motion";
import { LineChart } from "lucide-react";

const POINTS = [
  [8, 62], [18, 50], [28, 58], [38, 40], [48, 44],
  [58, 30], [68, 36], [78, 20], [88, 24], [96, 14],
];

/**
 * No screenshot or demo video was supplied for the Student Performance
 * Analytics project, so this renders a labeled, illustrative regression
 * chart instead of a fabricated product screenshot.
 */
export function ProjectVisualPlaceholder({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="absolute -inset-3 rounded-[2rem] bg-gold/[0.06] blur-2xl" />
      <div className="glass relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)]">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
            Concept Illustration
          </span>
        </div>

        <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-4 bg-black px-8">
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 90%)",
            }}
          />
          <svg viewBox="0 0 100 70" className="relative z-10 h-40 w-full max-w-sm sm:h-48">
            <line x1="2" x2="98" y1="68" y2="2" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.5" />
            {POINTS.map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill="#D4AF37" />
            ))}
          </svg>
          <div className="relative z-10 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 font-mono text-[11px] text-white/70">
            <LineChart className="size-3.5" />
            Linear regression on {name.toLowerCase()} data
          </div>
        </div>
      </div>
    </motion.div>
  );
}
