"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, FolderGit2, Mail, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NeuralCanvas } from "@/components/effects/NeuralCanvas";
import { GridGlow } from "@/components/effects/GridGlow";
import { PortraitVisual } from "@/components/sections/PortraitVisual";
import { RotatingWord } from "@/components/sections/RotatingWord";
import { PERSONAL } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;
const TITLE_WORDS = [
  "AI / ML Engineer",
  "website developer",
  "Data Analytics Developer",
  "Python Developer",
] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0">
        <GridGlow variant="hero" />
        <NeuralCanvas className="absolute inset-0" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-[pulse-soft_2s_ease-in-out_infinite] rounded-full bg-gold" />
                <span className="relative inline-flex size-1.5 rounded-full bg-gold" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-soft">
                Open to AI/ML &amp; Data Analytics Internships
              </span>
            </motion.div>

            <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-tight text-text">
              <Line delay={0.05}>Ponraj</Line>
              <Line delay={0.15}>C</Line>
            </h1>

            <div className="mt-5 h-[1.6em] text-xl font-medium text-muted sm:text-2xl">
              <RotatingWord words={TITLE_WORDS} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
              className="mt-7 max-w-lg text-balance text-base leading-relaxed text-muted sm:text-lg"
            >
              {PERSONAL.statement}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg">
                <a href={PERSONAL.resumeUrl} download>
                  <ArrowDownToLine className="size-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="#projects">
                  <FolderGit2 className="size-4" />
                  View Projects
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#contact">
                  <Mail className="size-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-12 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-2"
            >
              <span>{PERSONAL.location}</span>
              <span className="h-px w-8 bg-border-strong" />
              <span>IFET College of Engineering</span>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <PortraitVisual />
          </div>
        </div>
      </Container>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute inset-x-0 bottom-8 z-10 mx-auto hidden w-fit flex-col items-center gap-2 text-muted-2 transition-colors hover:text-gold sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
