"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { PERSONAL } from "@/lib/data";

const LINKS = [
  { icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: GithubIcon, label: "GitHub", value: "ponrajc918-art", href: PERSONAL.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "ponrajdeveloper", href: PERSONAL.linkedin },
  { icon: MessageCircle, label: "WhatsApp", value: PERSONAL.phone, href: PERSONAL.whatsapp },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend is wired up for this static build — submitting opens the
    // visitor's own email client with the message pre-filled, so it reaches
    // PERSONAL.email without needing a server. Swap this for a real API
    // route (or a service like Resend/Formspree) when one is available.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Open to AI/ML, Data Analytics, and Python developer internships — reach out directly or send a message."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <RevealGroup className="flex flex-col gap-4 lg:col-span-5">
            {LINKS.map((link) => (
              <motion.a
                key={link.label}
                variants={staggerItem}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-gold/30"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/20">
                  <link.icon className="size-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-2">{link.label}</p>
                  <p className="text-text">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass flex flex-col gap-5 rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm text-text outline-none transition-colors focus:border-gold/50"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm text-text outline-none transition-colors focus:border-gold/50"
                    placeholder="you@email.com"
                  />
                </Field>
              </div>
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-none rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-sm text-text outline-none transition-colors focus:border-gold/50"
                  placeholder="What are you looking to build?"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-transform hover:scale-[1.02]"
              >
                <Send className="size-4" />
                Send Message
              </button>
              <p className="text-center text-xs text-muted-2">
                {sent
                  ? "Opening your email client — if it didn't open, email me directly at " + PERSONAL.email
                  : "Opens your email client with this message pre-filled."}
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-2">
        {label}
      </span>
      {children}
    </label>
  );
}
