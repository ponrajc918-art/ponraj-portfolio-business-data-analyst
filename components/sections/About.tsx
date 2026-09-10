"use client";

import { GraduationCap, Award, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/data";

const STATS = [
  { icon: Layers, value: "3", label: "AI/ML projects shipped" },
  { icon: GraduationCap, value: "2027", label: "Expected graduation · B.Tech. AI & ML" },
  { icon: Award, value: "Skillrack", label: "Python certification" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About"
              title="Turning data into decisions"
              description="A recruiter-oriented summary of who I am and what I build."
            />

            <Reveal delay={0.15} className="mt-8 text-balance text-lg leading-relaxed text-muted">
              {ABOUT.summary}
            </Reveal>

            <RevealGroup className="mt-10 flex flex-wrap gap-3">
              {ABOUT.focusAreas.map((area) => (
                <motion.span
                  key={area}
                  variants={staggerItem}
                  className="glass rounded-full px-4 py-2 text-sm text-text"
                >
                  {area}
                </motion.span>
              ))}
            </RevealGroup>

            <Reveal delay={0.2} className="mt-12 border-t border-border pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Soft Skills</p>
              <p className="mt-3 text-muted">{ABOUT.softSkills.join(" · ")}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <RevealGroup className="flex flex-col gap-4">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="glass flex items-center gap-4 rounded-2xl p-5"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                    <stat.icon className="size-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-text">{stat.value}</p>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={staggerItem} className="glass rounded-2xl p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">Education</p>
                <p className="mt-3 font-medium text-text">{ABOUT.education.degree}</p>
                <p className="mt-1 text-sm text-muted">{ABOUT.education.school}</p>
                <p className="mt-1 text-sm text-muted-2">{ABOUT.education.grad}</p>
              </motion.div>
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
