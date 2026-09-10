"use client";

/**
 * Premium portrait frame for the hero.
 *
 * NOTE — no usable headshot was supplied for this build: the uploaded
 * `founder-img.webp` is a NIHILO Web Solutions brand badge with marketing
 * copy ("Building Digital Solutions / Websites · AI · Marketing") baked
 * into the image itself, so it can't be cropped into a clean rectangular
 * portrait without showing that unrelated text. Until a plain headshot is
 * available, this renders a designed placeholder in the same frame.
 *
 * To swap in a real photo: replace the contents of the
 * `<div className="absolute inset-0 ...">` placeholder block below with:
 *   <Image src="/images/hero-portrait.webp" alt="Ponraj C" fill
 *     className="object-cover" priority />
 * and drop the file at public/images/hero-portrait.webp.
 */

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap } from "lucide-react";

export function PortraitVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 10, y: py * -10 });
  }
  function onMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div className="relative mx-auto w-full max-w-[420px] [perspective:1200px]">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        animate={{ rotateX: tilt.y, rotateY: tilt.x }}
        transition={{ type: "spring", stiffness: 150, damping: 18 }}
        className="relative aspect-[4/5] w-full animate-[float-slow_7s_ease-in-out_infinite] [transform-style:preserve-3d]"
      >
        {/* ambient glow */}
        <div className="absolute -inset-6 rounded-[2.5rem] bg-gold/[0.12] blur-3xl" />

        {/* card frame */}
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-border-strong bg-gradient-to-br from-surface-2 via-surface to-[#050505] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
          {/* placeholder visual — see note above */}
          <div className="absolute inset-0">
            <Image
              src="/images/myimage1(2).png"
              alt="Ponraj C"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        </div>

        {/* floating chip — availability */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ transform: "translateZ(40px)" }}
          className="glass absolute -right-4 top-8 flex items-center gap-2 rounded-full px-3.5 py-2 shadow-lg sm:-right-8"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-[pulse-soft_2s_ease-in-out_infinite] rounded-full bg-emerald-400" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs text-muted">Open to internships/remote jobs</span>
        </motion.div>

        {/* floating chip — stack */}
       

        {/* floating chip — education */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          style={{ transform: "translateZ(40px)" }}
          className="glass absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 shadow-lg"
        >
          <GraduationCap className="size-3.5 text-gold" />
          <span className="text-xs text-muted">IFET College · AI & ML · 2027</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
