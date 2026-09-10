"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

/**
 * A quiet, generative mesh of nodes and connections rendered on canvas.
 * Reacts gently to pointer proximity. This is the project's signature
 * visual — a literal "neural network" that nods to the AI/ML subject
 * matter without resorting to stock particle-effect defaults.
 */
export function NeuralCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const maybeCtx = canvas.getContext("2d", { alpha: true });
    if (!maybeCtx) return;
    const ctx: CanvasRenderingContext2D = maybeCtx;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999, active: false };

    const LINK_DIST = 150;
    const DENSITY = 1 / 14000; // nodes per px^2

    function resize() {
      if (!canvas || !container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      const count = Math.max(28, Math.min(110, Math.floor(width * height * DENSITY)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    }

    function step() {
      if (!visible) {
        raf = requestAnimationFrame(step);
        return;
      }
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (pointer.active) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 26000) {
            const f = (1 - d2 / 26000) * 0.02;
            n.vx += dx > 0 ? -f : f;
            n.vy += dy > 0 ? -f : f;
          }
        }
        const speed = Math.hypot(n.vx, n.vy);
        if (speed > 0.4) {
          n.vx = (n.vx / speed) * 0.4;
          n.vy = (n.vy / speed) * 0.4;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            let alpha = (1 - dist / LINK_DIST) * 0.16;
            if (pointer.active) {
              const pd = Math.min(
                Math.hypot(a.x - pointer.x, a.y - pointer.y),
                Math.hypot(b.x - pointer.x, b.y - pointer.y)
              );
              if (pd < 180) alpha += (1 - pd / 180) * 0.35;
            }
            ctx.strokeStyle = `rgba(212, 175, 55, ${Math.min(alpha, 0.5)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const pd = pointer.active ? Math.hypot(n.x - pointer.x, n.y - pointer.y) : 9999;
        const near = pd < 180 ? (1 - pd / 180) : 0;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4 + near * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${0.35 + near * 0.5})`;
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    function onPointerMove(e: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    }
    function onPointerLeave() {
      pointer.active = false;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(container);

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    step();
    if (reduceMotion) {
      // draw a single static frame
      visible = true;
      step();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
