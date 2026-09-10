"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { PERSONAL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-text">
            Ponraj<span className="text-gold">.</span>
          </span>
          <span className="text-xs text-muted-2">
            © {new Date().getFullYear()} — built with care.
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-gold">
            <GithubIcon className="size-[18px]" />
          </a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-gold">
            <LinkedinIcon className="size-[18px]" />
          </a>
          <a href={`mailto:${PERSONAL.email}`} aria-label="Email" className="text-muted transition-colors hover:text-gold">
            <Mail className="size-[18px]" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="glass flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:text-gold"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
