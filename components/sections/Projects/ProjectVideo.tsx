"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Volume2 } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectVideo({ video, name }: { video: NonNullable<Project["video"]>; name: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Lazy autoplay / pause-when-offscreen for the short ambient loop demos.
  useEffect(() => {
    if (video.mode !== "loop") return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [video.mode]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="absolute -inset-3 rounded-[2rem] bg-gold/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="glass relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)]">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
            <span className="size-2.5 rounded-full bg-white/10" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
            {video.mode === "loop" ? "Live Preview" : video.durationLabel ?? "Demo"}
          </span>
        </div>

        <div className="relative aspect-video w-full bg-black">
          {video.mode === "loop" ? (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              poster={video.poster}
              controls
              aria-label={`${name} product demo`}
              className="size-full object-cover"
              src={inView ? video.src : undefined}
            />
          ) : playing ? (
            <video
              autoPlay
              controls
              playsInline
              poster={video.poster}
              aria-label={`${name} full demo walkthrough`}
              className="size-full object-cover"
              src={video.src}
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group relative size-full"
              aria-label={`Play ${name} demo walkthrough`}
            >
              <Image
                src={video.poster}
                alt={`${name} interface preview`}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="flex size-16 items-center justify-center rounded-full bg-gold text-[#0a0a0a] shadow-[0_0_0_8px_rgba(212,175,55,0.12)] transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-6 fill-current" />
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 font-mono text-[11px] text-white/80">
                  <Volume2 className="size-3" /> {video.durationLabel ?? "Watch full demo"}
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
