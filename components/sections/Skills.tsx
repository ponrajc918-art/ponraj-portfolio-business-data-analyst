"use client";

import { Code2, BarChart3, BrainCircuit, Server, Binary, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { SKILLS } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Programming: Code2,
  "Data Analytics & Visualization": BarChart3,
  "Machine Learning": BrainCircuit,
  "Backend Development": Server,
  "Data Structures & Algorithms": Binary,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A practical, end-to-end toolkit"
          description="From raw data to a deployed, decision-ready system."
        />

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category) => {
            const Icon = ICONS[category.title] ?? Code2;
            return (
              <motion.div
                key={category.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-gold/30"
              >
                <div className="absolute -right-8 -top-8 size-28 rounded-full bg-gold/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex size-11 items-center justify-center rounded-xl bg-gold/10">
                  <Icon className="size-5 text-gold" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-text">{category.title}</h3>
                <p className="mt-1 text-sm text-muted-2">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
